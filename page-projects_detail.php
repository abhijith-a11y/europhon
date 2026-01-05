<?php 
/* Template Name: Projects Detail */


wp_enqueue_style(
    'project-page-css',
    get_template_directory_uri() . '/style-libraries/projects_page_style.css', array(),  wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'products-page-css',
    get_template_directory_uri() . '/style-libraries/products_page_style.css', array(), wp_get_theme()->get('Version')
);

get_header();?>

            <?php get_template_part('template-parts/project_detail_sections/banner_with_top_bar'); ?>
			<?php get_template_part('template-parts/project_detail_sections/about_project'); ?>
			<?php get_template_part('template-parts/project_detail_sections/aditional_info'); ?>
			<?php get_template_part('template-parts/project_detail_sections/difference_sec'); ?>
			<?php get_template_part('template-parts/project_detail_sections/project_detail_gallery'); ?>
			<?php get_template_part('template-parts/project_detail_sections/our_projects'); ?>
			<?php get_template_part('template-parts/project_detail_sections/products_slides'); ?>
            <?php get_template_part('template-parts/project_detail_sections/related_pro_dark'); ?>



<?php get_footer();?>