$(function(){
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $("#center_ok").click(function(){
    $(this).setCursorPosition(4);
  }).mask("+7 (999) 999-99-99");

  $('.center-slide__items').slick({
    centerMode: true,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1616 4.68629L10.8687 5.3934L4.41405 11.848L33 11.8479L32.9997 12.8482L4.42381 12.848L10.8687 19.2929L10.1616 20L3.00959 12.848H2.99993V12.8383L2.50473 12.3431L10.1616 4.68629Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8384 19.3137L25.1313 18.6066L31.5859 12.152L3 12.1521L3.00035 11.1518L31.5762 11.152L25.1313 4.70711L25.8384 4L32.9904 11.152H33.0001V11.1617L33.4953 11.6569L25.8384 19.3137Z" fill="white"/></svg></button>'
  });

  $('.blog-slider__items').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1616 4.68629L10.8687 5.3934L4.41405 11.848L33 11.8479L32.9997 12.8482L4.42381 12.848L10.8687 19.2929L10.1616 20L3.00959 12.848H2.99993V12.8383L2.50473 12.3431L10.1616 4.68629Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8384 19.3137L25.1313 18.6066L31.5859 12.152L3 12.1521L3.00035 11.1518L31.5762 11.152L25.1313 4.70711L25.8384 4L32.9904 11.152H33.0001V11.1617L33.4953 11.6569L25.8384 19.3137Z" fill="white"/></svg></button>'
  });

  var header = $(".header");
  var scrollChange = 1;
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= scrollChange) {
          header.addClass('header-scroll');
      } else {
          header.removeClass("header-scroll");
      }
  });
});