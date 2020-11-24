/**
 * External dependencies
 */
import { find } from 'lodash';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import {
	Button,
	Panel,
	PanelBody,
	ToggleControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';
import LabelsDropdown from './components/labels-dropdown';
import TimeStampControl from './components/time-stamp-control';

const blockName = 'jetpack/changelog';
const fallbackBlockName = 'core/paragraph';

const defaultLabels = [
	{
		value: __( 'new', 'jetpack' ),
		slug: 'new',
	},
	{
		value: __( 'improved', 'jetpack' ),
		slug: 'improved',
	},
	{
		value: __( 'fixed', 'jetpack' ),
		slug: 'fixed',
	},
];

export default function ChangelogEdit ( {
	className,
	attributes,
	setAttributes,
	context,
	mergeBlocks,
	onReplace,
	instanceId,
	onTimeStampClick,
} ) {
	const {
		label,
		labelSlug,
		showTimeStamp,
		timeStamp,
		content,
		placeholder,
	} = attributes;

	// Block context integration.
	const labelsFromContext = context[ 'changelog/labels' ];
	const showTimeStampFromContext = context[ 'changelog/showTimeStamp' ];

	// Follow lables changes when block context changes.
	useEffect( () => {
		if ( ! labelsFromContext ) {
			return;
		}

		 if ( ! labelSlug ) {
			return;
		}

		const labelBySlug = find( labelsFromContext, ( contextLabel ) => contextLabel.slug === labelSlug );
		if ( ! labelBySlug ) {
			return;
		}

		setAttributes( {
			labelSlug: labelBySlug.slug,
			label: labelBySlug.value,
		} );
	}, [ labelSlug, labelsFromContext, setAttributes ] );

	const labels = labelsFromContext?.length ? labelsFromContext : defaultLabels;
	const showTimeStampFlag = showTimeStamp || showTimeStampFromContext;

	return (
		<div class={ className }>
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'Settings', 'jetpack' ) }>
						<ToggleControl
							label={ __( 'Show time stamp', 'jetpack' ) }
							checked={ showTimeStamp }
							onChange={
								( show ) => setAttributes( { showTimeStamp: show } )
							}
						/>

						{ showTimeStampFlag && (
							<TimeStampControl
								className={ `${ className }__timestamp-control` }
								value={ timeStamp }
								onChange={ ( newTimeStampValue ) => {
									setAttributes( { timeStamp: newTimeStampValue } );
								} }
							/>
						) }
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div class={ `${ className }__meta` }>
				<LabelsDropdown
					id={ `changelog-${ instanceId }-labels-selector` }
					className={ `${ className }__labels-selector` }
					labels={ labels }
					value={ label }
					slug={ labelSlug }
					onSelect={ ( { newLabel, newLabelSlug } ) => {
						setAttributes( {
							labelSlug: newLabelSlug,
							label: newLabel,
						} );
					 } }
					onChange={ ( { newLabel, newLabelSlug } ) => setAttributes( {
						labelSlug: newLabelSlug,
						label: newLabel,
					} ) }
				/>

				{ showTimeStampFlag && onTimeStampClick && (
					<Button
						className={ `${ className }__timestamp-button` }
						onClick={ onTimeStampClick }
						isTertiary
					>
						{ timeStamp }
					</Button>
				) }

				{ showTimeStampFlag && ! onTimeStampClick && (
					<div className={ `${ className }__timestamp` }>
						{ timeStamp }
					</div>
				) }
			</div>

			<RichText
				identifier="content"
				wrapperClassName="wp-block-p2-changelog__content"
				value={ content }
				onChange={ ( value ) =>
					setAttributes( { content: value } )
				}
				onMerge={ mergeBlocks }
				onSplit={ ( value ) => {
					if ( ! content.length ) {
						return createBlock( fallbackBlockName );
					}

					if ( ! value ) {
						return createBlock( blockName );
					}

					return createBlock( blockName, {
						...attributes,
						content: value,
					} );
				} }
				onReplace={ onReplace }
				onRemove={
					onReplace ? () => onReplace( [] ) : undefined
				}
				placeholder={ placeholder || __( 'Add entry' ) }
			/>
		</div>
	);
}
