
<?php 
/* Template Name: Symphony Single Glazed  */

wp_enqueue_style( 'project-page-css',
    get_template_directory_uri() . '/style-libraries/projects_page_style.css', array(),  wp_get_theme()->get('Version')
);

wp_enqueue_style( 'products-page-css',
    get_template_directory_uri() . '/style-libraries/products_page_style.css', array(), wp_get_theme()->get('Version')
);

wp_enqueue_style( 'products-symphony-css',
	get_template_directory_uri() . '/style-libraries/products_symphony.css', array(), wp_get_theme()->get('Version')
);


get_header();?>

            <?php get_template_part('template-parts/symphony_single_glaze/banner_with_top_bar'); ?>
			<?php get_template_part('template-parts/symphony_single_glaze/about_products'); ?>
			<?php get_template_part('template-parts/symphony_single_glaze/project_detail_gallery'); ?>
			<?php get_template_part('template-parts/symphony_single_glaze/accordion_sec'); ?>
			<?php get_template_part('template-parts/symphony_single_glaze/glaze_tabs_sec'); ?>
			<?php get_template_part('template-parts/symphony_single_glaze/our_projects'); ?>
			<?php get_template_part('template-parts/symphony_single_glaze/difference_sec'); ?>
            <?php get_template_part('template-parts/symphony_single_glaze/related_pro_dark'); ?>
            

<?php get_footer();?>