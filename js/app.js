$(function () {
  //////////////////////////////// ハンバーガーメニュー
  $('#menu dt').click(function () {
    $('#menu dd').slideToggle();
  });

  // ハンバーガーメニューボタンからXに変化
  var gnav = $('.gnav');
    $('.gnav-btn').on('click', function() {
      gnav.slideToggle(100);
        if ($(this).hasClass('is-open')) {
            $(this).removeClass('is-open');
        } else {
            $(this).addClass('is-open');
        }
  });

  //////////////////////////////// トップに戻るボタン
  var topBtn = $('#scrollTop');
  topBtn.hide();
  // ある程度スクロースされたら#topボタンを表示、それ以外は非表示のまま
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        topBtn.fadeIn();
    }else{
        topBtn.fadeOut();
    }
  });

  // 元々トップに一瞬で戻る設定がしてあるのでまずはそれを解除
  topBtn.click(function (event) {
      event.preventDefault();
  // ゆっくりスクロールで上に行く
      $('body,html').animate({
          scrollTop: 0
      },500);
  });

  //////////////////////////////// モダール
  $(".sentence").on('click', function() {
    var self = $(this).parent(".section").find(".modal");
    self.fadeIn();
    $("body").css({overflow:'hidden'});
  });

  $(".close_btn").on('click', function() {
    var self = $(this).parents(".modal");
    self.fadeOut();
    $("body").css({overflow:'visible'});
  });

});


if(!navigator.userAgent.match(/(iPhone|Android)/)){
  $(function(){
    // ページの上にいるときはハンバーガーメニューは見えないようにする
    var burger = $('.icon-animation');
    var menu = $('#menu')
    burger.hide();
    menu.hide();
    // ある程度スクロースされたらハンバーガーメニューを表示する。それ以外は非表示のまま
    $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          burger.fadeIn();
          menu.fadeIn();
      }else{
          burger.fadeOut();
          menu.fadeOut();
      }
    });
  });
}
