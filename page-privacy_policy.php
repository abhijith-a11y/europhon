<?php 
/* Template Name: Privacy Policy  */

wp_enqueue_style(
    'policy-page-css', get_template_directory_uri() . '/style-libraries/policy_pages_style.css', array(),
    wp_get_theme()->get('Version')
);

get_header();?>


            <?php get_template_part('template-parts/policy_section/privacy_banner'); ?>
      		<?php get_template_part('template-parts/policy_section/privacy_header'); ?>
			<?php get_template_part('template-parts/policy_section/privacy_content'); ?>


<?php get_footer();?>