$(function () {

    /* =========================
       Disable slider on mobile
    ========================== */
    var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) {
        return; // Normal scroll for mobile
    }

    var divs = $('.main_slider .mydiv');
    var divIndex = 0;
    var sliderActive = true;
    var isScrolling = false;
    var lastDiv = divs.length - 1;
    var scrollDuration = 600; // slower scroll

    /* =========================
       Create dots
    ========================== */
    var dotsContainer = $('.waper_page_slider .slider-dots');
    divs.each(function (i) {
        dotsContainer.append(
            '<div data-index="' + i + '">' +
                '<span class="border_dot">' +
                    '<span class="inner_dot"></span>' +
                '</span>' +
            '</div>'
        );
    });

    function updateDots() {
        dotsContainer.find('div').removeClass('active');
        dotsContainer.find('div').eq(divIndex).addClass('active');
    }
    updateDots();

    function scrollToDiv(index) {
        isScrolling = true;
        $('html, body').stop().animate(
            { scrollTop: divs.eq(index).offset().top },
            scrollDuration,
            function () {
                isScrolling = false;
                updateDots();
            }
        );
    }

    /* =========================
       Dots click
    ========================== */
    dotsContainer.on('click', 'div', function () {
        divIndex = parseInt($(this).data('index'));
        scrollToDiv(divIndex);
    });

    /* =========================
       Mouse wheel slider scroll
    ========================== */
    $(window).on('mousewheel DOMMouseScroll', function (e) {
        if (isScrolling) return;

        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var st = $(window).scrollTop();

        // Scroll up: re-activate slider
        if (delta > 0 && !sliderActive && st <= divs.eq(lastDiv).offset().top) {
            sliderActive = true;
        }

        if (!sliderActive) return; // normal scroll after last slide

        e.preventDefault();

        if (delta > 0) {
            if (divIndex > 0) divIndex--;
            scrollToDiv(divIndex);
        } else {
            if (divIndex < lastDiv) {
                divIndex++;
                scrollToDiv(divIndex);
            } else {
                sliderActive = false; // unlock scroll after last slide
            }
        }
    });

    /* =========================
       Resize fix
    ========================== */
    $(window).on('resize', function () {
        if (sliderActive) {
            $('html, body').scrollTop(divs.eq(divIndex).offset().top);
        }
    });
});


/* =========================
   Show / hide dots on scroll
   (Desktop only)
========================== */
$(window).on('scroll', function () {

    var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) return;

    var wrapper = $('.waper_page_slider');
    var dots = $('.slider-dots');
    var scrollTop = $(window).scrollTop();
    var wrapperTop = wrapper.offset().top;
    var wrapperBottom = wrapperTop + wrapper.outerHeight();

    if (scrollTop >= wrapperTop && scrollTop <= wrapperBottom - $(window).height()) {
        dots.addClass('show');
    } else {
        dots.removeClass('show');
    }
});
