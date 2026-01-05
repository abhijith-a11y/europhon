 <?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Europhon
 */

?>

    <section class="news_letter">
    <div class="container">
        <h2 class="f_56 color_white" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">JOIN THE QUIET REVOLUTION</h2>
        <p class="f_18 color_white" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
           We don’t just make products, we create moments of calm that elevate every design.
<br>Let’s design silence together.
        </p>

        <form class="qr-form" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
            <input type="text" placeholder="FIRST NAME">
            <input type="text" placeholder="LAST NAME">
            <input type="email" placeholder="ENTER YOUR EMAIL">
            <button type="submit" class="btn_style">SUBMIT</button>
        </form>
    </div>
</section>



   <footer>
        <div class="container">
                <div class="footer_logo"  data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                   <a href="/"><img src="<?php echo get_template_directory_uri(); ?>/images/footer_logo.svg" alt="img">
					</a>
                </div>
            <div class="footer-links">
                <div class="link-column" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <a href="/products">PRODUCTS</a>
                    <a href="/projects">PROJECTS</a>
                    <a href="/services">SERVICES</a>
                </div>

                <div class="link-column" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <a href="/about-us">ABOUT US</a>
                    <a href="/contact-us">CONTACT</a>
                    <a href="/news">NEWS</a>
                </div>

                <div class="link-column" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">
                    <a href="/download-center">DOWNLOAD CENTER</a>
                    <a href="/term-and-condition">TERMS & CONDITIONS</a>
                    <a href="/privacy-policy">PRIVACY POLICY</a>
                </div>

                <div class="link-column" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true">
                    <a href="#">SYMFONY® WALL</a>
                    <a href="#">SYMFONY® CEILING</a>
                    <a href="#">SYMFONY® GLASS</a>
                </div>

                <div class="link-column" data-aos="fade-up" data-aos-duration="2200" data-aos-once="true">
                    <a href="#">SYMFONY® FABRIC</a>
                    <a href="#">SYMFONY® WAVE</a>
                </div>
                 <div class="link-column"  data-aos="fade-up" data-aos-duration="2800" data-aos-once="true">
                    <div class="social-links">
                <a href="#" class="social-icon d_flex" aria-label="LinkedIn">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/social_icon_1.svg" alt="img">
                </a>
                <a href="#" class="social-icon d_flex" aria-label="Instagram">
                          <img src="<?php echo get_template_directory_uri(); ?>/images/social_icon_2.svg" alt="img">
                </a>
                <a href="#" class="social-icon d_flex" aria-label="Twitter">
                         <img src="<?php echo get_template_directory_uri(); ?>/images/social_icon_3.svg" alt="img">
                </a>
                </div>
            </div>
            </div>

           
        </div>
    </footer>

</div><!-- #page -->

<!-- Sustainability Popup -->
<div id="sustainabilityPopup" class="sustainability-popup">
    <div class="sustainability-popup-overlay"></div>
    <div class="sustainability-popup-content">
        <button class="sustainability-popup-close" aria-label="Close">
            <span>×</span>
        </button>
        <h2 class="sustainability-popup-title">SUSTAINABILITY<br>WITH EUROPHON</h2>
        <p class="sustainability-popup-text">
            Europhon Acoustics offers eco-conscious acoustic systems and sustainable<br>
            solutions that can be specified into your upcoming projects.
        </p>
        <a href="#" class="sustainability-popup-link">EXPLORE</a>
    </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    AOS.init({ duration: 400 });
  });
</script>
<?php wp_footer(); ?>

</body>
</html>
