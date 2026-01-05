<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Europhon
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    
 <!-- key words -->
<meta name="keywords" content="Europhon , VOICE OF THE MAKER">

    <!-- fav icon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/images/fav_logo.png">
 
    <!-- animation link -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

	<link rel="preload" as="image" href="<?php echo get_template_directory_uri(); ?>/images/home_bg_1.webp">

	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'europhon' ); ?></a>

  <header class="site-header">
            <div class="container">
              <div class="header_row d_flex">
                <div class="header_col">
                    <div class="menu_section">
               <!-- Navigation Bar -->
        <button class="navbar-toggler" onclick="openOffcanvas('offcanvasLeft')">
            <img src="<?php echo get_template_directory_uri(); ?>/images/hamburger.svg" alt="img"> Menu
        </button>

    <!-- Offcanvas Left -->
    <div class="offcanvas offcanvas-start" id="offcanvasLeft">
        <video class="offcanvas-video" autoplay loop muted playsinline>
            <source src="<?php echo get_template_directory_uri(); ?>/images/banner-video.mp4" type="video/mp4">
        </video>
        <div class="offcanvas-overlay"></div>
        <div class="offcanvas-header">
            <button class="btn-close" onclick="closeOffcanvas('offcanvasLeft')">
                <img src="<?php echo get_template_directory_uri(); ?>/images/hamburger_close.svg" alt="img"> Close
            </button>
        </div>
        <div class="offcanvas-body">
           <div class="main_nav_wrap">
             <nav>
                <ul class="nav_listing nav_listing_main">
                    <li>
                    <a href="/about-us" class="nav-link active">About Us</a>
                </li>
              
                <li class="sub_menu_1 submenu_desk">
                    <a href="#" class="nav-link sub_nav_link_1">
                        <img class="side_arrow" src="<?php echo get_template_directory_uri(); ?>/images/caret_left.svg" alt="img"> Products</a>
                </li>
                <li class="sub_menu_1 submenu_mobile">
                    <a href="/products" class="nav-link sub_nav_link_1">
                        Products</a>
                </li>


                <li>
                    <a href="/projects" class="nav-link">Projects</a>
                </li>
                <li>
                    <a href="/services" class="nav-link">Services</a>
                </li>

                <li>
                    <a href="/commercial-space" class="nav-link">Commercial Space</a>
                </li>
                <li>
                    <a href="/news" class="nav-link">News</a>
                </li>
                

                <li>
                    <a href="/download-center" class="nav-link">Download Center</a>
                </li>
                
                <li>
                    <a href="/career" class="nav-link">Career</a>
                </li>
                <li>
                    <a href="/contact-us" class="nav-link">Contact Us</a>
                </li>
                </ul>
    <!-- sub menu -->

                    <ul class="nav_listing sub_menu_items_1">
                        <li>
                            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="back_to_main nav-link"> <img class="side_arrow" src="<?php echo get_template_directory_uri(); ?>/images/caret_left.svg" alt="img"> Products</a>
                        </li>
                        <li>
                          <a href="/products" class="nav-link">All Products</a>
                        </li>
                        <li>
                            <span class="nav-link product-nav-item active" data-product="symfony-glass" data-image="<?php echo get_template_directory_uri(); ?>/images/sym-img-2.jpg" data-link="/products-symphony">Symfony® Glass</span>
                        </li>
                          <li>
                            <span class="nav-link product-nav-item" data-product="symfony-wall" data-image="<?php echo get_template_directory_uri(); ?>/images/sym-img-2.jpg" data-link="/products-symphony">Symfony® Wall</span>
                        </li>
                          <li>
                            <span class="nav-link product-nav-item" data-product="symfony-fabric" data-image="<?php echo get_template_directory_uri(); ?>/images/sym-glass.jpg" data-link="/products-symphony">Symfony® Fabric</span>
                        </li>
                          <li>
                            <span class="nav-link product-nav-item" data-product="symfony-ceiling" data-image="<?php echo get_template_directory_uri(); ?>/images/sym-img-2.jpg" data-link="/products-symphony">Symfony® Ceiling</span>
                        </li>
                          <li>
                            <span class="nav-link product-nav-item" data-product="symfony-wave" data-image="<?php echo get_template_directory_uri(); ?>/images/sym-glass.jpg" data-link="/products-symphony">Symfony® Wave</span>
                        </li>
                    </ul>
<!-- sub menu end -->

            </nav>






            <a href="/contact-us" class="btn_style nav-cta">Book Consultation</a>
           </div>
        </div>
    </div>
  
    <!-- Backdrop -->
    <div class="offcanvas-backdrop" id="offcanvasBackdrop" onclick="closeAllOffcanvas()"></div>
    
    <!-- Product Image Container (Outside Offcanvas) -->
    <div class="product-image-container">
        <img src="<?php echo get_template_directory_uri(); ?>/images/sym-glass.jpg" alt="Symfony Glass" class="product-image active" data-product="symfony-glass">
        <img src="<?php echo get_template_directory_uri(); ?>/images/sym-img-2.jpg" alt="Symfony Wall" class="product-image" data-product="symfony-wall">
        <img src="<?php echo get_template_directory_uri(); ?>/images/sym-glass.jpg" alt="Symfony Fabric" class="product-image" data-product="symfony-fabric">
        <img src="<?php echo get_template_directory_uri(); ?>/images/sym-img-2.jpg" alt="Symfony Ceiling" class="product-image" data-product="symfony-ceiling">
        <img src="<?php echo get_template_directory_uri(); ?>/images/sym-glass.jpg" alt="Symfony Wave" class="product-image" data-product="symfony-wave">
        <a href="/products-symphony" class="discover-now-btn btn_style">DISCOVER NOW</a>
    </div>
                    </div>
                </div>
                <div class="header_col">
                    <a href="/" class="logo_header">
                       <img id="header-logo" src="<?php echo get_template_directory_uri(); ?>/images/main_icon.svg" alt="img">
                    </a>
                </div>
                <div class="header_col">
                    <div class="language_sec d_flex">
                    <p>AR</p>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    <p>EN</p>

                    </div>
                </div>
              </div>
            </div>
        </header>

