(function ($) {
  "use strict";
  //Loading AOS animation with css class

  //fade animation
  $(".mighty-plumbers-fade-up").attr({
    "data-aos": "fade-up",
  });
  $(".mighty-plumbers-fade-down").attr({
    "data-aos": "fade-down",
  });
  $(".mighty-plumbers-fade-left").attr({
    "data-aos": "fade-left",
  });
  $(".mighty-plumbers-fade-right").attr({
    "data-aos": "fade-right",
  });
  $(".mighty-plumbers-fade-up-right").attr({
    "data-aos": "fade-up-right",
  });
  $(".mighty-plumbers-fade-up-left").attr({
    "data-aos": "fade-up-left",
  });
  $(".mighty-plumbers-fade-down-right").attr({
    "data-aos": "fade-down-right",
  });
  $(".mighty-plumbers-fade-down-left").attr({
    "data-aos": "fade-down-left",
  });

  //slide animation
  $(".mighty-plumbers-slide-left").attr({
    "data-aos": "slide-left",
  });
  $(".mighty-plumbers-slide-right").attr({
    "data-aos": "slide-right",
  });
  $(".mighty-plumbers-slide-up").attr({
    "data-aos": "slide-up",
  });
  $(".mighty-plumbers-slide-down").attr({
    "data-aos": "slide-down",
  });

  //zoom animation
  $(".mighty-plumbers-zoom-in").attr({
    "data-aos": "zoom-in",
  });
  $(".mighty-plumbers-zoom-in-up").attr({
    "data-aos": "zoom-in-up",
  });
  $(".mighty-plumbers-zoom-in-down").attr({
    "data-aos": "zoom-in-down",
  });
  $(".mighty-plumbers-zoom-in-left").attr({
    "data-aos": "zoom-in-left",
  });
  $(".mighty-plumbers-zoom-in-right").attr({
    "data-aos": "zoom-in-right",
  });
  $(".mighty-plumbers-zoom-out").attr({
    "data-aos": "zoom-out",
  });
  $(".mighty-plumbers-zoom-out-up").attr({
    "data-aos": "zoom-out-up",
  });
  $(".mighty-plumbers-zoom-out-down").attr({
    "data-aos": "zoom-out-down",
  });
  $(".mighty-plumbers-zoom-out-left").attr({
    "data-aos": "zoom-out-left",
  });
  $(".mighty-plumbers-zoom-out-right").attr({
    "data-aos": "zoom-out-right",
  });

  //flip animation
  $(".mighty-plumbers-flip-up").attr({
    "data-aos": "flip-up",
  });
  $(".mighty-plumbers-flip-down").attr({
    "data-aos": "flip-down",
  });
  $(".mighty-plumbers-flip-left").attr({
    "data-aos": "flip-left",
  });
  $(".mighty-plumbers-flip-right").attr({
    "data-aos": "flip-right",
  });

  //animation ease attributes
  $(".mighty-plumbers-linear").attr({
    "data-aos-easing": "linear",
  });
  $(".mighty-plumbers-ease").attr({
    "data-aos-easing": "ease",
  });
  $(".mighty-plumbers-ease-in").attr({
    "data-aos-easing": "ease-in",
  });
  $(".mighty-plumbers-ease-in-back").attr({
    "data-aos-easing": "ease-in-back",
  });
  $(".mighty-plumbers-ease-out").attr({
    "data-aos-easing": "ease-out",
  });
  $(".mighty-plumbers-ease-out-back").attr({
    "data-aos-easing": "ease-out-back",
  });
  $(".mighty-plumbers-ease-in-out-back").attr({
    "data-aos-easing": "ease-in-out-back",
  });
  $(".mighty-plumbers-ease-in-shine").attr({
    "data-aos-easing": "ease-in-shine",
  });
  $(".mighty-plumbers-ease-out-shine").attr({
    "data-aos-easing": "ease-out-shine",
  });
  $(".mighty-plumbers-ease-in-out-shine").attr({
    "data-aos-easing": "ease-in-out-shine",
  });
  $(".mighty-plumbers-ease-in-quad").attr({
    "data-aos-easing": "ease-in-quad",
  });
  $(".mighty-plumbers-ease-out-quad").attr({
    "data-aos-easing": "ease-out-quad",
  });
  $(".mighty-plumbers-ease-in-out-quad").attr({
    "data-aos-easing": "ease-in-out-quad",
  });
  $(".mighty-plumbers-ease-in-cubic").attr({
    "data-aos-easing": "ease-in-cubic",
  });
  $(".mighty-plumbers-ease-out-cubic").attr({
    "data-aos-easing": "ease-out-cubic",
  });
  $(".mighty-plumbers-ease-in-out-cubic").attr({
    "data-aos-easing": "ease-in-out-cubic",
  });
  $(".mighty-plumbers-ease-in-quart").attr({
    "data-aos-easing": "ease-in-quart",
  });
  $(".mighty-plumbers-ease-out-quart").attr({
    "data-aos-easing": "ease-out-quart",
  });
  $(".mighty-plumbers-ease-in-out-quart").attr({
    "data-aos-easing": "ease-in-out-quart",
  });

  setTimeout(function () {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, 100);

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var mightyplumbersStickyMenu = $(".mighty-plumbers-sticky-menu");
    var mightyplumbersStickyNavigation = $(".mighty-plumbers-sticky-navigation");

    if (mightyplumbersStickyMenu.length && scrollTop > 0) {
      mightyplumbersStickyMenu.addClass("sticky-menu-enabled mighty-plumbers-zoom-in-up");
    } else {
      mightyplumbersStickyMenu.removeClass("sticky-menu-enabled");
    }
  });
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery(".mighty-plumbers-scrollto-top a").fadeIn();
    } else {
      jQuery(".mighty-plumbers-scrollto-top a").fadeOut();
    }
  });
  jQuery(".mighty-plumbers-scrollto-top a").click(function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  // Function to start counter animation when element is in viewport
  function startCounterAnimation() {
    $(".mighty-plumbers-number-counter")
      .not(".counted")
      .each(function () {
        if (isElementInViewport(this)) {
          var $this = $(this);
          $this
            .addClass("counted")
            .prop("Counter", 0)
            .animate(
              {
                Counter: $this.text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $this.text(Math.ceil(now));
                },
              }
            );
        }
      });
  }

  // Check if element is in viewport on page load
  $(document).ready(function () {
    startCounterAnimation();
  });

  // Check if element is in viewport on scroll
  $(window).on("scroll", function () {
    startCounterAnimation();
  });
})(jQuery);
