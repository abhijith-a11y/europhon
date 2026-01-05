<?php 
/* Template Name: Projects */

wp_enqueue_style(
    'project-page-css',
    get_template_directory_uri() . '/style-libraries/projects_page_style.css', array(),
    wp_get_theme()->get('Version')
);


get_header();?>

            <?php get_template_part('template-parts/projects_sections/banner_with_top_bar'); ?>
      		<?php get_template_part('template-parts/projects_sections/projects_listing'); ?>

<?php get_footer();?>