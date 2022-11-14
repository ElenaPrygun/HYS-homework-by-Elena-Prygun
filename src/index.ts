import "@babel/polyfill";
import "./index.html";
import "./css/style.css";

import { App } from "./app";
window.addEventListener("DOMContentLoaded", () => {
  new App().init();
});

// enum selectOptions {
//   "Item 1" = "1",
//   "Item 2" = "2",
//   "Item 3" = "3",
// }

// const arrFromEnumValues = Object.keys(selectOptions);
// console.log(arrFromEnumValues);
