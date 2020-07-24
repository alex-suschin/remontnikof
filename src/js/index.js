import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import "./import/modules";
import "../../node_modules/bootstrap/js/dist/modal";
import "./import/jquery.mask";
import "./import/jquery.nice-select.min";
import "./import/datepicker.min";



$(function() {

    $('select').niceSelect();

    $("input[type=tel]").mask("+7 (999) 999-9999");

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
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

    });



    $(window).on('load resize', function() {

        var width = $(window).width();

        if (width > '991') {

        }
    });

});