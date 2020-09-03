/* JQuery ハンバーガーメニュー ==========================*/
$(function () {
  $('.btn-trigger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-list-items').toggleClass('active');
    return false;
  });
});
/* JQuery ハンバーガーメニュー ==========================*/
// トップ背景画像パララックス ===========================
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 2;

  if(bgPosition){
    $('#top').css('background-position', 'center top -'+ bgPosition + 'px');
 $('#contact').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});


// ポートフォリオのスリック実装 ===========================
//htmlが完全に読み込まれてからでないと、jQueryやJavaScriptは正しく機能しない事がおおい
$(function () {
  //top-sliderに対してslickしろと言う記述
  $('.portfolio-slider').slick({
    autoplay: true, //自動再生
    arrows: true,
    dots: true,
    rows: 1, //行数
    speed: 400,
    easing: 'swing',
    centerMode: true,
    centerPadding: '25%',
    arrows: true,
    fade: false, //スライド切替えをフェードにする
    slidesToShow: 2,
    prevArrow: '<div class="slide-btn prev-btn"></div>',
    nextArrow: '<div class="slide-btn next-btn"></div>',
    responsive: [{
      breakpoint: 1000,
      settings: {
        centerPadding: '0%',
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
jQuery('.header-nav ul li a').click(function () {
  jQuery('.header-nav ul li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
  return false;
});
// JQuery フェードイン ===========================
$(window).on("scroll", function () {
  //データフェードインをHTMLに付与する
  $('[data-fadeIn]').each(function (index, el) {
    if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
      $(el).addClass('is-over');
    }
  });
  //データフェードインをHTMLに付与する
  $('[data-zoom-up]').each(function (index, el) {
    if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
      $(el).addClass('data-zoom-up');
    }
  });
  //データフェードイン右をHTMLに付与する
  $('[data-fadeId-right]').each(function (index, el) {
    if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
      $(el).addClass('is-over');
    }
  });
  //データフェードイン右をHTMLに付与する
  $('[data-fadeId-left]').each(function (index, el) {
    if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
      $(el).addClass('is-over');
    }
  });

});


// 送信フォーム ===========================
const thxDiv = document.getElementById('thxMessage');
document.getElementById('mail-iframe').onload = (function () {
  // myformの値を取得 ---------------------------
  let email = document.getElementById('contact-email').value;
  // メールフォームに何かが入力されていた場合 
  if (email !== '') {

    //テキストの中に入力したアドレスを表示
    thxDiv.getElementsByTagName('span')[0].innerHTML = email;
    //myFormの値をリセット
    document.myForm.reset();
    // formWrapperで囲んだ範囲を消す
    //document.getElementById('formWrapper').style.display = 'none';
    //送信完了画面を表示
    thxDiv.style.display = 'grid';
  }
});

// モーダルを非表示 ---------------------------
thxDiv.addEventListener('click', () => {
  thxDiv.style.display = "none";
})


// ポートフォリオのアニメ ===========================
// モーダル1
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item1').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal1').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});
// モーダル2
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item2').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal2').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});
// モーダル3
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item3').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal3').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});
// モーダル4
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item4').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal4').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});
// モーダル5
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item5').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal5').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});
// モーダル6
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item6').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal6').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});
// モーダル7
$(function () {
  // モーダルのボタンをクリックした時
  $('#portfolio-item7').on('click', function (e) { //eタグはeventのこと
    //モーダルをフェードで表示// クリックしたモーダルボタンと同じ番目のモーダルを表示する
    $('#modal7').fadeToggle();
  });
  // ×やモーダルの背景をクリックした時
  $('.modal_wrap, .modal_close').on('click', (function () {
    $('.modal_wrap').fadeOut(); // モーダルを非表示にする
  }));
});