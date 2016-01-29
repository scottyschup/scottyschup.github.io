$(function () {
  var SSdotCom = window.SSdotCom = function () {
    this.body = window.document.body;
    this.html = window.document.documentElement;

    this.height = Math.max(
      this.body.scrollHeight,
      this.body.offsetHeight,
      this.html.clientHeight,
      this.html.scrollHeight,
      this.html.offsetHeight
    );
    this.setBackgroundHeight();
    this.startParallaxScroll();
  };

  SSdotCom.prototype.setBackgroundHeight = function () {
    $(".background").css("height", this.height + "px");
  };

  SSdotCom.prototype.startParallaxScroll = function () {
    $(window).scroll(this.pScroll);
  };

  SSdotCom.prototype.pScroll = function () {
    var st = $(this).scrollTop();
    var yDelta = -st / 5;
    $(".background").css("transform", "translateY(" + yDelta + "px)");
  };

  // SSdotCom.narrowGap = function ($el) {
  //
  // };

  // SSdotCom.dropDownNav = function () {
  //   $(".page-nav").css("top", "100px");
  // }
}());
