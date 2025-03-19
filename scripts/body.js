// JavaScript Document

// EXTRACTED INLINE SCRIPT #1

jQuery(document).ready(function ($) {
$(window).on('resize', function() { 
    if ($('.pyroly2').length) {$('.pyroly2').height($('.pyroly2 .Act').outerHeight())}
});
    $('.pyroly2').height($('.pyroly2 .Act').outerHeight())
    jQuery('.pg-fold .Sin,.pyroly2 .Sin').mousemove(function () { jQuery(this).addClass('Act').siblings().removeClass('Act') })
    $('.pg-nav').each(function () {
        var tab = $(this).find('.tab'),con = $(this).find('.con');
        $(tab).on('mouseover', function () {
            clearTimeout(this.timer); var _this = this;
            $(_this).addClass('act').siblings().removeClass('act');
            $(con).eq($(_this).index()).addClass('on').siblings().removeClass('on');
            _this.timer = setTimeout(function () {$(_this).trigger('mouseover');},200);
        }).on('mouseout', function() {clearTimeout(this.timer);});
    });  
    $('.pyroly10').each(function () {
        var tab = $(this).find('.Tab'),sin = $(this).find('.Sin');
        $(tab).on('mouseover', function () {
            clearTimeout(this.timer); var _this = this;
            $(_this).addClass('Act').siblings().removeClass('Act');
            $(sin).eq($(_this).index()).addClass('on').siblings().removeClass('on');
            _this.timer = setTimeout(function () {$(_this).trigger('mouseover');},300);
        }).on('mouseout', function() {clearTimeout(this.timer);});
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
    $('.TDU3 .Sin,.TDU7 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
});
    /* Start of plastic decomposition page*/
    jQuery(document).ready(function ($) {
        $('.plastPyroly8 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
    })
   /* End of plastic decomposition page */

   /* Home page starts */
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
                scrollingSpeed: 700, // Adjust the speed to make the transitions smoother
                fitToSection: true, // Ensure the section fits the screen
                scrollOverflow: false, // Add scroll overflow for smoother transitions
                afterLoad: function (anchorLink, index) {
                    if (index.index == 1) {
                        nAd('.btHom1 .n1', 0, 000000, 6);
                        nAd('.btHom1 .n2', 0, 000000, 6);
                        nAd('.btHom1 .n3', 0, 000000, 6);
                        nAd('.btHom1 .n4', 0, 000000, 6);
						nAd('.btHom1 .n5', 0, 000000, 6);
						nAd('.btHom1 .n6', 0, 000000, 6);
					}
                },
            });
        });
    })
    jQuery(document).ready(function ($) {
        function mvH1c(hd, h1c) { if (hd && h1c) { h1c.insertBefore(hd, h1c.firstChild); } }
        var H1c = document.querySelector('.h1c');
        var Hd = document.querySelector('.entry-header');
        var H1 = Hd.querySelector('h1');
        if (H1) { mvH1c(Hd, H1c); }
    });
    jQuery(document).ready(function ($) {
        $('.btHom1 .Sin,.btHom2 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.btHom4').each(function () {
            var $tabs = $(this).find('.Tab');
            var $sins = $(this).find('.Sin');
            var timer;
            var ind = 0;
            function tag(i) {
                $tabs.eq(i).addClass('Act').siblings().removeClass('Act');
                $sins.eq(i).addClass('Act').siblings().removeClass('Act');
            }
            // function auto(i) {
            //     clearTimeout(timer); ind = i; tag(ind);
            //     timer = setTimeout(function () {
            //         ind = (ind + 1) % $tabs.length;
            //         auto(ind);
            //     }, 3000);
            // }
            // auto(ind);
            $tabs.hover(
                function () {
                    clearTimeout(timer);
                    ind = $(this).index();
                    tag(ind);
             });
                // function () { auto(ind); }
            
            // $(this).hover(function () { clearTimeout(timer); }), function () { auto(ind); }); });
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
   /* End of home page */

    jQuery(document).ready(function ($) {
        function mvH1c(tit, con) {
            if (tit && con) {
                con.insertBefore(tit, con.firstChild);
            }
        }
        var H1c = document.querySelector('.inH1 ');
        var H1 = document.querySelector('h1.entry-title');
        mvH1c(H1, H1c);
    })
    jQuery(document).ready(function ($) {
        $('.type242 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.Benefit242 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.Process242 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        jQuery('.Model242 .Tab').mouseover(function () {
            jQuery(this).addClass('Act').siblings().removeClass('Act');
            jQuery('.Model242 .Sin').eq(jQuery(this).index()).addClass('Act').siblings().removeClass('Act');
        });
        $('.Advantage242 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.Advantage242 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        jQuery('.Choice242 .Tab').mouseover(function () {
            jQuery(this).addClass('Act').siblings().removeClass('Act');
            jQuery('.Choice242 .FlexC').eq(jQuery(this).index()).addClass('Act').siblings().removeClass('Act');
        });
        $('.qualificat242 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
    });

    jQuery(document).ready(function ($) {
        $('.plaStic2 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.Tyre2 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.Tyre4 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        jQuery('.Tyre iframe').css({
            height: jQuery('.Tyre .Vid').width() * 0.5625,
        })
        jQuery(window).resize(function () {
            jQuery('.Tyre3 iframe').css({
                height: jQuery('.Tyre .Vid').width() * 0.5625,
            })
        })
    })

    jQuery(document).ready(function ($) {
        $('.besIner3 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.besIner11 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.besIner9 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        jQuery('.besIner3 iframe').css({
            height: jQuery('.besIner3 .Vid').width() * 0.5625,
        })
        jQuery(window).resize(function () {
            jQuery('.besIner3 iframe').css({
                height: jQuery('.besIner3 .Vid').width() * 0.5625,
            })
        })
        jQuery(document).ready(function ($) {
            jQuery('.besIner4 .Tab').mouseover(function () {
                jQuery(this).addClass('Act').siblings().removeClass('Act');
                jQuery('.besIner4 .Sin').eq(jQuery(this).index()).addClass('Act').siblings().removeClass('Act');
            });
        })
        jQuery(document).ready(function ($) {
            jQuery('.besIner5 .Tab').mouseover(function () {
                jQuery(this).addClass('Act').siblings().removeClass('Act');
                jQuery('.besIner5 .Sin').eq(jQuery(this).index()).addClass('Act').siblings().removeClass('Act');
            });
        })

        // Define a function to move entryTitle to the first child element of the specified container
        function moveTitleToContainer(title, container, classNameToAdd = '') {
            if (title && container) {
                // Add a new class name
                if (classNameToAdd) {
                    title.classList.add(classNameToAdd);
                }

                // Move h1.entry-title to the first child element of the specified container
                container.insertBefore(title, container.firstChild);
            }
        }
        // Get the #bioWast element
        var bioWastContainer = document.querySelector('#bioWast .h1c .abSol');
        var bioWastContainer1 = document.querySelector('#besIner .b-banner-text');
        // Get the h1.entry-title element
        var entryTitle = document.querySelector('h1.entry-title');
        // Call the function to move entryTitle to the specified container and add a new class name
        moveTitleToContainer(entryTitle, bioWastContainer, '');
        moveTitleToContainer(entryTitle, bioWastContainer1, 'b-banner-t1');

        jQuery('.bioWast4 .tab').click(function () {
            jQuery(this).addClass('Act').siblings().removeClass('Act');
            jQuery('.bioWast4 .Safe').eq(jQuery(this).index()).addClass('Act').siblings().removeClass('Act');
            $('.bioWast5 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        });
        $('.bioWast5 .Sin').mouseover(function () { $(this).addClass('Act').siblings().removeClass('Act') })
        $('.bioWast8').on('mouseenter', '.a', function () {
            $(this).addClass('Act').siblings().removeClass('Act');
            $('.bioWast8 .a').not(this).removeClass('Act');
        });
        jQuery(document).ready(function ($) {
            jQuery('.bioWast6 .Tab').mouseover(function () {
                jQuery(this).addClass('Act').siblings().removeClass('Act');
                jQuery('.bioWast6 .Sin').eq(jQuery(this).index()).addClass('Act').siblings().removeClass('Act');
            });
        })
    })

    jQuery(document).ready(function ($) {
        window.onload = function () {
            jQuery('.bet23531PM7pic.Vvideo iframe').css({
                height: jQuery('.bet23531PM7pic.Vvideo iframe').width() * 0.5625,
            })
            jQuery(window).resize(function () {
                jQuery('.bet23531PM7pic.Vvideo iframe').css({
                    height: jQuery('.bet23531PM7pic.Vvideo iframe').width() * 0.5625,
                })
            })
        }
        jQuery('.bet23531PM6sin,.bet23531PM7sin').mouseenter(function () {
            jQuery(this).addClass('active').siblings().removeClass('active')
        })
        jQuery('#notification-75544').css({
            height: jQuery('#notification-75544 .hthb-row').height()
        })
        jQuery(window).resize(function () {
            jQuery('#notification-75544').css({
                height: jQuery('#notification-75544 .hthb-row').height()
            })
        })
        if (jQuery(".bet23424MWI").length > 0) {
            jQuery('.bet23424MWI8Sin').mousemove(function () {
                jQuery(this).addClass('active').siblings().removeClass('active')
            })
            jQuery('.bet23424MWI6T').mousemove(function () {
                jQuery('.bet23424MWI6T').eq(0).removeClass('active')
            })
            jQuery('.bet23424MWI6T').mouseleave(function () {
                jQuery('.bet23424MWI6T').eq(0).addClass('active')
            })
        }
    })

    jQuery(document).ready(function ($) {
        var day = document.getElementById('day');
        var hours = document.getElementById('hours');
        var minutes = document.getElementById('minutes');
        var seconds = document.getElementById('seconds');
        // DOM object of day, hour, minute and second
        countDownTime.init('2022/7/7 00:00:00', day, hours, minutes, seconds);
        countDownTime.start();
    })

    jQuery(document).ready(function ($) {
        jQuery(".b-collapse:not(.active) > div").hide();
        jQuery(".b-collapse h2").click(function () {
            jQuery(this).parent('.b-collapse').toggleClass('active');
            jQuery(this).siblings('div').stop().slideToggle('300', 'linear');
        })
        var d76e3c87qh = new Swiper('.page-id-16820 #pt-cv-view-d76e3c87qh', {
            autoplay: false,
            slidesPerView: 'auto',
            wrapperClass: 'pt-cv-page',
            slideClass: 'pt-cv-content-item',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    })

    jQuery(document).ready(function () {
        // Canvas
        var SEPARATION = 100, AMOUNTX = 60, AMOUNTY = 60;
        var camera, scene, renderer, renderer1;
        var particles, particle, count = 0;
        var mouseX = -234, mouseY = -258;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        init();
        animate();
        function init() {
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.z = 1000;
            scene = new THREE.Scene();
            particles = new Array();
            var PI2 = Math.PI * 2;
            var material = new THREE.ParticleCanvasMaterial({
                color: '#dedede',
                program: function (context) {
                    context.beginPath();
                    context.arc(0, 0, 1, 0, PI2, true);
                    context.fill();
                }
            });
            var i = 0;
            for (var ix = 0; ix < AMOUNTX; ix++) {
                for (var iy = 0; iy < AMOUNTY; iy++) {
                    particle = particles[i++] = new THREE.Particle(material);
                    particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                    particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                    scene.add(particle);
                }
            }
            renderer = new THREE.CanvasRenderer();
            renderer.setSize(1560, 720);
            renderer1 = new THREE.CanvasRenderer();
            renderer1.setSize(1560, 720);
            document.getElementById('canvas').appendChild(renderer.domElement);
            document.getElementById('canvas1').appendChild(renderer1.domElement);
        }
        function animate() {
            requestAnimationFrame(animate);
            render();
        }
        function render() {
            camera.position.x += (mouseX - camera.position.x) * .05;
            camera.position.y += (- mouseY - camera.position.y) * .05;
            camera.lookAt(scene.position);
            var i = 0;
            for (var ix = 0; ix < AMOUNTX; ix++) {
                for (var iy = 0; iy < AMOUNTY; iy++) {
                    particle = particles[i++];
                    particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                    particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;

                }
            }
            renderer.render(scene, camera);
            renderer1.render(scene, camera);
            count += 0.1;
        }

    });

    jQuery(function () {
        var contact2Swiper = new Swiper('.contact2Swiper', {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            simulateTouch: false,
            effect: 'fade',
            on: {
                init: function (swiper) {
                    jQuery(".contact2 .list1 li").eq(0).addClass('active')
                },
                transitionStart: function () {
                    jQuery(".contact2 .list1 li").eq(this.activeIndex).addClass('active').siblings().removeClass('active');
                }
            }
        })
        jQuery(".contact2 .list1 li").click(function () {
            contact2Swiper.slideTo(jQuery(this).index())
        })

        var contact3Swiper1 = new Swiper('.contact3Swiper1', {
            /*autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },*/
            simulateTouch: false,
            watchSlidesProgress: true,
            autoplay: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        translate = slideProgress * modify * 260 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 6;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                }
            },
            navigation: {
                nextEl: '.c3-next',
                prevEl: '.c3-prev',
            },
        })
    })

    jQuery(function () {
        jQuery(".custom-tabs .tab").eq(0).show().siblings('.tab').hide()
        jQuery(".custom-tabs .headings a").click(function () {
            for (var i = 0; i < jQuery(".custom-tabs .headings").length; i++) {
                jQuery(jQuery(".custom-tabs .headings")[i]).find("a").eq(jQuery(this).index()).addClass('active').siblings('a').removeClass('active')
            }
            jQuery("html,body").scrollTop(jQuery(".custom-tabs .headings").eq(0).offset().top - 100);
            jQuery(".custom-tabs .tab").eq(jQuery(this).index()).show().siblings('.tab').hide()
        })
    })

    /* About us */
    jQuery(document).ready(function ($) {
        var about4yearsswiper = new Swiper('.about4-years-swiper', {
            autoplay: false,
            slidesPerView: 7,
            centeredSlides: true,
            simulateTouch: false
        })
        var about4Swiper = new Swiper('.about4-swiper', {
            autoplay: true,
            effect: 'fade',
            simulateTouch: false,
            fadeEffect: {
                crossFade: true,
            },

            navigation: {
                nextEl: '.about4-next',
                prevEl: '.about4-prev',
            },
            on: {
                init: function (swiper) {
                    jQuery(".about4 .years li").eq(0).addClass('active');
                    about4yearsswiper.slideTo(this.activeIndex + 4);
                },
                transitionStart: function () {
                    jQuery(".about4 .years li").eq(this.activeIndex).addClass('active').siblings().removeClass('active');
                    about4yearsswiper.slideTo(this.activeIndex + 4);
                }
            }
        })
        jQuery(".about4 .years li").click(function () {
            about4Swiper.slideTo(jQuery(this).index())
        })
        var about6Swiper = new Swiper('.about6-swiper', {
            autoplay: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            navigation: {
                nextEl: '.about6-next'
            },
            on: {
                transitionStart: function () {
                    jQuery(".about6-pagination div").eq(this.realIndex).addClass('active').siblings().removeClass('active');
                }
            }
        })
    })
   	/* End of our story */

	/* Solution js starts */
    jQuery(function () {
        if (jQuery('body').hasClass('page-id-18783')) {
            var scrollHeight = document.body.scrollHeight;
            var solution3scrollHeight = jQuery(".solution3").height();
            var solution3offsetTop = jQuery(".solution3").get(0).offsetTop;
            var headerHeight = document.querySelector(".main-navigation").offsetHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            jQuery(".solution3").css({ "top": headerHeight + 'px', "height": "calc(100% - " + headerHeight + "px)" })
            if (solution3offsetTop - headerHeight <= scrollTop) {
                jQuery(".solution3").addClass("fixedtool");
            } else {
                jQuery(".solution3").removeClass("fixedtool");
            }
            window.addEventListener("scroll", function () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (solution3offsetTop - headerHeight <= scrollTop) {
                    jQuery(".solution3").addClass("fixedtool");
                } else {
                    jQuery(".solution3").removeClass("fixedtool");
                }
                if (scrollTop > scrollHeight / 2) {
                    jQuery(".solution3").stop().animate({ scrollTop: solution3scrollHeight }, "fast", "linear");
                } else if (scrollTop <= scrollHeight / 2) {
                    jQuery(".solution3").stop().animate({ scrollTop: 0 }, "fast", "linear");
                }
            });
            if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
                var pageWow = new WOW().init();
            };
            jQuery(".solution3 li").click(function () {
                jQuery(this).addClass("active").siblings("li").removeClass("active")
                jQuery("body,html").stop().animate({ scrollTop: jQuery(".solution4 > div").eq(jQuery(this).index()).get(0).offsetTop - 100 }, "slow", "linear");
            })
        }
    })
    /* End of solution js*/

/* Start of quality page */
    jQuery(function () {
        var quality2swiper2 = new Swiper('.quality2-swiper2', {
            autoplay: false,//Optional options, automatic sliding
            loop: true,
            simulateTouch: false,
            allowTouchMove: false,
        })
        var quality2swiper1 = new Swiper('.quality2-swiper1', {
            autoplay: false,//Optional options, automatic sliding
            loop: true,
            controller: {
                control: quality2swiper2,
            },
            navigation: {
                nextEl: '.quality2-swiper1-next'
            },
            pagination: {
                el: '.quality2-swiper1-pagination',
                type: 'progressbar'
            },
        })
    })
   /* End of quality page */

/*Benchmark customer starts*/
    jQuery(function () {
        if (jQuery("body").hasClass("page-id-8114")) {
            var process32839_small = 0;
            var process32839 = new Swiper('.process32839', {
                simulateTouch: false,
                thumbs: {
                    swiper: {
                        el: '.process32839-thumbs',
                        slidesPerView: "auto",
                        watchSlidesVisibility: true,
                        allowTouchMove: false
                    },
                },
                on: {
                    slideChangeTransitionStart: function () {
                        process32839_small = 0;
                        jQuery(".process32839_small ul li").eq(0).addClass("active").siblings().removeClass("active");
                    }
                }
            })

            var process32839_s1 = new Swiper('.process32839-s1', {
                simulateTouch: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                thumbs: {
                    swiper: {
                        el: '.process32839-s1-thumbs',
                        slidesPerView: 3,
                        watchSlidesVisibility: true,
                        allowTouchMove: false
                    },
                },
                navigation: {
                    nextEl: '.process32839-s1-next',
                    prevEl: '.process32839-s1-prev',
                },
            })
            var process32839_s2 = new Swiper('.process32839-s2', {
                simulateTouch: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                thumbs: {
                    swiper: {
                        el: '.process32839-s2-thumbs',
                        slidesPerView: 3,
                        watchSlidesVisibility: true,
                        allowTouchMove: false
                    },
                },
                navigation: {
                    nextEl: '.process32839-s2-next',
                    prevEl: '.process32839-s2-prev',
                },
            })
            var process32839_s3 = new Swiper('.process32839-s3', {
                simulateTouch: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                thumbs: {
                    swiper: {
                        el: '.process32839-s3-thumbs',
                        slidesPerView: 6,
                        watchSlidesVisibility: true,
                        allowTouchMove: false
                    },
                },
                navigation: {
                    nextEl: '.process32839-s3-next',
                    prevEl: '.process32839-s3-prev',
                },
            })
            var process32839_s4 = new Swiper('.process32839-s4', {
                simulateTouch: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                thumbs: {
                    swiper: {
                        el: '.process32839-s4-thumbs',
                        slidesPerView: 5,
                        watchSlidesVisibility: true,
                        allowTouchMove: false
                    },
                },
                navigation: {
                    nextEl: '.process32839-s4-next',
                    prevEl: '.process32839-s4-prev',
                },
            })
            var process32839_s5 = new Swiper('.process32839-s5', {
                simulateTouch: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                thumbs: {
                    swiper: {
                        el: '.process32839-s5-thumbs',
                        slidesPerView: 3,
                        watchSlidesVisibility: true,
                        allowTouchMove: false
                    },
                },
                navigation: {
                    nextEl: '.process32839-s5-next',
                    prevEl: '.process32839-s5-prev',
                },
            })

            jQuery(".isbtn_next").click(function () {
                var ullen = jQuery(this).siblings("ul").find("li").length;
                process32839_small++;
                if (process32839_small >= ullen) {
                    process32839_small = 0;
                }
                jQuery(this).siblings("ul").find("li").eq(process32839_small).addClass("active").siblings().removeClass("active");
            })
            jQuery(".isbtn_prev").click(function () {
                var ullen = jQuery(this).siblings("ul").find("li").length;
                process32839_small--;
                if (process32839_small < 0) {
                    process32839_small = ullen - 1;
                }
                jQuery(this).siblings("ul").find("li").eq(process32839_small).addClass("active").siblings().removeClass("active");
            })
            var users32839 = false;
            window.onscroll = function () {
                console.log(jQuery(document).scrollTop());
                if (!users32839 && jQuery(document).scrollTop() > 300) {
                    jQuery(".users32839_box").addClass("active");
                    users32839 = true;
                }
            }
            jQuery(".information32839 .isclick .comment").click(function () {
                jQuery(this).toggleClass("active");
                jQuery(this).siblings(".commenttable").slideToggle()
            })
        }
    })
 /* End of benchmark customer */

/* FAQ starts with left navigation*/
    jQuery(document).ready(function ($) {
        jQuery(".faq_left_menu li a").click(function (e) {
            e.preventDefault();
            var href = jQuery(this).attr("href");
            jQuery(this).parent().addClass("active").siblings().removeClass("active");
            jQuery("html,body").stop().animate({ scrollTop: jQuery(href).offset().top - 200 });
        })
    })
   /* End of FAQ with left navigation */

/* Service page js starts*/
    jQuery(function () {
        if (jQuery('body').hasClass('page-id-4272')) {
            var gallerySwiper = new Swiper('.content34983-gallery', {
                thumbs: {
                    swiper: {
                        el: '.content34983-thumbs',
                        slidesPerView: 3,
                        watchSlidesVisibility: true
                    },
                },
                simulateTouch: false,
                on: {
                    slideChangeTransitionStart: function () {
                        jQuery(".content34983").attr("class", "content34983 bg" + this.realIndex);
                        jQuery(".content34983-next").removeClass("active");
                    },
                    slideChangeTransitionEnd: function () {
                        jQuery(".content34983-gallery .swiper-slide > div").show();
                        jQuery(".content34983-gallery .swiper-slide > ul").hide();
                    },
                    init: function (swiper) {
                        jQuery(".content34983-next").click(function () {
                            jQuery(".content34983-gallery .swiper-slide-active > div").toggle();
                            jQuery(".content34983-gallery .swiper-slide-active > ul").toggle();
                            jQuery(".content34983-next").toggleClass("active");
                        })
                    }
                }
            })
            jQuery(".process34983 .isitem").hover(function () {
                var isnum = jQuery(this).find(".isnum").text();
                jQuery(".process34983 .iconBox .isup ul").stop().animate({ "top": "-" + (isnum - 1) * 100 + "%" }, 500);
                jQuery(".process34983 .iconBox").attr("class", "iconBox item" + isnum);
            })
            var mechanism34983 = new Swiper('.mechanism34983', {
                autoplay: true,
                loop: true,
                simulateTouch: false,
                navigation: {
                    nextEl: '.mechanism34983-next'
                },
                on: {
                    init: function () {
                        swiperAnimateCache(this);
                        swiperAnimate(this);
                    },
                    slideChangeTransitionEnd: function () {
                        swiperAnimate(this);
                    }
                }
            })
            jQuery(".value34983 li").hover(function () {
                jQuery(this).addClass("active");
                jQuery(".value34983 li").eq(0).removeClass("active");
            }, function () {
                jQuery(this).removeClass("active");
                jQuery(".value34983 li").eq(0).addClass("active");
            })
        }
    })
    /* End of service page js*/

    jQuery(document).ready(function ($) {
        if (jQuery('.page-all-tabs-ul').length > 0) {
            jQuery('.page-all-tabs-ul a').each(function () {
                jQuery(this).click(function () {
                    var d_h_top = jQuery(jQuery(this).attr('href')).offset().top - 120;
                    jQuery('body,html').animate({ scrollTop: d_h_top }, 100)
                })
            })
        }
    });
    jQuery(document).ready(function ($) {
        jQuery('#two-li-1 li').each(function () {
            jQuery(this).hover(function () {
                var index = jQuery(this).index();
                jQuery('#two-li-1 li').eq(index).addClass('active');
                jQuery('#two-li-1 li').eq(index).siblings().removeClass('active');
                jQuery('#two-li-2 li').eq(index).css('display', 'block');
                jQuery('#two-li-2 li').eq(index).siblings().css('display', 'none');;
            });
        });
    });
    jQuery(document).ready(function ($) {
        jQuery(window).scroll(function () {
            if (jQuery('body').hasClass('page-id-148')) {
                if (jQuery(document).scrollTop() <= 100) {
                    jQuery("#site-navigation").removeClass('down');
                } else {
                    if (!jQuery("#site-navigation").hasClass('down')) {
                        jQuery("#site-navigation").addClass('down');
                    }
                }
            }
            if (jQuery('.page-all-tabs').length > 0) {
                var h_top = jQuery('.page-all-tabs').offset().top;
                var s_top = jQuery(window).scrollTop();
                if (s_top >= h_top) {
                    jQuery('#page-all-tabs-ul-id').css('position', 'fixed');
                    jQuery('#page-all-tabs-ul-id').css('top', 0);
                    jQuery('#page-all-tabs-ul-id').css('z-index', 9999);
                }
                else {
                    jQuery('#page-all-tabs-ul-id').css('position', 'static');
                }
            }
        });
    });
    jQuery(function () {
        // tab switching
        jQuery('.inside6-tab-title-single').mouseover(function () {
            jQuery(this).addClass('active').siblings().removeClass('active');
            jQuery(".inside6-tab-con-single").eq(jQuery(this).index()).addClass('active').siblings().removeClass('active');
        })
       // Show and hide
        jQuery('.inside15-title').click(function () {
            if (jQuery(this).parents('.inside15-single').attr('class') == 'inside15-single') {
                jQuery(this).parents('.inside15-single').addClass('active')
            } else {
                jQuery(this).parents('.inside15-single').removeClass('active')
            }
        })

    });
    jQuery(document).ready(function ($) {
        jQuery('.suggest1-radio-right .wpcf7-list-item input').click(function () {
            if (jQuery(this).parent('.wpcf7-list-item').index() == 1) {
                jQuery('.suggest1-yes').css({
                    display: 'none'
                })
                jQuery('.suggest1-no').css({
                    display: 'block'
                })
            } else {
                jQuery('.suggest1-yes').css({
                    display: 'block'
                })
                jQuery('.suggest1-no').css({
                    display: 'none'
                })
            }
        })
    });
    jQuery(document).ready(function ($) {
        for (var i = 0; i < jQuery('.activity1').length; i++) {
            tabs(i)
        }
        function tabs(i) {
            jQuery('.activity1').eq(i).find('.activity1-tab-title').click(function () {
                jQuery(this).addClass('active').siblings().removeClass('active')
                jQuery('.activity1').eq(i).find('.activity1-con-single').eq(jQuery(this).index()).addClass('active').siblings().removeClass('active')
            })
        }
    })

/*<!-- SCRIPT TO BE EXTRACTED #2: CAROUSEL  -->*/

	jQuery(document).ready(function() {
		jQuery('#slider_91114').owlCarousel({
			items : 1,
			animateOut : 'fadeOut',
			smartSpeed : 200,
			autoplay : true,
			autoplayTimeout : 5000,
			autoplayHoverPause : false,
			fluidSpeed : 200,
			autoplaySpeed : 200,
			navSpeed : 200,
			dotsSpeed : 200,
			loop : true,
			nav : false,
			navText : ['Previous','Next'],
			dots : false,
			responsiveRefreshRate : 200,
			slideBy : 1,
			mergeFit : true,
			autoHeight : false,
			mouseDrag : false,
			touchDrag : true
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


 /*<!-- LINE 475 SCRIPT TO BE EXTRACTED #4 -->*/
	
        function arf_open_modal_box_in_nav_menu(menu_id, form_id) {
            var nav_menu_link_popup_data_id = jQuery("#arf_nav_menu_link_" + form_id).find('#arf_modal_default').attr('data-link-popup-id');
            if (nav_menu_link_popup_data_id != "") {
                jQuery("#arf_nav_menu_link_" + form_id).find(".arform_modal_link_" + form_id + "_" + nav_menu_link_popup_data_id).trigger("click");
            }
        }
/*<script id="generate-a11y">! <!-- LINE 613 SCRIPT TO BE EXTRACTED #5 -->*/
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var e=document.body;e.addEventListener("mousedown",function(){e.classList.add("using-mouse")}),e.addEventListener("keydown",function(){e.classList.remove("using-mouse")})}}();

/*<!-- SCRIPT STRACTED hashbar-frontend-js-extra LINE 123-->
<script id="hashbar-frontend-js-extra">*/
var hashbar_localize = {"dont_show_bar_after_close":"","notification_display_time":"400","bar_keep_closed":"","cookies_expire_time":"","cookies_expire_type":""};
