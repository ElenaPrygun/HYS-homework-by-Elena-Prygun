import "@babel/polyfill";
import "./index.html";
import "./css/style.css";

import { App } from "./app";
window.addEventListener("DOMContentLoaded", () => {
  new App().init();
});