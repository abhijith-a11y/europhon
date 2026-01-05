<?php 
/* Template Name: Career */

wp_enqueue_style(
    'career-page-css', get_template_directory_uri() . '/style-libraries/career_page_style.css', array(), 
	wp_get_theme()->get('Version')
);

get_header();?>

            <?php get_template_part('template-parts/career_sections/banner_with_top_bar'); ?>
            <?php get_template_part('template-parts/career_sections/about_products'); ?>
            <?php get_template_part('template-parts/career_sections/difference_sec'); ?>
            <?php get_template_part('template-parts/career_sections/why_join_us'); ?>
            <?php get_template_part('template-parts/career_sections/core_values'); ?>
            <?php get_template_part('template-parts/career_sections/accordion_sec'); ?>
			


<?php get_footer();?>