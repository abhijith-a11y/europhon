<?php 
/* Template Name: Commercial Space */

wp_enqueue_style(
    'project-page-css',
    get_template_directory_uri() . '/style-libraries/projects_page_style.css', array(),  wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'dots-slider-css', get_template_directory_uri() . '/style-libraries/dots_slider.css', array(),
    wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'commercial_space-page-css',
    get_template_directory_uri() . '/style-libraries/commercial_space_style.css', array(), wp_get_theme()->get('Version')
);

get_header();?>

            <?php get_template_part('template-parts/commercial_space_section/banner_with_top_bar'); ?>
			<?php get_template_part('template-parts/commercial_space_section/about_products'); ?>
			<?php get_template_part('template-parts/commercial_space_section/key_feature_dark'); ?>
			<?php get_template_part('template-parts/commercial_space_section/what_we_create'); ?>
			<?php get_template_part('template-parts/commercial_space_section/dots_slider'); ?>
			<?php get_template_part('template-parts/commercial_space_section/key_feature'); ?>
			<?php get_template_part('template-parts/commercial_space_section/difference_sec'); ?>
			<?php get_template_part('template-parts/commercial_space_section/our_projects'); ?>
			


<?php get_footer();?>