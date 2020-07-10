/* global mailchimpAdmin */

( function( $ ) {
	// Mailchimp Icon
	var icon =
		'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(-45.478101,-100.73059)"><g transform="matrix(0.26458333,0,0,0.26458333,15.6741,59.72)"><path d="m 176.433,197.529 c 0.657,-0.078 1.286,-0.082 1.865,0 0.335,-0.768 0.392,-2.091 0.091,-3.532 -0.447,-2.142 -1.053,-3.438 -2.305,-3.236 -1.252,0.202 -1.298,1.754 -0.85,3.895 0.252,1.205 0.7,2.235 1.199,2.873"></path><path d="m 165.688,199.224 c 0.895,0.393 1.446,0.654 1.661,0.426 0.139,-0.142 0.097,-0.413 -0.117,-0.762 -0.442,-0.721 -1.351,-1.453 -2.316,-1.864 -1.972,-0.849 -4.325,-0.567 -6.14,0.737 -0.599,0.439 -1.167,1.047 -1.086,1.416 0.026,0.119 0.116,0.209 0.326,0.239 0.494,0.056 2.22,-0.816 4.209,-0.938 1.403,-0.086 2.566,0.353 3.462,0.746"></path><path d="m 163.887,200.252 c -1.167,0.184 -1.81,0.569 -2.223,0.926 -0.352,0.308 -0.57,0.649 -0.568,0.888 0.001,0.114 0.05,0.18 0.089,0.213 0.053,0.047 0.116,0.073 0.192,0.073 0.263,0 0.854,-0.237 0.854,-0.237 1.623,-0.581 2.694,-0.51 3.755,-0.39 0.586,0.066 0.864,0.102 0.992,-0.099 0.038,-0.058 0.084,-0.183 -0.033,-0.373 -0.273,-0.443 -1.451,-1.192 -3.057,-1.001"></path><path d="m 172.805,204.025 c 0.792,0.389 1.664,0.236 1.948,-0.341 0.284,-0.577 -0.128,-1.361 -0.92,-1.75 -0.792,-0.389 -1.664,-0.236 -1.948,0.341 -0.284,0.578 0.128,1.361 0.92,1.75"></path><path d="m 177.896,199.576 c -0.643,-0.011 -1.177,0.695 -1.192,1.578 -0.015,0.883 0.495,1.606 1.138,1.617 0.643,0.011 1.177,-0.695 1.192,-1.578 0.015,-0.882 -0.495,-1.606 -1.138,-1.617"></path><path d="m 134.683,215.485 c -0.16,-0.201 -0.423,-0.14 -0.678,-0.08 -0.178,0.042 -0.379,0.088 -0.6,0.085 -0.473,-0.009 -0.874,-0.211 -1.099,-0.557 -0.293,-0.45 -0.276,-1.121 0.047,-1.889 l 0.151,-0.344 c 0.516,-1.158 1.379,-3.095 0.41,-4.941 -0.73,-1.39 -1.92,-2.255 -3.351,-2.437 -1.374,-0.174 -2.788,0.335 -3.69,1.33 -1.423,1.57 -1.646,3.707 -1.371,4.462 0.101,0.276 0.259,0.353 0.373,0.369 0.242,0.032 0.6,-0.144 0.824,-0.747 l 0.064,-0.196 c 0.1,-0.319 0.286,-0.913 0.591,-1.389 0.368,-0.574 0.94,-0.969 1.612,-1.114 0.684,-0.147 1.384,-0.016 1.97,0.368 0.997,0.652 1.381,1.874 0.955,3.039 -0.22,0.603 -0.578,1.756 -0.499,2.703 0.16,1.917 1.339,2.687 2.398,2.769 1.03,0.039 1.75,-0.54 1.932,-0.962 0.107,-0.25 0.017,-0.402 -0.042,-0.467"></path><path d="m 144.475,180.275 c 3.36,-3.882 7.495,-7.257 11.2,-9.152 0.128,-0.066 0.264,0.073 0.195,0.199 -0.294,0.533 -0.861,1.674 -1.04,2.539 -0.028,0.135 0.119,0.236 0.233,0.159 2.305,-1.571 6.314,-3.255 9.831,-3.471 0.151,-0.009 0.224,0.184 0.104,0.277 -0.535,0.41 -1.12,0.978 -1.547,1.552 -0.073,0.098 -0.004,0.238 0.118,0.239 2.469,0.018 5.95,0.882 8.219,2.155 0.153,0.086 0.044,0.383 -0.128,0.344 -3.433,-0.787 -9.052,-1.384 -14.89,0.04 -5.211,1.271 -9.189,3.234 -12.09,5.344 -0.147,0.107 -0.323,-0.087 -0.204,-0.224 z m 16.732,37.612 0.001,0.002 0.002,0.004 z m 13.854,1.635 c 0.1,-0.042 0.168,-0.155 0.157,-0.268 -0.014,-0.139 -0.138,-0.24 -0.277,-0.226 0,0 -7.169,1.061 -13.942,-1.418 0.738,-2.398 2.699,-1.532 5.664,-1.293 5.344,0.319 10.134,-0.462 13.674,-1.478 3.067,-0.88 7.096,-2.616 10.225,-5.086 1.055,2.318 1.428,4.87 1.428,4.87 0,0 0.817,-0.146 1.5,0.274 0.645,0.397 1.118,1.222 0.795,3.356 -0.658,3.986 -2.352,7.222 -5.2,10.199 -1.734,1.866 -3.838,3.488 -6.246,4.668 -1.279,0.672 -2.64,1.253 -4.079,1.722 -10.736,3.507 -21.726,-0.348 -25.268,-8.626 -0.283,-0.622 -0.522,-1.274 -0.71,-1.955 -1.509,-5.455 -0.228,-12 3.778,-16.12 v -0.002 c 0.247,-0.262 0.499,-0.571 0.499,-0.96 0,-0.325 -0.207,-0.668 -0.386,-0.912 -1.402,-2.033 -6.257,-5.497 -5.282,-12.201 0.7,-4.816 4.912,-8.208 8.839,-8.007 l 0.995,0.057 c 1.702,0.101 3.186,0.319 4.587,0.378 2.345,0.102 4.453,-0.239 6.951,-2.32 0.842,-0.702 1.518,-1.311 2.661,-1.504 0.12,-0.021 0.419,-0.128 1.016,-0.1 0.61,0.033 1.19,0.2 1.711,0.547 2.002,1.332 2.286,4.559 2.39,6.919 0.059,1.347 0.222,4.607 0.278,5.543 0.127,2.14 0.69,2.441 1.828,2.816 0.64,0.211 1.234,0.368 2.11,0.614 2.65,0.744 4.221,1.499 5.212,2.469 0.591,0.606 0.866,1.25 0.951,1.864 0.312,2.28 -1.77,5.096 -7.283,7.655 -6.026,2.797 -13.337,3.505 -18.388,2.942 l -1.77,-0.2 c -4.04,-0.544 -6.345,4.677 -3.92,8.255 1.563,2.306 5.82,3.806 10.079,3.807 9.765,0.001 17.271,-4.169 20.063,-7.77 l 0.223,-0.318 c 0.138,-0.207 0.024,-0.321 -0.147,-0.204 -2.281,1.561 -12.413,7.758 -23.251,5.893 0,0 -1.317,-0.217 -2.519,-0.684 -0.955,-0.372 -2.955,-1.292 -3.198,-3.343 8.746,2.705 14.253,0.148 14.253,0.148 z m -48.039,-20.785 c -3.042,0.591 -5.723,2.315 -7.362,4.697 -0.98,-0.817 -2.805,-2.399 -3.128,-3.016 -2.617,-4.97 2.856,-14.632 6.68,-20.089 9.45,-13.485 24.25,-23.692 31.101,-21.84 1.114,0.315 4.803,4.592 4.803,4.592 0,0 -6.849,3.8 -13.2,9.097 -8.558,6.589 -15.022,16.166 -18.895,26.559 z m 5.111,22.805 c -0.46,0.079 -0.93,0.11 -1.404,0.098 -4.577,-0.123 -9.52,-4.243 -10.011,-9.129 -0.543,-5.401 2.217,-9.557 7.103,-10.543 0.584,-0.118 1.29,-0.186 2.051,-0.146 2.738,0.15 6.772,2.252 7.693,8.216 0.816,5.282 -0.48,10.659 -5.432,11.503 z m 61.996,-9.564 c -0.039,-0.139 -0.295,-1.072 -0.646,-2.197 -0.351,-1.126 -0.714,-1.917 -0.714,-1.917 1.408,-2.107 1.433,-3.992 1.245,-5.059 -0.2,-1.323 -0.751,-2.45 -1.861,-3.616 -1.11,-1.165 -3.381,-2.359 -6.572,-3.255 l -1.674,-0.465 c -0.008,-0.069 -0.088,-3.947 -0.16,-5.612 -0.053,-1.204 -0.156,-3.083 -0.739,-4.933 -0.695,-2.505 -1.905,-4.697 -3.416,-6.099 4.17,-4.322 6.773,-9.084 6.766,-13.168 -0.012,-7.855 -9.659,-10.232 -21.548,-5.309 l -2.519,1.069 c -0.011,-0.011 -4.554,-4.468 -4.622,-4.528 -13.555,-11.823 -55.935,35.284 -42.386,46.725 l 2.961,2.509 c -0.768,1.99 -1.07,4.27 -0.823,6.721 0.316,3.149 1.94,6.167 4.573,8.499 2.499,2.214 5.785,3.616 8.973,3.613 5.273,12.151 17.321,19.605 31.447,20.025 15.153,0.45 27.873,-6.66 33.203,-19.432 0.349,-0.896 1.828,-4.935 1.828,-8.501 0,-3.583 -2.026,-5.068 -3.316,-5.068"></path></g></g></svg>';

	var connectURL = '';
	/**
	 * Whether the site is connected to Mailchimp or no.
	 */
	var formWrapper = $( '.mailchimp-widget-jetpack-form-wrapper' );

	/**
	 * Check the connectivity with MailChimp.
	 */
	function apiCall() {
		formWrapper.empty();
		showLoading();
		$.ajax( {
			url: '/wp-json/wpcom/v2/mailchimp',
			data: { _wpnonce: mailchimpAdmin.nonce },
			dataType: 'json',
			type: 'GET',
			success: function( data ) {
				formWrapper.empty();
				connectURL = data.connect_url;
				if ( 'connected' === data.code ) {
					showForm();
					generateGroupsField();
					generateColorFields();
				} else {
					showPlaceholder();
				}
			},
		} );
	}

	/**
	 * Show the loading div
	 */
	function showLoading() {
		var loading = $( '<div>', { class: 'jetpack-mailchimp-loading' } );
		var animation = $( '<div>', { class: 'jetpack-mailchimp-spinner' } );
		loading.append( icon ).append( animation );
		formWrapper.append( loading );
	}

	/**
	 * In case the site is not connected, this is shown.
	 */
	function showPlaceholder() {
		var placeholderData = JSON.parse( mailchimpAdmin.placeholderData );

		var brand = $( '<div>', { class: 'jetpack-mailchimp-placeholder-brand' } );
		brand.append( icon );
		brand.append( $( '<span>', { text: 'Mailchimp' } ) );

		var instructions = $( '<div>', {
			class: 'jetpack-mailchimp-placeholder-instructions',
			text: placeholderData.instructions,
		} );

		var setupFormButton = $( '<a>', {
			class: 'jetpack-mailchimp-placeholder-setup',
			text: placeholderData.setupButtonText,
			href: connectURL,
			target: '_blank',
		} );

		var recheckButton = $( '<button>', {
			class: 'jetpack-mailchimp-recheck-button',
			text: placeholderData.recheckText,
		} );

		recheckButton.click( function( e ) {
			e.preventDefault();
			apiCall();
		} );

		var placeholder = $( '<div>', { class: 'jetpack-mailchimp-placeholder' } );
		placeholder
			.append( brand )
			.append( instructions )
			.append( setupFormButton )
			.append( recheckButton );

		formWrapper.append( placeholder );
	}

	/**
	 * Get Mailchimp Groups
	 */
	function generateGroupsField() {
		/**
		 * Change the value of the input for the groups.
		 * @param {string} groupId Id of the group that was checked/unchecked.
		 * @param {boolean} add If true then the group id is added, if false the group id is removed from the hidden input value.
		 */
		function generateHiddenFieldValue( groupId, add ) {
			var groupsInput = $( '.widgets-holder-wrap #jetpack-mailchimp-interests' );

			var groupsValue = groupsInput.val();
			var arrayGroups = groupsValue.length > 0 ? groupsValue.split( '_' ) : [];

			if ( add ) {
				if ( ! arrayGroups.includes( groupId ) ) {
					arrayGroups.push( groupId );
				}
			} else {
				var index = arrayGroups.indexOf( groupId );
				if ( -1 < index ) {
					arrayGroups.splice( index, 1 );
				}
			}

			groupsInput.val( arrayGroups.join( '_' ) );
		}

		/**
		 * Fill the groups field with the group retrieved from the server.
		 * @param {object} interests Object containing the interests.
		 */
		function fillGroupsField( interests ) {
			var interestsWrapper = $( '.jetpack-mailchimp-interests-wrapper' );

			var interestsServer = mailchimpAdmin.interests.split( '_' );
			interests.interest_categories.forEach( function( interest_category ) {
				interest_category.interests.forEach( function( interest ) {
					var checkboxWrapper = $( '<div>', { class: 'jetpack-mailchimp-checkbox-wrapper' } );

					var checked = interestsServer.includes( interest.id );
					var checkbox = $( '<input>', { type: 'checkbox', value: interest.id, checked: checked } );
					checkbox.change( function() {
						var checked = $( this ).is( ':checked' );
						var interestId = $( this ).val();
						generateHiddenFieldValue( interestId, checked );
					} );

					checkboxWrapper.append( checkbox );
					checkboxWrapper.append( $( '<label>', { text: interest.name } ) );
					interestsWrapper.append( checkboxWrapper );
				} );
			} );

			interestsWrapper.append(
				$( '<input>', {
					type: 'hidden',
					name: mailchimpAdmin.interestsFieldName,
					value: mailchimpAdmin.interests,
					id: 'jetpack-mailchimp-interests',
				} )
			);
		}

		$.ajax( {
			url: '/wp-json/wpcom/v2/mailchimp/groups',
			data: { _wpnonce: mailchimpAdmin.nonce },
			type: 'GET',
			dataType: 'json',
			success: function( data ) {
				if ( 'undefined' === typeof data.error ) {
					fillGroupsField( data );
				}
			},
		} );
	}

	/**
	 * Generate the color pickers.
	 */
	function generateColorFields() {
		$( '.jetpack-mailchimp-color-input' ).wpColorPicker( {
			change: function( e, ui ) {
				var target = $( this ).attr( 'target' );
				$( '.widgets-holder-wrap #' + target ).val( ui.color.toString() );
				// So the 'Save' button is activated and value sent to the server.
				$( '.widgets-holder-wrap #' + target ).trigger( 'change' );
			},
		} );
	}

	/**
	 * Generates the widget form.
	 */
	function showForm() {
		var form = $( '<div>', { class: 'jetpack-mailchimp-form' } );

		var sections = JSON.parse( mailchimpAdmin.formData );

		sections.forEach( function( section ) {
			var sectionEl = $( '<div>', { class: 'jetpack-mailchimp-section' } );

			var sectionToggler = $( '<div>', { class: 'jetpack-mailchimp-section-toggler' } );
			var sectionTitle = $( '<span>', {
				class: 'jetpack-mailchimp-section-title',
				text: section.title,
			} );
			sectionToggler.append( sectionTitle );

			var sectionContent = $( '<div>', { class: 'jetpack-mailchimp-section-content' } );

			if ( 'undefined' !== typeof section.fields ) {
				section.fields.forEach( function( field ) {
					var fieldWrapper = $( '<div>', { class: 'jetpack-mailchimp-field' } );
					switch ( field.type ) {
						case 'text':
						case 'number':
							var label = $( '<label>', { for: field.id, text: field.title } );
							var input = $( '<input>', {
								type: field.type,
								id: field.id,
								name: field.name,
								value: field.value ? field.value : field.default,
								placeholder: field.placeholder,
							} );
							fieldWrapper.append( label ).append( input );
							break;

						case 'groups':
							var groupsWrapper = $( '<div>', { class: 'jetpack-mailchimp-interests-wrapper' } );
							fieldWrapper.append( groupsWrapper );
							break;

						case 'color':
							var inputColor = $( '<input>', {
								class: 'jetpack-mailchimp-color-input',
								type: 'text',
								target: field.id,
								value: field.value ? field.value : field.default,
							} );

							var input = $( '<input>', {
								type: 'hidden',
								value: field.value ? field.value : field.default,
								name: field.name,
								id: field.id,
							} );

							var label = $( '<label>', { text: field.label } );
							fieldWrapper
								.append( label )
								.append( inputColor )
								.append( input );
							break;

						case 'checkbox':
							var label = $( '<label>', { for: field.id, text: field.title } );
							var checkbox = $( '<input>', {
								type: 'checkbox',
								id: field.id,
								name: field.name,
								checked: 'on' === field.value ? true : false,
							} );
							fieldWrapper.append( checkbox ).append( label );
							break;
					}

					fieldWrapper.addClass( 'jetpack-mailchimp-' + field.type );
					sectionContent.append( fieldWrapper );
				} );
			}

			if ( 'undefined' !== typeof section.extra_content ) {
				section.extra_content.forEach( function( extra ) {
					switch ( extra.type ) {
						case 'link':
							var link = $( '<a>', {
								href: 'connect_url' === extra.link ? connectURL : extra.link,
								text: extra.text,
								target: '_blank',
								class: 'jetpack-mailchimp-link',
							} );
							sectionContent.append( link );
							break;
					}
				} );
			}

			sectionEl.append( sectionToggler ).append( sectionContent );

			form.append( sectionEl );
		} );

		formWrapper.append( form );
	}

	/**
	 * Show the widget user interface
	 */
	function init() {
		if ( ! mailchimpAdmin.oldForm ) {
			apiCall();
		} else {
			$( '.widgets-holder-wrap #jetpack-mailchimp-new-form' ).change( function() {
				if ( $( this ).is( ':checked' ) ) {
					var answer = confirm( 'Are you sure?' );

					if ( answer ) {
						$( '.mailchimp-code' ).remove();
						$( '.jetpack-mailchimp-new-form-wrapper' ).hide();
						apiCall();
					} else {
						$( this ).removeProp( 'checked' );
					}
				}
			} );
		}
	}

	// This is executed only after the form is saved.
	$( window ).on( 'jetpack_mailchimp_load_form', function() {
		formWrapper = $( '.mailchimp-widget-jetpack-form-wrapper' );
		init();
	} );

	$( document ).ready( function() {
		init();
	} );

	// Form events.
	var widgetsWrap = $( '.widgets-holder-wrap' );
	widgetsWrap.on( 'click', '.jetpack-mailchimp-section-toggler', function() {
		$( this )
			.next()
			.slideToggle();
		$( this ).toggleClass( 'jetpack-mailchimp-closed' );
	} );
} )( jQuery );