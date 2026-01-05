<?php 
/* Template Name: Services*/

wp_enqueue_style(
    'about-page-css', get_template_directory_uri() . '/style-libraries/about_page_style.css',
    array(),  wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'dots-slider-css', get_template_directory_uri() . '/style-libraries/dots_slider.css', array(),
    wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'services-page-css', get_template_directory_uri() . '/style-libraries/services_page_style.css', array(),
    wp_get_theme()->get('Version')
);

get_header();?>


            <?php get_template_part('template-parts/services_sections/banner_with_top_bar'); ?>
			<?php get_template_part('template-parts/services_sections/acoustic_matters'); ?>
			<?php get_template_part('template-parts/services_sections/how_we_works'); ?>
			<?php get_template_part('template-parts/services_sections/difference_sec'); ?>
			<?php get_template_part('template-parts/services_sections/symphony_para'); ?>
			<?php get_template_part('template-parts/services_sections/dots_slider'); ?>


<?php get_footer();?>