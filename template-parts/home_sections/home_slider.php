   <style>
       .left-slider .slick-list {
          padding-left: 6.2vw;
      }

      .left-slider .slick-list::after {
          content: '';
          width: 20px;
          height: 100%;
          background: #fff;
          position: absolute;
          right: 0px;
          top: 0px;
      }

      .slider-wrapper {
          display: flex;
          gap: 60px;
      }

      .double_slider {
          overflow: hidden;
      }

      .double_slider .container_fluid {
          padding-right: 50px;
          max-width: 1920px;
          margin: 0 auto;
          position: relative;
      }

      .left-slider {
          width: 55%;
          position: relative;
          overflow: visible;
      }

      .left-slider .slick-slide {
          margin-right: 10px;
      }

      .left-slider img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 0;
      }

      .right-slider {
          width: 45%;
          padding-right: 40px;
      }

      .arrow_box {
          width: 45%;
          padding: 0px 40px 0px 35px;
          z-index: 1;
          position: absolute;
          right: 0px;
          bottom: 100px;
      }

      .right-slide-content {
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .right-slide-content h2 {
         letter-spacing: 2.4px;
          max-width: 470px;
          text-transform: uppercase;
         margin: 23% 0px 100px 0px;
          font-family: "RivieraNights-Regular";
      }


      /* CUSTOM ARROWS */
      .custom-arrows {
          display: flex;
          gap: 15px;
      }

      .custom-arrows button {
          background: transparent;
          border: 1px solid #000;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          cursor: pointer;
          padding: 23px;
          color: #000;
         transition:0.3s linear;
          display: flex;
          align-items: center;
          justify-content: center;
      }

.custom-arrows button svg{
stroke:#000;
width: 100%;
transition:0.3s linear;
}

.custom-arrows button:hover {
    background:#000;
}

      .custom-arrows button:hover svg{
          stroke:#fff;
      }

      .slide-thumbnail {
          width: 220px;
          height: 290px;
          object-fit: cover;
          position: absolute;
          right: 0px;
          bottom: 0px;
      }


      @media only screen and (min-width: 1680px) {
          .right-slide-content {
              min-height: 986px;
          }

          .left-slider img {
              height: 886px;
          }

          .slide-thumbnail {
              width: 340px;
              height: 390px;
          }

          .right-slide-content h2 {
              margin: 34% 0px 100px 0px;
              max-width: 520px;
          }
      }
      
      @media only screen and (min-width: 1920px) {
         .right-slide-content h2 {
              margin: 32% 0px 100px 0px;
              max-width: 520px;
          }
      }

      @media only screen and (max-width: 1365px) {

          .left-slider .slick-list::after {
              display: none;
          }

          .left-slider .slick-slide {
              margin-right: 15px;
          }

          .right-slide-content h2 {
              margin: 120px 0px 100px 0px;
          }

      }

      @media only screen and (max-width: 1199px) {
          .slider-wrapper {
              gap: 30px;
          }

          .right-slide-content h2 {
              margin: 150px 0px 90px 0px;
          }

          .right-slide-content h2 br {
              display: none;
          }

          .custom-arrows button {
              width: 70px;
              height: 70px;
              padding: 18px;
          }

          .arrow_box {
              padding: 0px 40px 0px 5px;
          }

          .slide-thumbnail {
              width: 170px;
              height: 230px;
          }
      }

      @media only screen and (max-width: 767px) {
.left-slider img {
    height: 370px;
}

.right-slide-content h2 {
        margin: 100px 0px 50px 0px;
    }
    .slide-thumbnail {
        width: 130px;
        height: 180px;
    }
.right-slide-content {
    min-height: 475px;

}
.right-slider {
    padding-right: 0px;
}

      }

   @media only screen and (max-width: 575px) {
.left-slider {
    width: 100%;
}
.right-slider {
    width: 100%;
    padding: 0px 20px; 
}
    .slider-wrapper {
        gap: 30px;
        flex-direction: column;
    }
.left-slider img {
        height: 320px;
    }

    .right-slide-content {
        min-height: auto;
    }
.slide-thumbnail {
    position: relative;
}
    .right-slide-content h2 {
        margin: 10px 0px 30px 0px;
    }
    .arrow_box {
        padding: 0px 20px 0px 5px;
        width: fit-content;
        right: 0px;
    }
    .double_slider .container_fluid {
    padding-right: 0px;
}
   }
    </style>


   <div class="double_slider">
   <div class="container_fluid">
    <div class="slider-wrapper" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
        <!-- LEFT IMAGE SLIDER -->
        <div class="left-slider">
            <div><img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_1.png" alt="Modern Villa Interior 1" /></div>
            <div><img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_2.png" alt="Modern Villa Interior 2" /></div>
            <div><img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_3.png" alt="Modern Villa Interior 3" /></div>
        </div>

        <!-- RIGHT FADE CONTENT SLIDER -->
        <div class="right-slider">
            <div class="right-slide-content">
                <h2 class="f_36">Euro Systems Private <br>Villa Acoustic Ceilings</h2>
                <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_2.png" class="slide-thumbnail" alt="Thumbnail" />
            </div>

            <div class="right-slide-content">
                <h2 class="f_36">Symfony® Glass</h2>
                <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_3.png" class="slide-thumbnail" alt="Thumbnail" />
            </div>

            <div class="right-slide-content">
                <h2 class="f_36">THE SYMPHONY OF PRODUCTS</h2>
               
                <img src="<?php echo get_template_directory_uri(); ?>/images/slider_img_1.png" class="slide-thumbnail" alt="Thumbnail" />
            </div>

        </div>

    </div>
      <!-- ARROWS -->
   <div class="arrow_box">
     <div class="custom-arrows">
        <!-- <button class="prevBtn">←</button> -->
        <button class="nextBtn">
         <svg xmlns="http://www.w3.org/2000/svg" width="39" height="23" viewBox="0 0 39 23" fill="none">
<path d="M26.7412 22.5752L37.8522 11.4642L26.7412 0.353304" stroke-linejoin="round"/>
<path d="M0 11.6631L38 11.6631"/>
</svg>
        </button>
    </div>
   </div>
   </div>
   </div>

 