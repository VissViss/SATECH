// JavaScript Document

// Script Block 1: Inside <article id="post-44">
jQuery(document).ready(function ($) {
    $(window).on('resize', function() { 
        if ($('.pyroly2').length) {$('.pyroly2').height($('.pyroly2 .Act').outerHeight())}
    });
    $('.pyroly2').height($('.pyroly2 .Act').outerHeight());
    jQuery('.pg-fold .Sin,.pyroly2 .Sin').mousemove(function () { jQuery(this).addClass('Act').siblings().removeClass('Act') });
    $('.pg-nav').each(function () {
        var tab = $(this).find('.tab'), con = $(this).find('.con');
        $(tab).on('mouseover', function () {
            clearTimeout(this.timer); var _this = this;
            $(_this).addClass('act').siblings().removeClass('act');
            $(con).eq($(_this).index()).addClass('on').siblings().removeClass('on');
            _this.timer = setTimeout(function () { $(_this).trigger('mouseover'); }, 200);
        }).on('mouseout', function() { clearTimeout(this.timer); });
    });
    $('.pyroly10').each(function () {
        var tab = $(this).find('.Tab'), sin = $(this).find('.Sin');
        $(tab).on('mouseover', function () {
            clearTimeout(this.timer); var _this = this;
            $(_this).addClass('Act').siblings().removeClass('Act');
            $(sin).eq($(_this).index()).addClass('on').siblings().removeClass('on');
            _this.timer = setTimeout(function () { $(_this).trigger('mouseover'); }, 300);
        }).on('mouseout', function() { clearTimeout(this.timer); });
    });
});

jQuery(document).ready(function ($) {
    function tabSin(con) {
        $(con).each(function () {
            var tab = $(this).find('.Tab');
            var sin = $(this).find('.Sin');
            $(tab).on('mouseover', function () {
                clearTimeout(this.timer);
                var _this = this;
                _this.timer = setTimeout(function () {
                    $(_this).addClass('Act').siblings().removeClass('Act');
                    $(sin).eq($(_this).index()).addClass('on').siblings().removeClass('on');
                }, 300);
            });
        });
    }
    tabSin('.tbSn');
    $('.TDU3 .Sin,.TDU7 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act'); });
});

jQuery(document).ready(function ($) {
    $('.plastPyroly8 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act'); });
});

jQuery(document).ready(function ($) {
    function nAd(selector, increment, target, interval) {
        var current = 0;
        var timer = setInterval(function () {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            jQuery(selector).html(current.toLocaleString());
        }, interval);
    }
    if (jQuery("#fullpage").length > 0) {
        jQuery(".site-footer").detach().appendTo("#fullpage");
        jQuery("#fullpage .site-footer").addClass('section fp-section');
    }
    $(function () {
        jQuery('#fullpage').fullpage({
            navigation: true,
            scrollBar: true,
            navigationPosition: "left",
            afterLoad: function (anchorLink, index) {
                if (index.index == 3) {
                    nAd('.btHom3 .n1', 0, 0000000, 6);
                    nAd('.btHom3 .n2', 0, 000000, 6);
                    nAd('.btHom3 .n3', 0, 0000000, 6);
                    nAd('.btHom3 .n4', 0, 000000, 6);
                }
            },
        });
    });
});

jQuery(document).ready(function ($) {
    function mvH1c(hd, h1c) { if (hd && h1c) { h1c.insertBefore(hd, h1c.firstChild); } }
    var H1c = document.querySelector('.h1c');
    var Hd = document.querySelector('.entry-header');
    var H1 = Hd.querySelector('h1');
    if (H1) { mvH1c(Hd, H1c); }
});

jQuery(document).ready(function ($) {
    $('.btHom1 .Sin,.btHom2 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act'); });
    $('.btHom4').each(function () {
        var $tabs = $(this).find('.Tab');
        var $sins = $(this).find('.Sin');
        var timer;
        var ind = 0;
        function tag(i) {
            $tabs.eq(i).addClass('Act').siblings().removeClass('Act');
            $sins.eq(i).addClass('Act').siblings().removeClass('Act');
        }
        $tabs.hover(
            function () {
                clearTimeout(timer);
                ind = $(this).index();
                tag(ind);
            }
        );
    });
    $('.btHom5 .Sin').each(function () {
        var $tabs = $(this).find('.Tab');
        var $Pics = $(this).find('.Pic');
        $tabs.on('mouseenter', function () {
            $Pics.eq($(this).index()).addClass('Act').siblings().removeClass('Act');
        });
        $tabs.on('mouseleave', function () {
            $Pics.removeClass('Act');
        });
    });
});

// Script Block 2: Inside <div class="section"> for Carousel
jQuery(document).ready(function() {
    jQuery('#slider_91114').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        smartSpeed: 200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        fluidSpeed: 200,
        autoplaySpeed: 200,
        navSpeed: 200,
        dotsSpeed: 200,
        loop: true,
        nav: false,
        navText: ['Previous', 'Next'],
        dots: false,
        responsiveRefreshRate: 200,
        slideBy: 1,
        mergeFit: true,
        autoHeight: false,
        mouseDrag: false,
        touchDrag: true
    });
    jQuery('#slider_91114').css('visibility', 'visible');
    var owl_goto = jQuery('#slider_91114');
    jQuery('.slider_91114_goto1').click(function(event){
        owl_goto.trigger('to.owl.carousel', 0);
    });
    jQuery('.slider_91114_goto2').click(function(event){
        owl_goto.trigger('to.owl.carousel', 1);
    });
    var resize_91114 = jQuery('.owl-carousel');
    resize_91114.on('initialized.owl.carousel', function(e) {
        if (typeof(Event) === 'function') {
            window.dispatchEvent(new Event('resize'));
        } else {
            var evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        }
    });
});

// Script Block 3: Inside <div class="section"> for Modal Box
function arf_open_modal_box_in_nav_menu(menu_id, form_id) {
    var nav_menu_link_popup_data_id = jQuery("#arf_nav_menu_link_" + form_id).find('#arf_modal_default').attr('data-link-popup-id');
    if (nav_menu_link_popup_data_id != "") {
        jQuery("#arf_nav_menu_link_" + form_id).find(".arform_modal_link_" + form_id + "_" + nav_menu_link_popup_data_id).trigger("click");
    }
}