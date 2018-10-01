define(["jquery"], function($) {
	"use strict";

	var MobileController = function() {

		var html = $("html");
		var lang = $("html").attr("lang").substr(0,2);
		var $win = $(window);
		var topBannerHeight = $(".top-banner-bar").outerHeight();

		var readMoreText = [];
		readMoreText["en"] = "read more";
		readMoreText["no"] = "les mer";
		readMoreText["da"] = "l&#x00E6;s mere";
		readMoreText["sv"] = "l&#x00E4;s mer";

		var throttled_func = _.throttle(check_if_sticky, 100);

		$win.on('scroll', throttled_func);
				
		function check_if_sticky() {

			if( $win.scrollTop() > topBannerHeight ) {
				html.addClass( 'menu-is-sticky' );
			} else {
				html.removeClass( 'menu-is-sticky' );
			}
			console.log( $win.scrollTop(), topBannerHeight );
		}


		function fixKmcIntroComponent() {

			var $intro = $(".kmc-component-intro-section");

			if( !$intro.length || $intro.parent().hasClass('d-r-m')) {
				return;
			}

			var $text = $intro.find( ".inner p" );

			$text.each( function(index, el ) {
				limitText( el, 196 );
				$(el).find("span").click( function(){
					$(this).parent().text( $(this).parent()[0].original );
				});
			});

			$intro.addClass( "show" );

		};

		function fixIngressText( componentClass ) {

			var $cmp = $( componentClass );

			if(!$cmp.length || $cmp.parent().hasClass('d-r-m')) {
				return;
			}

			var $text = $cmp.find("header .ingress p");
			$text.each(function(index, el) {
				if( limitText( el, 128 ) ) {
					$(el).find("span").click( function(){
						$(this).parent().text( $(this).parent()[0].original );
					});					
				}
			});
		}		

		function fixKmcContentComponent() {

			var $content = $(".kmc-component-kmc_content .e-r-m");
			if( !$content.length || $content.parent().hasClass('d-r-m')) {
				return;
			}


			$content.each( function(index, el) {
			console.log( el );
				limitText( el, 196 );
				$(el).find("span").click( function(){
					$(this).parent().text( $(this).parent()[0].original );
				});
			});

			// not a default set of tags so try a few
			var $text = $content.find( ".inner ul li" );

		}

		function limitText( el, limit ) {
			
			// don't limit if we are just a bit over the limit
			if( limit + 46 > el.innerHTML.length ) {
				return false;
			}

			var span = $("<span>").innerHTML = "Read more";
			el.original = el.innerHTML;			
			el.innerHTML = el.innerHTML.substr(0, limit) + "...<span class='read-more-fix'> " + readMoreText[lang] + "</span>";

			return true;
		}

		//$( document ).ready( function() {
			fixKmcIntroComponent();
			fixKmcContentComponent();
			fixIngressText( ".kmc-component-camps" );
			fixIngressText( ".kmc-component-destination_boxes" );
			fixIngressText( ".kmc-component-levels" );
			fixIngressText( ".kmc-component-locations" );
			fixIngressText( ".kmc-component-packages" );
		//});

	};

	return MobileController;
	
});