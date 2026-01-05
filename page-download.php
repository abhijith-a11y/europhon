<?php 
/* Template Name: Download */

wp_enqueue_style(
    'download-page-css', get_template_directory_uri() . '/style-libraries/download_page_style.css', array(),
    wp_get_theme()->get('Version')
);


get_header();?>


            <?php get_template_part('template-parts/downoad_sections/banner_with_top_bar'); ?>
            <?php get_template_part('template-parts/downoad_sections/download_concept'); ?>



<?php get_footer();?>