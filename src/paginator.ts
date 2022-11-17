import { PaginatorData } from "./models/PaginatorData.model";

import { InitPaginator } from "./models/IPaginator.model";

const dataForLatestBlog: object[] = [
  {
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    userImage: "https://via.placeholder.com/150/92c952",
    redirectLink: "https://jsonplaceholder.typicode.com",
    category: "Design",
  },
  {
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    userImage: "https://via.placeholder.com/150/771796",
    redirectLink: "https://jsonplaceholder.typicode.com",
    category: "Design",
  },
  {
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    userImage: "https://via.placeholder.com/150/24f355",
    redirectLink: "https://jsonplaceholder.typicode.com",
    category: "Design",
  },
  {
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    userImage: "https://via.placeholder.com/150/d32776",
    redirectLink: "https://jsonplaceholder.typicode.com",
    category: "Design",
  },
  {
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    userImage: "https://via.placeholder.com/150/f66b97",
    redirectLink: "https://jsonplaceholder.typicode.com",
    category: "Design",
  },
];

// Create item
function createItem(obj: PaginatorData): string {
  return ` <div class="item-wrap">
                <div class="left-side-of-blog">
                  <span class="uppercase vertical-mode">${obj.category}</span>
                  <img src=${obj.userImage} class="author-photo"/>
                </div>
                <div class="right-side-of-blog">
                  <img src=${obj.url} class="picture-of-blog"/>                  
                  <a class="name-of-news" href="#">${obj.title}</a>
                  <a class="read-now" href=${obj.redirectLink}>Read Now</a>
                </div>
              </div> `;
}

// Select posts
function selectPosts(pageNum: number, arr: object[]): object[] {
  const start: number = (pageNum - 1) * 2;
  const end: number = start + 2;
  const slicedPosts: object[] = arr.slice(start, end);
  return slicedPosts;
}

// Template for page
function getCards(
  nameOfEl: HTMLElement,
  n: number,
  nameOfArray: object[]
): void {
  for (let obj of selectPosts(n, nameOfArray)) {
    nameOfEl.innerHTML += createItem(obj as any);
  }
}

// Reset Buttons Style
const switcher = document.querySelector(".switcher") as HTMLDivElement;
const buttons: Element[] = Array.from(switcher.children);
switcher.firstElementChild.classList.add("active");
function resetStyles(): void {
  for (let button of buttons) {
    button.classList.remove("active", "switcher-button");
    button.classList.add("inactive");
  }
}

// Paginator
function paginator(wrapper: string, array: object[]) {
  const el = document.querySelector(wrapper) as HTMLElement;
  getCards(el, 1, array);
  switcher.addEventListener("click", (e: Event) => {
    resetStyles();
    let target = e.target as HTMLButtonElement;
    let datasetValue: number = +target.dataset.index;
    target.classList.add("active");
    el.innerHTML = "";
    getCards(el, datasetValue, array);
  });
}

export { paginator, dataForLatestBlog };
