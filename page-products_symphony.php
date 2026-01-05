<?php 
/* Template Name: Products Symphony  */

wp_enqueue_style(
    'products-symphony-css', get_template_directory_uri() . '/style-libraries/products_symphony.css', array(),
    wp_get_theme()->get('Version')
);

get_header();?>


            <?php get_template_part('template-parts/products_symphony_section/banner_with_top_bar'); ?>
			<?php get_template_part('template-parts/products_symphony_section/about_products'); ?>
			<?php get_template_part('template-parts/products_symphony_section/difference_sec'); ?>
			<?php get_template_part('template-parts/products_symphony_section/transforming_sec'); ?>
      		<?php get_template_part('template-parts/products_symphony_section/grid_slider'); ?>
      		<?php get_template_part('template-parts/products_symphony_section/key_feature'); ?>
			


<?php get_footer();?>