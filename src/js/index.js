import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import "./import/modules";
import "../../node_modules/bootstrap/js/dist/modal";
import "./import/jquery.mask";



$(function() {

    $("input[type=tel]").mask("+7 (999) 999-9999");

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });


    $(window).on('load resize', function() {

        var width = $(window).width();

        if (width > '991') {

        }
    });

});