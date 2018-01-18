import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {

  $('.slider').slick({

    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
    dots: true

  });

  $('.nav__btn').on('click', function() {
    $(this).toggleClass('open');
    $('#nav__menu').slideToggle();
  });

});
