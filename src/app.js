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
import { Select } from "./selector";

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
  async init() {
    mobileMenu();
    paginator("#paginator", dataForLatestBlog);
    slickSlider();
    checkForm();

    this.slider = new Slider("#slider");

    this.select = new Select("#select", this.onAlbumChange.bind(this));

    let data = await this.onSelectChange();
    this.slider.setData(data);
  }

  async onAlbumChange(e) {
    let newData = await this.onSelectChange(e);
    this.slider.setData(newData);
  }

  async onSelectChange(albumId = 1) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
    const result = await response.json();
    return result.slice(0, 8);
  }
}
