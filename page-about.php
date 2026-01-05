<?php 
/* Template Name: About */

wp_enqueue_style(
    'dots-slider-css', get_template_directory_uri() . '/style-libraries/dots_slider.css', array(),
    wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'about-page-css', get_template_directory_uri() . '/style-libraries/about_page_style.css', array(), 
	wp_get_theme()->get('Version')
);

get_header();?>


            <?php get_template_part('template-parts/about_sections/banner_with_top_bar'); ?>
            <?php get_template_part('template-parts/about_sections/begining_of_design'); ?>
			<?php get_template_part('template-parts/about_sections/origin_story'); ?>
			<?php get_template_part('template-parts/about_sections/what_we_create'); ?>
			<?php get_template_part('template-parts/about_sections/dots_slider'); ?>
			<?php get_template_part('template-parts/about_sections/our_belief'); ?>
			<?php get_template_part('template-parts/about_sections/core_values'); ?>
			


<?php get_footer();?>