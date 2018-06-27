define(["jquery", "./animation", "./mobile"], function($, AnimationController, MobileController) {
	var $win = $(window);
	var $body = $("body");

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$body.addClass("is-mobile");
		new MobileController();
	}

	$(".menu-icon").on("click", function(e){
		e.preventDefault();
		$("body").toggleClass("menu-open");
	});

	function assign_bootstrap_mode () {
		width = $win.width();
		var size = "";
		if (width < 768) {
			size = "xs";
		} else if (width < 992) {
			size = "sm";
		} else if (width < 1200) {
			size = "md";
		} else if (width > 1200) {
			size = "lg";
		}
		if ($body.data("size") != size) {
			$body.removeClass("mode-xs mode-sm mode-md mode-lg").addClass("mode-" + size);
			$body.data("size", size);

			$(".responsive-image").each(function () {
				var $img = $(this);
				// console.log("Handle responsive-image");
				var sizes = [];
				if (size == "lg") {
					sizes = ["lg", "md", "sm", "xs"];
				} else if (size == "md") {
					sizes = ["md", "lg", "sm", "xs"];
				} else if (size == "sm") {
					sizes = ["sm", "md", "lg", "xs"];
				} else if (size == "xs") {
					sizes = ["xs", "sm", "md", "lg"];
				}

				for (var i=0; i<4; i++) {
					if ($img.attr("data-src-" + sizes[i])) {
						$img.css("background-image", "url('" + $img.attr("data-src-" + sizes[i]) + "')").addClass("has-image");
						break;
					}
				}
			});
		}
	}

	$("a[href^='#']").on("click", function (e) {
		e.preventDefault();
		var $el = $(e.currentTarget),
			$target = $("[name='" + $el.attr("href").substr(1) + "']");

		if ($target.size()) {
			$('html, body').animate({
		        scrollTop: $target.offset().top
		    }, 1500);
		}

	});


	assign_bootstrap_mode();

	$(window).on("resize", function () {
		assign_bootstrap_mode();

		if (window.imsl_slide_shows) {
			for (var i=0; i<window.imsl_slide_shows.length; i++) {
				window.imsl_slide_shows[i].update_size();
			}
		}
	});




	// Setup the destinations menu
	$destination_menu = $(".select-destination");
	if ($("#menu-container a[href='#destinations']").size() > 0) {
		var $link = $("#menu-container a[href='#destinations']");
		var txt = $link.text();
		var $drop_wrapper = $("<div></div>").addClass("drop-wrapper").append( $("<span></span>").addClass("drop-inner").text(txt) );
		$link.replaceWith($drop_wrapper)
		$drop_wrapper.append($destination_menu);
	}


	// Setup the levels menu
	$level_menu = $(".select-level");
	if ($("#menu-container a[href='#levels']").size() > 0) {
		var $link = $("#menu-container a[href='#levels']");
		var txt = $link.text();
		var $drop_wrapper = $("<div></div>").addClass("drop-wrapper").append( $("<span></span>").addClass("drop-inner").text(txt) );
		$link.replaceWith($drop_wrapper)
		$drop_wrapper.append($level_menu);
	}

	// Setup the booking menu
	$main_booking = $(".main-booking");
	if ($("#menu-container a[href='#main-booking']").size() > 0) {
		var $link = $("#menu-container a[href='#main-booking']");
		var txt = $link.text();

		var $drop_wrapper = $("<div></div>").addClass("drop-wrapper highlight").append( $("<span></span>").addClass("drop-inner").text(txt) );
		$link.replaceWith($drop_wrapper)
		$drop_wrapper.parent().append($main_booking);
		$drop_wrapper.on("click", function (e) {
			e.preventDefault();
			$main_booking.toggleClass("open");
			$drop_wrapper.parent().toggleClass("open");
			if ($main_booking.hasClass("open")) {
				$main_booking.slideDown();
			} else {
				$main_booking.slideUp();
			}
		});
	}


	$(".drop-inner").on("click", function (e) {
		if (!$body.hasClass("mode-xs")) return;
		e.preventDefault();
		$(e.currentTarget).closest(".drop-wrapper").toggleClass("open");
	});
	$(".drop-wrapper h4").on("click", function (e) {
		if (!$body.hasClass("mode-xs")) return;
		e.preventDefault();
		$(e.currentTarget).closest(".col").toggleClass("open");
	});

	$(".select-language > a").on("click", function (e) {
		if (!$body.hasClass("mode-xs")) return;
		e.preventDefault();
		$(".select-language").toggleClass("open");
	});



	// Select the active destination type
	if (lapoint.destination_type) {
		$(".secondary-menu a[href='" + lapoint.destination_type.link + "']").addClass("active");
	}

	/*
	if ($("select").length) {
		requirejs(["Select2"], function(Select2) {
			$('select').select2({
				minimumResultsForSearch: Infinity
			});
		});
	}
	*/


	// Enable video sliders
	if ($(".kmc-component-video_slider").length) {
		requirejs(["../../kmc-modules/kmc-videos/js/video-slider"], function(VideoSlider) {
			$(".kmc-component-video_slider").each(function (index, element) {
				new VideoSlider({
					el: element
				});
			});
		});
	}


	if ($(".kmc-component-posts-slider").length) {
		requirejs(["../../../../plugins/kmc-posts-slider/js/posts-slider"], function(PostSlider) {
			$(".kmc-component-posts-slider").each(function (index, element) {
				new PostSlider({
					el: element
				});
			});
		});
	}
	/*if ($(".kmc-booking-bar").length) {
		requirejs(["../../kmc-modules/kmc-booking-bar/js/booking-bar"], function(BookingBar) {
			$(".kmc-booking-bar").each(function (index, element) {
				new BookingBar({
					el: element
				});
			});

		});
	}*/

	
	new AnimationController();

});