import $ from 'jquery';
import 'slick-carousel';
import {TimelineMax} from 'gsap';

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

let tl1 = new TimelineMax();
tl1.set('.out', {visibility:'visible'}, 'feature+=0.05')
  .from('.sub-header', 0.5, {y:100, autoAlpha:0})
  .from('.catalog', 0.5, {x:1000, autoAlpha:0}, 'feature+=0.2')
  .from('.slider', 0.5, {y:50, autoAlpha:0}, 'feature+=0.2')
  .from('.about', 0.4, {y:50, autoAlpha:0}, 'feature+=0.2');
