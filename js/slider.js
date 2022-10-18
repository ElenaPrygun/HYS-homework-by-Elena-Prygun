const dataForSlider = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
];

// Template
function createSliderItemMarkup(obj) {
  return `<div class="item-course" style = "background-image:url(${obj.url})" >
        <a href="#">${obj.title}</a>
       </div>`;
}

// Insert items
const coursesWrap = document.querySelector("#slider");
const coursesTrack = document.createElement("div");
coursesTrack.classList.add("courses-track");
coursesWrap.appendChild(coursesTrack);

for (let item of dataForSlider) {
  coursesTrack.innerHTML += createSliderItemMarkup(item);
}

// Common
let position = 0;
const slidesToScroll = 1;
const itemWidth = 217.5;
const itemsCount = dataForSlider.length;
const movePosition = slidesToScroll * itemWidth;
const btnNext = document.querySelector(".btn-prefcourse-right");
const btnPrev = document.querySelector(".btn-prefcourse-left");

// Media
function calcSlidesToShow() {
  let slidesToShow;
  if (window.matchMedia("(max-width:767px)").matches) {
    slidesToShow = 1;
  } else if (window.matchMedia("(max-width: 1339px)").matches) {
    slidesToShow = 2;
  } else if (window.matchMedia("(min-width: 1440px)").matches) {
    slidesToShow = 4;
  }
  return slidesToShow;
}
const slides = calcSlidesToShow();

// Events
function checkBtns() {
  if (position == 0) {
    btnPrev.disabled = true;
    btnPrev.style.display = "none";
  } else if (position <= -(itemsCount - slides) * itemWidth) {
    btnNext.disabled = true;
    btnNext.style.display = "none";
  } else {
    btnNext.disabled = false;
    btnPrev.disabled = false;
    btnNext.style.display = "block";
    btnPrev.style.display = "block";
  }
}
checkBtns();

btnNext.addEventListener("click", (e) => {
  position -= movePosition;
  coursesTrack.style.transform = `translateX(${position}px)`;
  checkBtns();
});

btnPrev.addEventListener("click", (e) => {
  position += movePosition;
  coursesTrack.style.transform = `translateX(${position}px)`;
  checkBtns();
});

// 2000+ Online courses- slick-slider
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
