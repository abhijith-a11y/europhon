<?php 
/* Template Name: News Detail */

wp_enqueue_style(
    'news-page-css',
    get_template_directory_uri() . '/style-libraries/news_page_style.css',
    array(),
    wp_get_theme()->get('Version')
);

get_header();?>

            <?php get_template_part('template-parts/news_detail_sections/banner_with_top_bar'); ?>
         	<?php get_template_part('template-parts/news_detail_sections/news_detail_wrap'); ?>
    		<?php get_template_part('template-parts/news_detail_sections/related_news'); ?> 

<?php get_footer();?>