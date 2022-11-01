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

    const data = await this.onSelectChange();

    this.slider = new Slider("#slider");
    this.slider.setData(new Storage(data).getSliderData());

    new Select("select")
      .init()
      .addEventListener("change", this.onAlbumChange.bind(this));
  }

  async onAlbumChange(e) {
    let newData = await this.onSelectChange(e.target.value);
    this.slider.setData(newData);
  }

  async onSelectChange(albumId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
    const result = await response.json();
    return result.slice(0, 8);
  }
}
