$(document).ready(function () {
  var breakpoint = 500;

  // If the screen is smaller then 840px wide remove all classes.
  if ($(window).width() < breakpoint) {
    $('.js-slidein').removeClass('js-slidein');
  }

  // Check which of the elements with this class is visible on the page
  $('.js-slidein').each(function (i) {
    var bottomObject = $(this).offset().top;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein');
    }
  });

  // Trigger the slide-in effect on scroll
  $(window).scroll(function () {
    $('.js-slidein').each(function (i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (bottomWindow > bottomObject - 350 - ($(this).hasClass('stay-in-touch') * 350)) {
        $(this).addClass('js-slidein-visible');
      }
    });
  });
});
