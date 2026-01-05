<?php
/* Template Name: Contact */

wp_enqueue_style(
    'contact-page-css',
    get_template_directory_uri() . '/style-libraries/contact_page_style.css',
    array(),
    wp_get_theme()->get('Version')
);

get_header();
?>

            <?php get_template_part('template-parts/contact_sections/banner_with_top_bar'); ?>
			<?php get_template_part('template-parts/contact_sections/contact_form'); ?>
			<?php get_template_part('template-parts/contact_sections/address_section'); ?>
			<?php get_template_part('template-parts/contact_sections/contact_map'); ?>


<?php get_footer();?>