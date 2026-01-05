<?php 
/* Template Name: Term and Condition*/

wp_enqueue_style(
    'policy-page-css', get_template_directory_uri() . '/style-libraries/policy_pages_style.css', array(),
    wp_get_theme()->get('Version')
);

get_header();?>


            <?php get_template_part('template-parts/policy_section/terms_banner'); ?>
			<?php get_template_part('template-parts/policy_section/terms_header'); ?>
			<?php get_template_part('template-parts/policy_section/terms_content'); ?>


<?php get_footer();?>