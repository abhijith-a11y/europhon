<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Europhon
 */

get_header();
?>


<style>

</style>


	<main id="primary" class="site-main">
  
        <section class="error-404 not-found sub_page_banner radial_gradient" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/projects_page_banner.webp');">
    <div class="container">

      <div class="banner_nav_wraper">
         <div class="banner_content text_center">
        <h1 class="f_56 color_white" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">Oops! That page can&rsquo;t be found.</h1>
       </div>

      </div>
    </div>
</section>
        
        <!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
