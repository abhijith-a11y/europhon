<?php 
/* Template Name: News */

wp_enqueue_style(
    'news-page-css',
    get_template_directory_uri() . '/style-libraries/news_page_style.css',
    array(),
    wp_get_theme()->get('Version')
);

get_header();?>


            <?php get_template_part('template-parts/news_sections/banner_with_top_bar'); ?>
      		<?php get_template_part('template-parts/news_sections/news_listing'); ?>

<?php get_footer();?>