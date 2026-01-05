$(function () {

    /* =========================
       Banner Main Slider - Scroll One by One with GSAP
    ========================== */
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded');
        return;
    }

    // Register ScrollToPlugin if available
    if (typeof ScrollToPlugin !== 'undefined') {
        gsap.registerPlugin(ScrollToPlugin);
    }

    // Check if mobile - disable slider on mobile
    var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) {
        return; // Normal scroll for mobile
    }

    var sliderItems = $('.banner-main-slider-item');
    var currentIndex = 0;
    var isScrolling = false;
    var sliderActive = true;
    var lastIndex = sliderItems.length - 1;
    var scrollDuration = 0.8; // GSAP duration in seconds
    var dotsContainer = $('.banner-slider-dots');

    if (sliderItems.length === 0) {
        return; // No slider items found
    }

    // Ensure each item takes full viewport height
    sliderItems.each(function() {
        $(this).css({
            'height': '100vh',
            'width': '100%'
        });
    });

    /* =========================
       Create pagination dots
    ========================== */
    function createDots() {
        if (dotsContainer.length === 0) return;
        
        dotsContainer.empty();
        
        sliderItems.each(function(index) {
            var dot = $('<div>')
                .attr('data-index', index)
                .addClass('banner-dot')
                .html('<span class="border_dot"><span class="inner_dot"></span></span>');
            
            dot.on('click', function() {
                var targetIndex = parseInt($(this).data('index'));
                if (targetIndex !== currentIndex && !isScrolling) {
                    scrollToItem(targetIndex);
                }
            });
            
            dotsContainer.append(dot);
        });
        
        updateDots();
    }

    /* =========================
       Update active dot
    ========================== */
    function updateDots() {
        if (dotsContainer.length === 0) return;
        
        dotsContainer.find('.banner-dot').removeClass('active');
        dotsContainer.find('.banner-dot').eq(currentIndex).addClass('active');
    }

    // Create dots on init
    createDots();

    // Scroll to specific item
    function scrollToItem(index) {
        if (isScrolling) return;
        if (index < 0 || index > lastIndex) return;

        isScrolling = true;
        var targetItem = sliderItems.eq(index);
        var targetTop = targetItem.offset().top;
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Smooth scroll using GSAP
        if (typeof ScrollToPlugin !== 'undefined') {
            gsap.to(window, {
                duration: scrollDuration,
                scrollTo: {
                    y: targetTop,
                    autoKill: false
                },
                ease: 'power2.inOut',
                onComplete: function() {
                    isScrolling = false;
                    currentIndex = index;
                    updateDots();
                }
            });
        } else {
            // Fallback: animate scrollTop directly with GSAP
            gsap.to({ value: currentScroll }, {
                value: targetTop,
                duration: scrollDuration,
                ease: 'power2.inOut',
                onUpdate: function() {
                    window.scrollTo(0, this.targets()[0].value);
                },
                onComplete: function() {
                    isScrolling = false;
                    currentIndex = index;
                    updateDots();
                }
            });
        }
    }

    // Smooth scroll to next section after banner
    function scrollToNextSection() {
        if (isScrolling) return;
        
        isScrolling = true;
        var wrapper = $('.waper_banner_main');
        var wrapperBottom = wrapper.offset().top + wrapper.outerHeight();
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Find the next section after banner
        var nextSection = wrapper.next('section');
        var targetTop;
        
        if (nextSection.length > 0) {
            targetTop = nextSection.offset().top;
        } else {
            // If no next section, scroll to just after banner
            targetTop = wrapperBottom;
        }

        // Smooth scroll using GSAP
        if (typeof ScrollToPlugin !== 'undefined') {
            gsap.to(window, {
                duration: scrollDuration,
                scrollTo: {
                    y: targetTop,
                    autoKill: false
                },
                ease: 'power2.inOut',
                onComplete: function() {
                    isScrolling = false;
                    sliderActive = false;
                }
            });
        } else {
            // Fallback: animate scrollTop directly with GSAP
            gsap.to({ value: currentScroll }, {
                value: targetTop,
                duration: scrollDuration,
                ease: 'power2.inOut',
                onUpdate: function() {
                    window.scrollTo(0, this.targets()[0].value);
                },
                onComplete: function() {
                    isScrolling = false;
                    sliderActive = false;
                }
            });
        }
    }

    // Smooth scroll back to last banner item
    function scrollToLastBannerItem() {
        if (isScrolling) return;
        
        isScrolling = true;
        sliderActive = true;
        currentIndex = lastIndex;
        var targetItem = sliderItems.eq(lastIndex);
        var targetTop = targetItem.offset().top;
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Smooth scroll using GSAP
        if (typeof ScrollToPlugin !== 'undefined') {
            gsap.to(window, {
                duration: scrollDuration,
                scrollTo: {
                    y: targetTop,
                    autoKill: false
                },
                ease: 'power2.inOut',
                onComplete: function() {
                    isScrolling = false;
                    updateDots();
                }
            });
        } else {
            // Fallback: animate scrollTop directly with GSAP
            gsap.to({ value: currentScroll }, {
                value: targetTop,
                duration: scrollDuration,
                ease: 'power2.inOut',
                onUpdate: function() {
                    window.scrollTo(0, this.targets()[0].value);
                },
                onComplete: function() {
                    isScrolling = false;
                    updateDots();
                }
            });
        }
    }

    // Initialize - scroll to first item
    setTimeout(function() {
        scrollToItem(0);
    }, 100);

    /* =========================
       Mouse wheel slider scroll - One by one
    ========================== */
    $(window).on('mousewheel DOMMouseScroll', function (e) {
        if (isScrolling) return;

        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var st = $(window).scrollTop();
        var wrapper = $('.waper_banner_main');
        var wrapperTop = wrapper.offset().top;
        var wrapperBottom = wrapperTop + wrapper.outerHeight();
        var windowHeight = $(window).height();
        var lastItemTop = sliderItems.eq(lastIndex).offset().top;
        var lastItemBottom = lastItemTop + windowHeight;
        var isScrollingUp = delta > 0;
        var isScrollingDown = delta < 0;
        var viewportBottom = st + windowHeight;

        // Check if we're scrolling back up into slider area from below
        if (isScrollingUp && !sliderActive) {
            // Check if we're entering the slider area from below
            // Use a threshold to detect when we're close to the banner area
            var nextSection = wrapper.next('section');
            var nextSectionTop = nextSection.length > 0 ? nextSection.offset().top : wrapperBottom;
            
            // If scrolling up and we're near or entering the banner area
            if (st < nextSectionTop && viewportBottom >= wrapperTop) {
                // Smoothly scroll back to last banner item
                scrollToLastBannerItem();
                e.preventDefault();
                return;
            }
        }

        // Check if we're in the slider area
        if (st < wrapperTop || st > wrapperBottom) {
            return; // Allow normal scroll outside slider area
        }

        // If slider is not active, don't handle wheel events
        if (!sliderActive) return;

        e.preventDefault();

        if (isScrollingUp) {
            // Scroll up - go to previous item
            if (currentIndex > 0) {
                currentIndex--;
                scrollToItem(currentIndex);
            }
        } else if (isScrollingDown) {
            // Scroll down - go to next item
            if (currentIndex < lastIndex) {
                currentIndex++;
                scrollToItem(currentIndex);
            } else {
                // At last item, smoothly scroll to next section
                scrollToNextSection();
            }
        }
    });

    // Track scroll position to detect when re-entering slider area
    var lastScrollTop = 0;
    var scrollTimeout = null;
    $(window).on('scroll', function() {
        if (isMobile || isScrolling) return;

        var st = $(window).scrollTop();
        var wrapper = $('.waper_banner_main');
        var wrapperTop = wrapper.offset().top;
        var wrapperBottom = wrapperTop + wrapper.outerHeight();
        var windowHeight = $(window).height();
        var lastItemTop = sliderItems.eq(lastIndex).offset().top;
        var isScrollingUp = st < lastScrollTop;
        var viewportBottom = st + windowHeight;
        var nextSection = wrapper.next('section');
        var nextSectionTop = nextSection.length > 0 ? nextSection.offset().top : wrapperBottom;

        // Clear any pending scroll timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }

        // If scrolling up and entering slider area from below, smoothly go to last slide
        if (isScrollingUp && !sliderActive) {
            // Check if we're near the banner area (within threshold)
            // Use a threshold to make the transition smoother
            var threshold = 100; // pixels threshold
            
            if (st < nextSectionTop && viewportBottom >= (wrapperTop - threshold)) {
                // Debounce to avoid multiple triggers
                scrollTimeout = setTimeout(function() {
                    if (!isScrolling && !sliderActive) {
                        scrollToLastBannerItem();
                    }
                }, 50);
            }
        }

        // If scrolling down from last item and we've passed the banner, ensure slider is inactive
        if (!isScrollingUp && sliderActive && currentIndex === lastIndex) {
            if (st > wrapperBottom) {
                sliderActive = false;
            }
        }

        lastScrollTop = st;
    });

    /* =========================
       Resize fix
    ========================== */
    $(window).on('resize', function () {
        if (sliderActive && !isScrolling) {
            var targetTop = sliderItems.eq(currentIndex).offset().top;
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (typeof ScrollToPlugin !== 'undefined') {
                gsap.to(window, {
                    duration: 0.3,
                    scrollTo: {
                        y: targetTop,
                        autoKill: false
                    },
                    ease: 'power2.out'
                });
            } else {
                gsap.to({ value: currentScroll }, {
                    value: targetTop,
                    duration: 0.3,
                    ease: 'power2.out',
                    onUpdate: function() {
                        window.scrollTo(0, this.targets()[0].value);
                    }
                });
            }
        }
    });
});
