import { SliderData } from "./models/SliderData.model";

export class Slider {
  wrap: HTMLElement;
  coursesTrack: HTMLDivElement;
  position: number;
  slidesToScroll: number;
  itemWidth: number;
  movePosition: number;
  btnNext: HTMLButtonElement;
  btnPrev: HTMLButtonElement;
  slides: number;
  itemsCount: number;

  constructor(selector: string) {
    this.wrap = document.querySelector(selector);
    this.coursesTrack = document.createElement("div");
    this.coursesTrack.classList.add("courses-track");
    this.wrap.appendChild(this.coursesTrack);
    this.position = 0;
    this.slidesToScroll = 1;
    this.itemWidth = 217.5;
    this.movePosition = this.slidesToScroll * this.itemWidth;
    this.btnNext = document.querySelector(".btn-prefcourse-right");
    this.btnPrev = document.querySelector(".btn-prefcourse-left");
    this.slides = this.calcSlidesToShow();
    this.checkBtns();
    this.init();
  }

  setData(data: object[]): void {
    this.itemsCount = data.length;
    this.coursesTrack.innerHTML = "";
    for (let item of data) {
      this.coursesTrack.innerHTML += this.createSliderItemMarkup(item as any);
    }
  }

  createSliderItemMarkup(obj: SliderData): string {
    return `<div class="item-course" style = "background-image:url(${obj.url})" >
          <a href="#">${obj.title}</a>
         </div>`;
  }

  calcSlidesToShow(): number {
    let slidesToShow: number;
    if (window.matchMedia("(max-width:767px)").matches) {
      slidesToShow = 1;
    } else if (window.matchMedia("(max-width: 1339px)").matches) {
      slidesToShow = 2;
    } else if (window.matchMedia("(min-width: 1440px)").matches) {
      slidesToShow = 4;
    }
    return slidesToShow;
  }

  checkBtns(): void {
    if (this.position == 0) {
      this.btnPrev.disabled = true;
      this.btnPrev.style.display = "none";
    } else if (
      this.position <=
      -(this.itemsCount - this.calcSlidesToShow()) * this.itemWidth
    ) {
      this.btnNext.disabled = true;
      this.btnNext.style.display = "none";
    } else {
      this.btnNext.disabled = false;
      this.btnPrev.disabled = false;
      this.btnNext.style.display = "block";
      this.btnPrev.style.display = "block";
    }
  }

  init(): void {
    this.checkBtns();
    this.btnNext.addEventListener("click", (e: Event) => {
      this.position -= this.movePosition;
      this.coursesTrack.style.transform = `translateX(${this.position}px)`;
      this.checkBtns();
    });

    this.btnPrev.addEventListener("click", (e: Event) => {
      this.position += this.movePosition;
      this.coursesTrack.style.transform = `translateX(${this.position}px)`;
      this.checkBtns();
    });
  }
}
