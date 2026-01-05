/* ===============================
   OFFCANVAS MENU + SUBMENU LOGIC
================================= */

// Reset menu animation for staggered items
function resetMenuAnimation(menu) {
    if (!menu) return;
    const items = menu.querySelectorAll("li");
    items.forEach(item => item.classList.remove("show-item"));
}

// Reset menu state: show main menu, hide submenu
function resetMenuState() {
    const mainMenu = document.querySelector(".nav_listing_main");
    const subMenu = document.querySelector(".sub_menu_items_1");

    if (!mainMenu || !subMenu) return;

    // Reset animations for both menus
    resetMenuAnimation(mainMenu);
    resetMenuAnimation(subMenu);

    mainMenu.classList.remove("hide_menu");
    mainMenu.classList.add("show_menu");

    subMenu.classList.remove("show_menu");
    subMenu.classList.add("hide_menu");
}

// Animate menu items with stagger
function animateMenu(menu) {
    if (!menu) return;
    
    const items = menu.querySelectorAll("li");

    // First, remove all show-item classes
    items.forEach(item => item.classList.remove("show-item"));

    // Then add them back with delay
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show-item");
        }, index * 180);
    });
}

// Open Offcanvas
function openOffcanvas(id) {
    const offcanvas = document.getElementById(id);
    const backdrop = document.getElementById("offcanvasBackdrop");

    closeAllOffcanvas();
    resetMenuState();

    backdrop.classList.add("show");

    setTimeout(() => {
        offcanvas.classList.add("show");

        const mainMenu = offcanvas.querySelector(".nav_listing_main");
        animateMenu(mainMenu);

    }, 200);

    document.body.style.overflow = "hidden";
}

// Close single offcanvas
function closeOffcanvas(id) {
    const offcanvas = document.getElementById(id);
    const backdrop = document.getElementById("offcanvasBackdrop");
    const mainMenu = document.querySelector(".nav_listing_main");
    const subMenu = document.querySelector(".sub_menu_items_1");
    const productImageContainer = document.querySelector(".product-image-container");

    resetMenuAnimation(mainMenu);
    resetMenuAnimation(subMenu);
    resetMenuState();
    
    // Hide product image container
    if (productImageContainer) {
        productImageContainer.classList.remove("show");
    }

    offcanvas.classList.remove("show");

    setTimeout(() => {
        backdrop.classList.remove("show");
        document.body.style.overflow = "";
    }, 300);
}

// Close all offcanvas
function closeAllOffcanvas() {
    const allOffcanvas = document.querySelectorAll(".offcanvas");
    const backdrop = document.getElementById("offcanvasBackdrop");
    const mainMenu = document.querySelector(".nav_listing_main");
    const subMenu = document.querySelector(".sub_menu_items_1");
    const productImageContainer = document.querySelector(".product-image-container");

    allOffcanvas.forEach(offcanvas => {
        resetMenuAnimation(mainMenu);
        resetMenuAnimation(subMenu);
        offcanvas.classList.remove("show");
    });
    
    // Hide product image container
    if (productImageContainer) {
        productImageContainer.classList.remove("show");
    }

    resetMenuState();
    backdrop.classList.remove("show");
    document.body.style.overflow = "";
}

// Close on ESC key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeAllOffcanvas();
    }
});

/* ===============================
   SUBMENU TOGGLE
================================= */
document.addEventListener("DOMContentLoaded", function () {

    const mainMenu = document.querySelector(".nav_listing_main");
    const subMenu = document.querySelector(".sub_menu_items_1");
    const subNavBtn = document.querySelector(".sub_nav_link_1");
    const backBtn = document.querySelector(".back_to_main");

    if (!mainMenu || !subMenu || !subNavBtn || !backBtn) return;

    // Ensure initial state is correct
    resetMenuState();

    // Helper function for smooth menu switch
    function switchMenu(hideMenu, showMenu) {
        // First, reset animation on the menu we're about to show
        resetMenuAnimation(showMenu);
        
        // Hide current menu
        hideMenu.classList.add("hide_menu");
        hideMenu.classList.remove("show_menu");

        // Wait for hide animation to complete, then show new menu
        setTimeout(() => {
            showMenu.classList.add("show_menu");
            showMenu.classList.remove("hide_menu");
            
            // Start animation after menu is visible
            setTimeout(() => {
                animateMenu(showMenu);
            }, 50);
        }, 400);
    }

    // Open submenu
    subNavBtn.addEventListener("click", function (e) {
        e.preventDefault();
        switchMenu(mainMenu, subMenu);
        
        // Show product image container and set first item as active
        setTimeout(() => {
            const productImageContainer = document.querySelector(".product-image-container");
            const firstProductItem = subMenu.querySelector(".product-nav-item");
            
            if (productImageContainer && firstProductItem) {
                // Set first item as active
                const allProductItems = subMenu.querySelectorAll(".product-nav-item");
                allProductItems.forEach(item => item.classList.remove("active"));
                firstProductItem.classList.add("active");
                
                // Show image container and activate first image
                const productId = firstProductItem.getAttribute("data-product");
                const allImages = productImageContainer.querySelectorAll(".product-image");
                allImages.forEach(img => img.classList.remove("active"));
                
                const targetImage = productImageContainer.querySelector(`.product-image[data-product="${productId}"]`);
                if (targetImage) {
                    targetImage.classList.add("active");
                }
                
                productImageContainer.classList.add("show");
            }
        }, 450);
    });

    // Back to main menu
    backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        switchMenu(subMenu, mainMenu);
        
        // Hide product image container
        const productImageContainer = document.querySelector(".product-image-container");
        if (productImageContainer) {
            productImageContainer.classList.remove("show");
        }
    });
    
    // Function to update product image with smooth fade transition
    function updateProductImage(item) {
        const productImageContainer = document.querySelector(".product-image-container");
        const discoverNowBtn = document.querySelector(".discover-now-btn");
        const productId = item.getAttribute("data-product");
        const productLink = item.getAttribute("data-link") || item.getAttribute("href");
        
        if (!productImageContainer || !productId) {
            return;
        }
        
        // Update active state
        const allProductItems = document.querySelectorAll(".product-nav-item");
        allProductItems.forEach(navItem => navItem.classList.remove("active"));
        item.classList.add("active");
        
        // Update Discover Now button link
        if (discoverNowBtn && productLink) {
            discoverNowBtn.href = productLink;
        }
        
        // Ensure image container is visible
        productImageContainer.classList.add("show");
        
        // Get all images and the target image
        const allImages = productImageContainer.querySelectorAll(".product-image");
        const currentActiveImage = productImageContainer.querySelector(".product-image.active");
        const targetImage = productImageContainer.querySelector(`.product-image[data-product="${productId}"]`);
        
        if (!targetImage) {
            return;
        }
        
        // If clicking the same item, do nothing
        if (currentActiveImage === targetImage) {
            return;
        }
        
        // Fade out current image and fade in new image simultaneously
        if (currentActiveImage) {
            currentActiveImage.classList.remove("active");
        }
        
        // Small delay to ensure fade-out starts, then fade in new image
        setTimeout(() => {
            targetImage.classList.add("active");
        }, 50);
    }
    
    // Handle product menu item click for image switching using event delegation
    document.addEventListener("click", function(e) {
        const target = e.target.closest(".product-nav-item");
        if (target && subMenu.contains(target)) {
            updateProductImage(target);
            
            // Only prevent default if there's no href or href is empty
            if (!target.getAttribute("href") || target.getAttribute("href") === "") {
                e.preventDefault();
            }
        }
    });

});

// ============= nav items animation end =================







// ==================== home slider ====================

    $('.double_slider .left-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.right-slider',
            speed: 900,
            cssEase: 'ease-in-out',
            infinite: true
        });

        // RIGHT SLIDER (fade)
        $('.double_slider .right-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.left-slider',
            speed: 900,
            cssEase: 'ease-in-out'
        });

        // CUSTOM ARROWS
        $('.double_slider .nextBtn').on('click', function () {
            $('.double_slider .left-slider').slick('slickNext');
        });

        $('.double_slider .prevBtn').on('click', function () {
            $('.double_slider .left-slider').slick('slickPrev');
        });



        // ==================== About Dots slider ====================


// LEFT SLIDER (MASTER – owns dots)
$('.double_dots_slider .left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,              
    appendDots: $('.double_dots_slider .dots-wrap'), // optional
    asNavFor: '.right-slider',
    speed: 900,
    cssEase: 'ease-in-out',
    infinite: true
});

// RIGHT SLIDER (SLAVE)
$('.double_dots_slider .right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,             
    fade: true,
    asNavFor: '.left-slider',
    speed: 900,
    cssEase: 'ease-in-out'
});


// ============== news _detail slider ==============

$('.news_d_slider').slick({
  infinite: true,
 dots:true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  speed: 1000,

  slidesToShow: 1,
});



 // ==================== Grid Arrow slider ====================

   // right SLIDER (slides normally)
        $('.grid_slider .left-slider1').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.right-slider1',
             responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      } 
    }


  ]
        });

        // left SLIDER (fade)
        $('.grid_slider .right-slider1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.left-slider1'
        });

        // Shared arrows controlling both
        $('.grid_slider .nextBtn').on('click', function () {
            $('.grid_slider .left-slider1').slick('slickNext');
        });

        $('.grid_slider .prevBtn').on('click', function () {
            $('.grid_slider .left-slider1').slick('slickPrev');
        });


// header bread crumb
// 
jQuery(document).ready(function ($) {
    $('.banner_bc_title').on('click', function () {
        $('.bread_crumb_header').toggleClass('is-active');
    });
});
// Close when clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).closest('.banner_bc_title, .bread_crumb_header').length) {
        $('.bread_crumb_header').removeClass('is-active');
    }
});

// Header scroll effect - Optimized for smooth transitions
jQuery(document).ready(function ($) {
    var header = $('.site-header');
    var logo = $('#header-logo');
    var scrollThreshold = 50; // Adjust this value to control when the class is added
    var defaultLogo = logo.attr('src');
    var scrolledLogo = defaultLogo.replace('main_icon.svg', 'scroll_header_logo.png');
    var originalWidth = null;
    var originalHeight = null;
    var isScrolled = false; // Track scroll state
    var ticking = false; // Throttle scroll events
    
    // Get original dimensions once image is loaded
    function getOriginalDimensions() {
        if (logo[0].complete) {
            originalWidth = logo[0].naturalWidth || logo.width();
            originalHeight = logo[0].naturalHeight || logo.height();
        }
    }
    
    // Try to get dimensions immediately
    getOriginalDimensions();
    
    // Also get dimensions when image loads
    logo.on('load', function() {
        originalWidth = this.naturalWidth || $(this).width();
        originalHeight = this.naturalHeight || $(this).height();
    });
    
    // Preload both logo images for smooth transitions
    var preloadScrolledLogo = new Image();
    preloadScrolledLogo.src = scrolledLogo;
    var preloadDefaultLogo = new Image();
    preloadDefaultLogo.src = defaultLogo;
    
    // Track if images are loaded
    var scrolledLogoLoaded = false;
    var defaultLogoLoaded = false;
    
    preloadScrolledLogo.onload = function() {
        scrolledLogoLoaded = true;
    };
    preloadDefaultLogo.onload = function() {
        defaultLogoLoaded = true;
    };
    
    // Function to handle smooth logo transition using requestAnimationFrame
    function transitionLogo(newSrc, newWidth, newHeight) {
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(function() {
            // Step 1: Fade out current image smoothly
            logo.css('opacity', '0');
            
            // Step 2: Wait for fade out, then prepare new image
            setTimeout(function() {
                // Check if image is already preloaded
                var isPreloaded = (newSrc === scrolledLogo && scrolledLogoLoaded && preloadScrolledLogo.complete) ||
                                 (newSrc === defaultLogo && defaultLogoLoaded && preloadDefaultLogo.complete);
                
                function applyNewImage() {
                    // Change the src while still invisible
                    logo.attr('src', newSrc);
                    
                    // Wait for the logo element's image to load
                    var logoImg = logo[0];
                    
                    function applyDimensionsAndFadeIn() {
                        // Use requestAnimationFrame for smooth dimension changes
                        requestAnimationFrame(function() {
                            // Now set dimensions (image is fully loaded, so no glitch)
                            if (newWidth && newHeight) {
                                logo.css({
                                    'width': newWidth,
                                    'height': newHeight
                                });
                            } else {
                                logo.css({
                                    'width': 'auto',
                                    'height': 'auto'
                                });
                            }
                            
                            // Step 3: Fade in new image (CSS transition handles smoothness)
                            requestAnimationFrame(function() {
                                logo.css('opacity', '1');
                            });
                        });
                    }
                    
                    if (logoImg.complete && logoImg.naturalWidth > 0) {
                        // Image is already loaded (cached), apply dimensions and fade in immediately
                        applyDimensionsAndFadeIn();
                    } else {
                        // Wait for image to load
                        logo.one('load', function() {
                            applyDimensionsAndFadeIn();
                        });
                        
                        // Fallback: if image doesn't fire load event (already cached), check after short delay
                        setTimeout(function() {
                            if (logoImg.complete && logoImg.naturalWidth > 0) {
                                applyDimensionsAndFadeIn();
                            }
                        }, 50);
                    }
                }
                
                if (isPreloaded) {
                    // Image is already loaded from preload, switch immediately
                    applyNewImage();
                } else {
                    // Preload the image first to ensure it's ready
                    var tempImg = new Image();
                    tempImg.onload = function() {
                        applyNewImage();
                    };
                    tempImg.onerror = function() {
                        // If error, still try to switch (might be cached)
                        applyNewImage();
                    };
                    tempImg.src = newSrc;
                    
                    // If already complete (cached), trigger immediately
                    if (tempImg.complete) {
                        tempImg.onload();
                    }
                }
            }, 150); // Reduced delay for faster transition
        });
    }
    
    // Optimized scroll handler with requestAnimationFrame throttling
    function updateHeader() {
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > scrollThreshold && !isScrolled) {
            // Just scrolled down - transition to scrolled logo
            isScrolled = true;
            // Use requestAnimationFrame for smooth class addition
            requestAnimationFrame(function() {
                header.addClass('scrolled');
            });
            
            // Get dimensions before switching if not already stored
            if (!originalWidth || !originalHeight) {
                getOriginalDimensions();
            }
            
            // Use the same smooth transition function
            transitionLogo(scrolledLogo, '58px', '50px');
            
        } else if (scrollTop <= scrollThreshold && isScrolled) {
            // Just scrolled up - transition back to default logo
            isScrolled = false;
            // Use requestAnimationFrame for smooth class removal
            requestAnimationFrame(function() {
                header.removeClass('scrolled');
            });
            
            // Use the same smooth transition function
            transitionLogo(defaultLogo, null, null);
        }
        
        ticking = false;
    }
    
    $(window).on('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
    
    // Initial check on page load
    updateHeader();
});

// ==================== Products Slides Zoom-in Animation ====================
jQuery(document).ready(function ($) {
    // Get the first divider banner and its glass card
    var firstDividerBanner = $('.dividers-banner:first-child');
    var firstGlassCard = firstDividerBanner.find('.glass-card');
    
    if (firstGlassCard.length === 0) {
        return; // Exit if element doesn't exist
    }
    
    // Track element state
    var isInViewport = false;
    var isZoomedIn = false;
    var lastScrollTop = $(window).scrollTop();
    var scrollDirection = 'down'; // 'up' or 'down'
    var zoomOutTriggered = false;
    
    // Track scroll direction
    $(window).on('scroll', function() {
        var currentScrollTop = $(window).scrollTop();
        scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = currentScrollTop;
    });
    
    // Function to reset animation state
    function resetAnimation() {
        firstGlassCard.removeClass('zoom-in-animate zoom-out-animate');
        firstGlassCard[0].style.transform = '';
        firstGlassCard[0].style.opacity = '';
        isZoomedIn = false;
        zoomOutTriggered = false;
        // Force reflow
        void firstGlassCard[0].offsetHeight;
    }
    
    // Function to trigger zoom-in animation
    function triggerZoomIn() {
        // Reset any existing animations
        resetAnimation();
        
        // Small delay to ensure clean state
        setTimeout(function() {
            firstGlassCard.addClass('zoom-in-animate');
            isZoomedIn = true;
            zoomOutTriggered = false;
        }, 50);
    }
    
    // Function to trigger zoom-out animation
    function triggerZoomOut() {
        // Only zoom out if element is currently zoomed in and hasn't been triggered yet
        if (!isZoomedIn || zoomOutTriggered) {
            return;
        }
        
        zoomOutTriggered = true;
        
        // Remove zoom-in class
        firstGlassCard.removeClass('zoom-in-animate');
        
        // Clear any inline styles
        firstGlassCard[0].style.transform = '';
        firstGlassCard[0].style.opacity = '';
        
        // Force reflow to ensure class removal is processed
        void firstGlassCard[0].offsetHeight;
        
        // Add zoom-out animation - CSS will handle setting initial state
        setTimeout(function() {
            firstGlassCard.addClass('zoom-out-animate');
            isZoomedIn = false;
        }, 10);
    }
    
    // Use Intersection Observer to detect when element enters/exits viewport
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                var boundingRect = entry.boundingClientRect;
                
                // When element enters viewport
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    if (!isInViewport) {
                        isInViewport = true;
                        zoomOutTriggered = false;
                        triggerZoomIn();
                    }
                } else {
                    // When element is leaving viewport
                    if (isInViewport) {
                        // Check if scrolling up
                        if (scrollDirection === 'up') {
                            // Trigger zoom-out when element is still visible but moving up
                            if (entry.intersectionRatio > 0 && entry.intersectionRatio < 0.8) {
                                triggerZoomOut();
                            } else if (entry.intersectionRatio === 0 && isZoomedIn) {
                                // Element completely out, trigger zoom-out if we missed it
                                triggerZoomOut();
                            }
                            isInViewport = false;
                        } else if (entry.intersectionRatio === 0) {
                            // Scrolling down and element is out - just reset
                            isInViewport = false;
                            resetAnimation();
                        }
                    }
                }
            });
        }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8], // More thresholds
            rootMargin: '0px'
        });
        
        observer.observe(firstDividerBanner[0]);
    } else {
        // Fallback for browsers without Intersection Observer
        var wasInViewport = false;
        
        $(window).on('load scroll', function() {
            var currentScrollTop = $(window).scrollTop();
            var scrollingDown = currentScrollTop > lastScrollTop;
            lastScrollTop = currentScrollTop;
            
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();
            var elementTop = firstDividerBanner.offset().top;
            var elementBottom = elementTop + firstDividerBanner.outerHeight();
            
            var currentlyInViewport = elementTop < windowBottom && elementBottom > windowTop;
            
            if (currentlyInViewport && !wasInViewport) {
                triggerZoomIn();
            } else if (!currentlyInViewport && wasInViewport) {
                var elementAboveViewport = elementBottom < windowTop;
                
                if (elementAboveViewport && !scrollingDown && isZoomedIn) {
                    triggerZoomOut();
                } else {
                    resetAnimation();
                }
            }
            
            wasInViewport = currentlyInViewport;
        });
    }
});

// ==================== Last Products Slide Zoom-out Animation ====================
jQuery(document).ready(function ($) {
    // Get the last divider banner and its glass card
    var lastDividerBanner = $('.dividers-banner:last-child');
    var lastGlassCard = lastDividerBanner.find('.glass-card');
    
    if (lastGlassCard.length === 0) {
        return; // Exit if element doesn't exist
    }
    
    // Track element state
    var isInViewport = false;
    var isZoomedIn = true; // Last card starts zoomed in
    var lastScrollTop = $(window).scrollTop();
    var scrollDirection = 'down';
    var zoomOutTriggered = false;
    
    // Ensure initial state - card should be at full size
    lastGlassCard[0].style.transform = 'translate(-50%, -50%) scale(1)';
    lastGlassCard[0].style.opacity = '1';
    
    // Track scroll direction
    $(window).on('scroll', function() {
        var currentScrollTop = $(window).scrollTop();
        scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = currentScrollTop;
    });
    
    // Function to reset animation state
    function resetAnimation() {
        lastGlassCard.removeClass('zoom-out-animate');
        lastGlassCard[0].style.transform = '';
        lastGlassCard[0].style.opacity = '';
        isZoomedIn = true;
        zoomOutTriggered = false;
        void lastGlassCard[0].offsetHeight;
    }
    
    // Function to trigger zoom-out animation
    function triggerZoomOut() {
        if (!isZoomedIn || zoomOutTriggered) {
            return;
        }
        
        zoomOutTriggered = true;
        
        // Remove any existing animation classes
        lastGlassCard.removeClass('zoom-out-animate');
        
        // Ensure element is at full scale and opacity before zooming out
        lastGlassCard[0].style.transform = 'translate(-50%, -50%) scale(1)';
        lastGlassCard[0].style.opacity = '1';
        
        // Force reflow
        void lastGlassCard[0].offsetHeight;
        
        // Add zoom-out animation
        setTimeout(function() {
            lastGlassCard[0].style.transform = '';
            lastGlassCard[0].style.opacity = '';
            lastGlassCard.addClass('zoom-out-animate');
            isZoomedIn = false;
        }, 50);
    }
    
    // Use Intersection Observer to detect when element enters/exits viewport
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                var boundingRect = entry.boundingClientRect;
                
                // When element is in viewport
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    if (!isInViewport) {
                        isInViewport = true;
                        zoomOutTriggered = false;
                        // Reset to zoomed in state when entering viewport
                        if (!isZoomedIn) {
                            resetAnimation();
                        }
                    } else if (isInViewport && scrollDirection === 'down' && isZoomedIn && !zoomOutTriggered) {
                        // Element is in viewport but scrolling down - trigger zoom-out when ratio decreases
                        // Trigger when element is still mostly visible (50-80% visible)
                        if (entry.intersectionRatio < 0.8 && entry.intersectionRatio > 0.3) {
                            triggerZoomOut();
                            isInViewport = false;
                        }
                    }
                } else {
                    // When element is leaving viewport
                    if (isInViewport) {
                        // Check if scrolling down
                        if (scrollDirection === 'down') {
                            // Trigger zoom-out when element is still visible but moving down
                            if (entry.intersectionRatio > 0 && entry.intersectionRatio < 0.5 && isZoomedIn) {
                                triggerZoomOut();
                                isInViewport = false;
                            } else if (entry.intersectionRatio === 0 && isZoomedIn) {
                                // Element completely out, trigger zoom-out if we missed it
                                triggerZoomOut();
                                isInViewport = false;
                            }
                        } else if (entry.intersectionRatio === 0) {
                            // Scrolling up and element is out - reset
                            isInViewport = false;
                            resetAnimation();
                        }
                    }
                }
            });
        }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
            rootMargin: '0px'
        });
        
        observer.observe(lastDividerBanner[0]);
    } else {
        // Fallback for browsers without Intersection Observer
        var wasInViewport = false;
        
        $(window).on('load scroll', function() {
            var currentScrollTop = $(window).scrollTop();
            var scrollingDown = currentScrollTop > lastScrollTop;
            lastScrollTop = currentScrollTop;
            
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();
            var elementTop = lastDividerBanner.offset().top;
            var elementBottom = elementTop + lastDividerBanner.outerHeight();
            
            var currentlyInViewport = elementTop < windowBottom && elementBottom > windowTop;
            
            if (currentlyInViewport && !wasInViewport) {
                // Reset to zoomed in state when entering
                if (!isZoomedIn) {
                    resetAnimation();
                }
            } else if (!currentlyInViewport && wasInViewport) {
                var elementBelowViewport = elementTop > windowBottom;
                
                if (elementBelowViewport && scrollingDown && isZoomedIn) {
                    triggerZoomOut();
                } else {
                    resetAnimation();
                }
            }
            
            wasInViewport = currentlyInViewport;
        });
    }
});
