import { ReadOnly } from "./decorators/readOnly.decorator";

// Mobile menu
import { mobileMenu } from "./mobile-menu";

// Latest Blog
import { paginator, dataForLatestBlog } from "./paginator";

// Form
import "./form";
import { checkForm } from "./form";

// Which one do you prefer
import { Slider } from "./slider";
import { Storage } from "./storage";
import { Select } from "./selector";

// 2000+ Online courses- slick-slider
import * as $ from "jquery";
import "slick-carousel";

function slickSlider(): void {
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

abstract class InitApp {
  protected BASE_URL: string;

  constructor() {
    this.BASE_URL = "https://jsonplaceholder.typicode.com/albums/";
  }

  protected onSelectChange(id: number): any {}
}

export class App extends InitApp {
  private slider: any;
  private select: any;
  private data: object[];
  constructor() {
    super();
    this.slider = new Slider("#slider");
    this.select = new Select("#select", this.onAlbumChange.bind(this));
  }

  @ReadOnly(false)
  public async init(): Promise<void> {
    mobileMenu();
    paginator("#paginator", dataForLatestBlog);
    slickSlider();
    checkForm();

    this.data = await this.onSelectChange();

    this.slider.setData(this.data);
  }

  protected async onSelectChange(albumId: number = 1): Promise<any> {
    let response: Response = await fetch(`${this.BASE_URL}${albumId}/photos`);
    const result: object[] = await response.json();
    return result.slice(0, 8);
  }

  private async onAlbumChange(e: number): Promise<void> {
    let newData: object[] = await this.onSelectChange(e);
    this.slider.setData(newData);
  }
}
