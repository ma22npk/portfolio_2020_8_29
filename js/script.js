  // コロリン ===========================
  if ($(window).scrollTop() > 300) {
    $('.circle-banner').addClass('is-over');
  } else {
    $('.circle-banner').removeClass('is-over');
  }
  if ($(window).scrollTop() > $('.footer').offset().top - 1000) {
    $('.circle-banner').removeClass('is-over');
  }