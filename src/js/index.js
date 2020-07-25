import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import "./import/modules";
import "../../node_modules/bootstrap/js/dist/modal";
import "./import/jquery.mask";
import "./import/jquery.nice-select.min";
import "./import/datepicker.min";



$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
            $('.header-bottom-line').addClass('fixed');
            $('.logo--fixed').css('display', 'block');
            $('.phone--fixed').css('display', 'block');
            $('body').css('padding-top', '91px');
        } else if ($(this).scrollTop() < 90) {
            $('.header-bottom-line').removeClass('fixed');
            $('body').css('padding-top', '0');
            $('.logo--fixed').css('display', 'none');
            $('.phone--fixed').css('display', 'none');
        }
    });

    $('.top-menu a').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 150
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    $('select').niceSelect();

    $("input[type=tel]").mask("+7 (999) 999-9999");

    var swiper = new Swiper('.top-wrap-slider-container', {
        pagination: {
            el: '.top-wrap-swiper-pagination',
            clickable: true
        },
    });

    var swiperReweiws = new Swiper('.rewiews-items-container', {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 29,
        navigation: {
            nextEl: '.rewiews-next',
            prevEl: '.rewiews-prev',
        },
        pagination: {
            el: '.swiper-pagination-rewiews',
            clickable: true
        },
    });



    $('.vars-item').click(function() {
        $('.vars-items').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.price-table').find('.price-table__elem').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.date-input').datepicker({
        minDate: new Date()
    });

    $('.more-brands').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.brand-hide').addClass('active');
            $(this).text('Скрыть');
        } else {
            $(this).removeClass('active');
            $('.brand-hide').removeClass('active');
            $(this).text('И остальные 26 брендов');
        }
    });



    $(window).on('load resize', function() {

        var width = $(window).width();

        if (width > '991') {

        }
    });

});