import "@babel/polyfill";
import "./index.html";
import "./css/style.css";

// Mobile menu
import "./mobile-menu.js";

// Latest Blog
import "./paginator.js";
import { paginator, dataForLatestBlog } from "./paginator.js";

paginator("#paginator", dataForLatestBlog);

// Which one do you prefer
import "./slider.js";
import { Slider } from "./slider.js";
import { dataForSlider } from "./data.js";

const slider = new Slider("#slider");
slider.setData(dataForSlider);

// 2000+ Online courses- slick-slider
import $ from "jquery";
// import "./slick.min.js";
import "slick-carousel";
$(document).ready(function () {
  $(".avaliable-courses").slick({
    mobileFirst: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
