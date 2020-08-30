// // ハンバーガーメニュー ---------------------------
// $(function () {
//   $('.btn-trigger').on('click', function () {
//     $(this).toggleClass('active');
//     $('.header-nav').toggleClass('active');
//     return false;
//   });
// });

// ポートフォリオのスリック実装 ===========================
//htmlが完全に読み込まれてからでないと、jQueryやJavaScriptは正しく機能しない事がおおい
$(function () {
  //top-sliderに対してslickしろと言う記述
  $('.portfolio-slider').slick({
    autoplay: true, //自動再生
    arrows: true,
    dots: true,
    speed: 200,
    easing: 'swing',
    centerMode: true,
    centerPadding: '25%',
    arrows: true,
    prevArrow: '<div class="slide-btn prev-btn"></div>',
    nextArrow: '<div class="slide-btn next-btn"></div>',
    responsive: [{
      breakpoint: 1000,
      settings: {
        centerPadding: '2%',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });
});
//スクロールイベント************************
// フェードイン ===========================
$(window).on("scroll", function () {
  // コロリン ===========================
  if ($(window).scrollTop() > 300) {
    $('.circle-banner').addClass('is-over');
  } else {
    $('.circle-banner').removeClass('is-over');
  }
  if ($(window).scrollTop() > $('.footer').offset().top - 1000) {
    $('.circle-banner').removeClass('is-over');
  }
  //データフェードインをHTMLに付与する
  $('[data-fadeIn]').each(function (index, el) {
    if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
      $(el).addClass('is-over');
    }
  });
});
// スムーススクロール
jQuery('a[href^="#"]').click(function () {
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  if ("fixed" !== jQuery(".header").css("position")) {
    position = jQuery(target).offset().top;
  }
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate({
      scrollTop: position
    },
    speed
  );
  return false;
});

// スクロール判定
jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery('.totop').addClass('is-show');
  } else {
    jQuery('.totop').removeClass('is-show');
  }
});
jQuery('.header-nav ul li a').click(function() {
  jQuery('.header-nav ul li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});