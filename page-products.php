<?php 
/* Template Name: Products */

wp_enqueue_style(
    'project-page-css',
    get_template_directory_uri() . '/style-libraries/projects_page_style.css', array(),  wp_get_theme()->get('Version')
);

wp_enqueue_style(
    'products-page-css',
    get_template_directory_uri() . '/style-libraries/products_page_style.css', array(), wp_get_theme()->get('Version')
);


get_header();?>

            <?php get_template_part('template-parts/products_sections/banner_with_top_bar'); ?>
      		<?php get_template_part('template-parts/products_sections/about_products'); ?>
			<?php get_template_part('template-parts/products_sections/products_slides'); ?>
            <?php get_template_part('template-parts/products_sections/our_projects'); ?>
			

<?php get_footer();?>