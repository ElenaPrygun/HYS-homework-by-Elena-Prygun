const dataForLatestBlog = [
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
function createItem(obj) {
  let item = ` <div class="item-wrap">
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
  return item;
}

// Select posts
function selectPosts(pageNum, arr) {
  const start = (pageNum - 1) * 2;
  const end = start + 2;
  const slicedPosts = arr.slice(start, end);
  return slicedPosts;
}

// Paginator
const switcher = document.querySelector(".switcher");

function paginator(wrapper, array) {
  const el = document.querySelector(wrapper);
  for (let obj of selectPosts(1, array)) {
    el.innerHTML += createItem(obj);
  }
  switcher.addEventListener("click", (e) => {
    el.innerHTML = "";
    if (e.target.dataset.index === "1") {
      for (let obj of selectPosts(1, array)) {
        el.innerHTML += createItem(obj);
      }
    }
    if (e.target.dataset.index === "2") {
      for (let obj of selectPosts(2, array)) {
        el.innerHTML += createItem(obj);
      }
    }
    if (e.target.dataset.index === "3") {
      for (let obj of selectPosts(3, array)) {
        el.innerHTML += createItem(obj);
      }
    }
  });
}
paginator("#paginator", dataForLatestBlog);
