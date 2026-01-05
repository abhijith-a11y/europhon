/* =========================
   Home Slider New - Swiper Initialization
========================== */

document.addEventListener('DOMContentLoaded', function() {
    // Check if Swiper is loaded
    if (typeof Swiper === 'undefined') {
        console.error('Swiper library is not loaded');
        return;
    }
    
    var isSyncing = false; // Flag to prevent infinite sync loops
    var sliderCol01, sliderCol02, sliderCol03;
    
    // Function to sync all sliders
    function syncAllSliders(activeIndex, sourceSlider) {
        if (isSyncing) return;
        isSyncing = true;
        
        if (sliderCol01 && sourceSlider !== sliderCol01) {
            sliderCol01.slideToLoop(activeIndex);
        }
        if (sliderCol02 && sourceSlider !== sliderCol02) {
            sliderCol02.slideToLoop(activeIndex);
        }
        if (sliderCol03 && sourceSlider !== sliderCol03) {
            sliderCol03.slideToLoop(activeIndex);
        }
        
        setTimeout(function() {
            isSyncing = false;
        }, 100);
    }
    
    // Initialize Swiper for column 01
    sliderCol01 = new Swiper('.slider-col-01', {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        simulateTouch: false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.slider-col-01 .swiper-button-next',
            prevEl: '.slider-col-01 .swiper-button-prev',
        },
        on: {
            slideChange: function() {
                if (!isSyncing) {
                    syncAllSliders(this.realIndex, this);
                }
                if (updatePaginationButtons) {
                    updatePaginationButtons(this.realIndex);
                }
            }
        }
    });

    // Initialize Swiper for column 02
    sliderCol02 = new Swiper('.slider-col-02', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        simulateTouch: false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.slider-col-02 .swiper-button-next',
            prevEl: '.slider-col-02 .swiper-button-prev',
        },
        on: {
            slideChange: function() {
                if (!isSyncing) {
                    syncAllSliders(this.realIndex, this);
                }
                if (updatePaginationButtons) {
                    updatePaginationButtons(this.realIndex);
                }
            }
        }
    });

    // Initialize Swiper for column 03
    sliderCol03 = new Swiper('.slider-col-03', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        simulateTouch: false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.slider-col-03 .swiper-button-next',
            prevEl: '.slider-col-03 .swiper-button-prev',
        },
        on: {
            slideChange: function() {
                if (!isSyncing) {
                    syncAllSliders(this.realIndex, this);
                }
                if (updatePaginationButtons) {
                    updatePaginationButtons(this.realIndex);
                }
            }
        }
    });

    // GSAP Mouse Follow Effect for home_slider_new_col_03
    if (typeof gsap !== 'undefined') {
        var sliderCol03Wrapper = document.querySelector('.home_slider_new_col_03');
        
        if (sliderCol03Wrapper) {
            // Create custom cursor element with round circle
            var customCursor = document.createElement('span');
            customCursor.className = 'custom-mouse-follow';
            document.body.appendChild(customCursor);
            
            // Mouse position tracking
            var mouseX = 0;
            var mouseY = 0;
            var cursorX = 0;
            var cursorY = 0;
            var isHovering = false;
            
            // GSAP mouse follow effect - smooth lagging cursor
            function updateCursorFollow() {
                if (isHovering) {
                    // Smooth interpolation for lagging effect
                    cursorX += (mouseX - cursorX) * 0.2;
                    cursorY += (mouseY - cursorY) * 0.2;
                    
                    gsap.set(customCursor, {
                        x: cursorX,
                        y: cursorY,
                        xPercent: -50,
                        yPercent: -50
                    });
                }
            }
            
            // GSAP ticker for smooth continuous animation
            gsap.ticker.add(updateCursorFollow);
            
            // Update mouse position
            function updateMousePosition(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            }
            
            // Mouse enter - show custom cursor
            sliderCol03Wrapper.addEventListener('mouseenter', function(e) {
                isHovering = true;
                document.body.style.cursor = 'none';
                
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursorX = mouseX;
                cursorY = mouseY;
                
                // Set initial position
                gsap.set(customCursor, {
                    opacity: 0,
                    scale: 0.5,
                    x: cursorX,
                    y: cursorY,
                    xPercent: -50,
                    yPercent: -50,
                    display: 'block'
                });
                
                // Animate in with GSAP
                gsap.to(customCursor, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
                
                sliderCol03Wrapper.addEventListener('mousemove', updateMousePosition);
            });
            
            // Mouse leave - hide custom cursor
            sliderCol03Wrapper.addEventListener('mouseleave', function() {
                isHovering = false;
                document.body.style.cursor = '';
                
                // Animate out with GSAP
                gsap.to(customCursor, {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.2,
                    ease: 'power2.in',
                    onComplete: function() {
                        gsap.set(customCursor, { display: 'none' });
                    }
                });
                
                sliderCol03Wrapper.removeEventListener('mousemove', updateMousePosition);
            });
            
            // Click functionality to advance all sliders to next slide
            sliderCol03Wrapper.addEventListener('click', function() {
                // Advance all sliders to next slide
                if (sliderCol01) {
                    sliderCol01.slideNext();
                }
                if (sliderCol02) {
                    sliderCol02.slideNext();
                }
                if (sliderCol03) {
                    sliderCol03.slideNext();
                }
            });
        }
    }

    // Create shared pagination
    var sharedPagination = document.querySelector('.shared-pagination');
    var updatePaginationButtons;
    
    if (sharedPagination) {
        // Count original slides from HTML (before Swiper duplicates them for loop)
        var originalSlides = document.querySelectorAll('.slider-col-01 .swiper-slide').length;
        var slideCount = originalSlides;
        
        // Create pagination buttons
        for (var i = 0; i < slideCount; i++) {
            var button = document.createElement('button');
            button.className = 'pagination-btn';
            if (i === 0) button.classList.add('active');
            button.setAttribute('data-slide', i);
            button.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            sharedPagination.appendChild(button);
            
            // Add click event
            button.addEventListener('click', function() {
                var slideIndex = parseInt(this.getAttribute('data-slide'));
                syncAllSliders(slideIndex, null);
            });
        }
        
        // Function to update pagination buttons
        updatePaginationButtons = function(activeIndex) {
            var buttons = sharedPagination.querySelectorAll('.pagination-btn');
            buttons.forEach(function(btn, index) {
                if (index === activeIndex) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        };
    }
});


