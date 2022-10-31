import "@babel/polyfill";
import "./index.html";
import "./css/style.css";

import { App } from "./app.js";
window.addEventListener("DOMContentLoaded", () => {
  new App().init();
});
