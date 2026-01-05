<style>
	
    .grid_slider {
        background: #000;
    }

    .grid_slider .left-slider1 .slick-list::after {
        content: '';
        width: 0px;
        height: 100%;
        background: #000;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .grid_slider .slider-wrapper1 {
        display: flex;
        gap: 60px;
    }

    .grid_slider .double_slider1 {
        overflow: hidden;
    }

    .grid_slider .double_slider1 .container_fluid {
        padding-right: 50px;
        max-width: 1920px;
        margin: 0 auto;
        position: relative;
    }

    .grid_slider .left-slider1 {
        width: 70%;
        position: relative;
        overflow: visible;
    }

    .grid_slider .left-slider1 .slick-slide {
        margin-right: 10px;
    }

    .grid_slider .left-slider1 img {
        width: 100%;
        object-fit: cover;
        border-radius: 0;
    }

    .grid_slider .right-slider1 {
        width: 30%;
        padding-right: 0px;

    }

    .grid_slider .right-slider1,
    .grid_slider .arrow_box {
        padding-left: 55px;
    }

    .grid_slider .arrow_box {
        width: 100%;
        z-index: 1;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    .grid_slider .right-slide-content1 h2 {
        letter-spacing: 2.4px;
        max-width: 470px;
        text-transform: uppercase;
        color: #fff;
        margin: 0px 0px 20px 0px;
        font-family: "RivieraNights-Light";
    }

    .grid_slider .right-slide-content1 p {
        color: #fff;
        font-size: 16px;
    }

    /* CUSTOM ARROWS */
    .grid_slider .custom-arrows {
        display: flex;
        gap: 15px;
    }

    .grid_slider .custom-arrows button {
        background: transparent;
        border: 2px solid #202120;
        width: 50px;
        height: 50px;
        border-radius: 0%;
        cursor: pointer;
        padding: 19px;
        transition: 0.3s linear;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .grid_slider .custom-arrows button:hover {
        background: #202120;
    }

    .grid_slider .slide-thumbnail {
        width: 220px;
        height: 290px;
        object-fit: cover;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    .grid_slider .left-slider1 .slick-list {
        padding-right: 120px;
        /* controls half slide visibility */
    }

    .symphony_box1 {
        position: relative;
        height: 500px;
        transition: 0.4s linear;
        display: block;
        overflow: hidden;
    }

    .symphony_box1 p {
        color: #fff;
        line-height: 1.7;
        font-size: 18px;
        font-family: "RivieraNights-Regular";
        position: absolute;
        padding: 30px 30px;
        top: 0px;
        left: 0px;
        width: 100%;
    }

    .symphony_box1 img {
        transition: all 0.4s linear;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .symphony_box1:hover img {
        transform: scale(1.13);
    }

    .left_symphony1 {
        max-width: 400px;
    }






    /* responsive */

    @media only screen and (min-width: 1680px) {

        .grid_slider .slide-thumbnail {
            width: 340px;
            height: 390px;
        }

        .grid_slider .right-slide-content1 h2 {
            max-width: 520px;
        }

        .grid_slider .right-slide-content1 p {
            color: #fff;
            font-size: 17px;
        }

        .grid_slider .right-slider1,
        .grid_slider .arrow_box {
            padding-left: 60px;
        }

        .symphony_box1 p {
            padding: 40px 40px;
        }

        .symphony_box1 {
            height: 604px;
        }
    }

    @media only screen and (min-width: 1920px) {
        .grid_slider .right-slide-content1 h2 {
            max-width: 520px;
        }

        .grid_slider .right-slider1,
        .grid_slider .arrow_box {
            padding-left: 158px;
        }
    }

    @media only screen and (max-width: 1365px) {

        .grid_slider .left-slider1 .slick-list::after {
            display: none;
        }

        .grid_slider .left-slider1 .slick-slide {
            margin-right: 15px;
        }

        .symphony_box1 {
            height: 400px;
        }

        .symphony_box1 p {
            line-height: 1.4;
            font-size: 16px;
            padding: 20px 20px;
        }

        .grid_slider .right-slide-content1 h2 {
            margin: 0px 0px 10px 0px;
        }
    }

    @media only screen and (max-width: 1199px) {
        .grid_slider .slider-wrapper1 {
            gap: 30px;
        }

        .grid_slider .right-slide-content1 h2 br {
            display: none;
        }

        .grid_slider .slide-thumbnail {
            width: 170px;
            height: 230px;
        }

        .grid_slider .double_slider1 .container_fluid {
            padding-right: 0px;
        }

        .grid_slider .right-slider1,
        .grid_slider .arrow_box {
            padding-left: 33px;
        }
    }

    @media only screen and (max-width: 767px) {

        .grid_slider .slide-thumbnail {
            width: 130px;
            height: 180px;
        }

        .grid_slider .right-slider1 {
            padding-right: 0px;
        }

        .grid_slider .right-slider1 {
            width: 100%;
            padding-right: 0px;
        }

        .grid_slider .left-slider1 {
            width: 100%;
            margin-bottom: 90px;
        }

        .grid_slider .slider-wrapper1 {
            display: flex;
            gap: 60px;
            flex-wrap: wrap;
        }

        .symphony_box1 {
            height: 350px;
        }

        .grid_slider .left-slider1 .slick-list {
            padding-right: 20px;
        }
    }

    @media only screen and (max-width: 575px) {
        .grid_slider .left-slider1 {
            width: 100%;
        }

        .grid_slider .right-slider1 {
            width: 100%;
            padding: 0px 20px;
        }

        .grid_slider .slider-wrapper1 {
            gap: 30px;
            flex-direction: column;
        }

        .symphony_box1 {
            height: 320px;
        }

        .grid_slider .right-slide-content1 {
            min-height: auto;
        }

        .grid_slider .slide-thumbnail {
            position: relative;
        }

        .grid_slider .right-slide-content1 h2 {
            margin: 10px 0px 30px 0px;
        }

        .grid_slider .arrow_box {
            padding: 0px 20px 0px 5px;
            width: fit-content;
            right: 0px;
        }

        .grid_slider .double_slider1 .container_fluid {
            padding-right: 0px;
        }

        .symphony_box1 {
            height: 360px;
        }
    }
</style>

<section class="grid_slider pt_150 pb_150">
    <div class="double_slider1">
        <div class="container_fluid">
            <div class="slider-wrapper1" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">

                <!-- left FADE CONTENT SLIDER -->
                <div class="right-slider1">
                    <div class="right-slide-content1">
                        <div class="left_symphony1">
                            <h2 class="f_36">Symfony® Glass</h2>
                            <p>Symfony® Glass is ideal for modern offices,
                                executive suites, and commercial spaces where
                                privacy and openness must coexist.</p>
                        </div>
                    </div>

                    <div class="right-slide-content1">
                        <div class="left_symphony1">
                            <h2 class="f_36">Symfony® Glass</h2>
                            <p>Symfony® Glass is ideal for modern offices,
                                executive suites, and commercial spaces where
                                privacy and openness must coexist.</p>
                        </div>
                    </div>

                    <div class="right-slide-content1">
                        <div class="left_symphony1">
                            <h2 class="f_36">Symfony® Glass</h2>
                            <p>Symfony® Glass is ideal for modern offices,
                                executive suites, and commercial spaces where
                                privacy and openness must coexist.</p>
                        </div>
                    </div>

                    <div class="right-slide-content1">
                        <div class="left_symphony1">
                            <h2 class="f_36">Symfony® Glass</h2>
                            <p>Symfony® Glass is ideal for modern offices,
                                executive suites, and commercial spaces where
                                privacy and openness must coexist.</p>
                        </div>
                    </div>

                    <div class="right-slide-content1">
                        <div class="left_symphony1">
                            <h2 class="f_36">Symfony® Glass</h2>
                            <p>Symfony® Glass is ideal for modern offices,
                                executive suites, and commercial spaces where
                                privacy and openness must coexist.</p>
                        </div>
                    </div>
                    <div class="right-slide-content1">
                        <div class="left_symphony1">
                            <h2 class="f_36">Symfony® Glass</h2>
                            <p>Symfony® Glass is ideal for modern offices,
                                executive suites, and commercial spaces where
                                privacy and openness must coexist.</p>
                        </div>
                    </div>
                </div>

                <!-- right IMAGE SLIDER -->
                <div class="left-slider1">
                    <div>
                        <a href="/symphony-single-glazed" class="symphony_box1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_1.png"
                                alt="Modern Villa Interior 1" />
                            <p>SINGLE GLAZED</p>
                        </a>
                    </div>
                    <div>
                        <a href="/symphony-single-glazed" class="symphony_box1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_2.png"
                                alt="Modern Villa Interior 1" />
                            <p>SINGLE GLAZED WITH DOOR</p>
                        </a>
                    </div>
                    <div>
                        <a href="/symphony-single-glazed" class="symphony_box1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_3.png"
                                alt="Modern Villa Interior 1" />
                            <p>DOUBLE GLAZED</p>
                        </a>
                    </div>
                    <div>
                        <a href="/symphony-single-glazed" class="symphony_box1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_1.png"
                                alt="Modern Villa Interior 1" />
                            <p>SINGLE GLAZED</p>
                        </a>
                    </div>
                    <div>
                        <a href="/symphony-single-glazed" class="symphony_box1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_2.png"
                                alt="Modern Villa Interior 1" />
                            <p>SINGLE GLAZED WITH DOOR</p>
                        </a>
                    </div>
                    <div>
                        <a href="/symphony-single-glazed" class="symphony_box1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_2.png"
                                alt="Modern Villa Interior 1" />
                            <p>DOUBLE GLAZED</p>
                        </a>
                    </div>
                </div>

            </div>
            <!-- ARROWS -->
            <div class="arrow_box">
                <div class="custom-arrows">
                    <button class="prevBtn">
                        <img src="https://europhon-dev.e8demo.com/wp-content/themes/europhon/images/dark_slider_l.svg"
                            alt="img">
                    </button>
                    <button class="nextBtn">
                        <img src="https://europhon-dev.e8demo.com/wp-content/themes/europhon/images/dark_slider_r.svg"
                            alt="img">
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>