<?php
/**
 * Europhon functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Europhon
 */

// my libraries in function.php

function theme_project_scripts() {
    
    $ver = date('dmyhis');
    //wp_enqueue_style( 'theme-style', get_stylesheet_uri(),true, $ver, 'all' ); 
    wp_enqueue_style( 'slick-css', get_template_directory_uri() . '/style-libraries/slick.css',true, $ver, 'all' );
	wp_enqueue_style( 'slick-theme-css', get_template_directory_uri() . '/style-libraries/slick-theme.css',true, $ver, 'all' );
    wp_enqueue_style( 'base-css', get_template_directory_uri() . '/style-libraries/base.css',true, $ver, 'all' );
    wp_enqueue_style( 'header-css', get_template_directory_uri() . '/style-libraries/header_style.css',true, $ver, 'all' );
    wp_enqueue_style( 'footer-css', get_template_directory_uri() . '/style-libraries/footer_style.css',true, $ver, 'all' );
    wp_enqueue_style( 'home-page-css', get_template_directory_uri() . '/style-libraries/home_page_style.css',true, $ver, 'all' );
    wp_enqueue_style( 'home_slider-css', get_template_directory_uri() . '/style-libraries/home_slider.css',true, $ver, 'all' );
 	wp_enqueue_style( 'sub-pages-banner-css', get_template_directory_uri() . '/style-libraries/sub_page_banner.css',true, $ver, 'all' );
	wp_enqueue_style( 'swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', true, '11', 'all' );
	wp_enqueue_style( 'sustainability-popup-css', get_template_directory_uri() . '/style-libraries/sustainability_popup_style.css',true, $ver, 'all' );






    //jquery
    wp_enqueue_script( 'jquery-script', get_template_directory_uri() . '/custom-js/jquery-min.js', array(), '1.0', true );
	wp_enqueue_script( 'slick-min-script', get_template_directory_uri() . '/custom-js/slick-min.js', array(), '1.0', true );
	wp_enqueue_script( 'swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11', true );
	wp_enqueue_script( 'custom-script', get_template_directory_uri() . '/custom-js/script.js', array(), $ver, true);      
    wp_enqueue_script( 'tabs-script', get_template_directory_uri() . '/custom-js/tabs.js', array(), $ver, true);      
	wp_enqueue_script( 'accordion-script', get_template_directory_uri() . '/custom-js/accordion.js', array(), $ver, true);      
	// GSAP CDN for banner slider animations
	wp_enqueue_script( 'gsap-script', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', array(), '3.12.5', true);
	wp_enqueue_script( 'gsap-scrollto', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js', array('gsap-script'), '3.12.5', true);
	wp_enqueue_script( 'banner-slider', get_template_directory_uri() . '/custom-js/banner_slider.js', array('gsap-script', 'gsap-scrollto'), $ver, true);
	wp_enqueue_script( 'banner-slider-old', get_template_directory_uri() . '/custom-js/banner_slider_old.js', array('jquery'), $ver, true);
	wp_enqueue_script( 'apply-modal', get_template_directory_uri() . '/custom-js/apply-modal.js', array(), $ver, true);
	wp_enqueue_script( 'sustainability-popup', get_template_directory_uri() . '/custom-js/sustainability-popup.js', array(), $ver, true);
	wp_enqueue_script( 'home-slider-new', get_template_directory_uri() . '/custom-js/home-slider-new.js', array('swiper-js'), $ver, true);      
	
	// AOS (Animate On Scroll) library
	wp_enqueue_script( 'aos-script', 'https://unpkg.com/aos@next/dist/aos.js', array(), 'next', true);
 
}
add_action( 'wp_enqueue_scripts', 'theme_project_scripts',20);


// my libraries in function.php end



if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function europhon_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Europhon, use a find and replace
		* to change 'europhon' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'europhon', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'europhon' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'europhon_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'europhon_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function europhon_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'europhon_content_width', 640 );
}
add_action( 'after_setup_theme', 'europhon_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function europhon_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'europhon' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'europhon' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'europhon_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function europhon_scripts() {
	wp_enqueue_style( 'europhon-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'europhon-style', 'rtl', 'replace' );

	wp_enqueue_script( 'europhon-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'europhon_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

