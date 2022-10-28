// Mobile menu
import { mobileMenu } from "./mobile-menu.js";

// Latest Blog
import { paginator, dataForLatestBlog } from "./paginator.js";

// Form
import "./form.js";
import { checkForm } from "./form.js";

// Which one do you prefer
import { Slider } from "./slider.js";
import { dataForSlider } from "./data.js";
import { Storage } from "./storage.js";

// 2000+ Online courses- slick-slider
import $ from "jquery";
import "slick-carousel";

function slickSlider() {
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
}

export class App {
  constructor() {}
  init() {
    mobileMenu();
    paginator("#paginator", dataForLatestBlog);
    new Slider("#slider").setData(new Storage(dataForSlider).getSliderData());
    slickSlider();
    checkForm();
  }
}
