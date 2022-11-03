export class Select {
  #id;
  constructor(selector, callbackOnSelect) {
    this.#id = "#select";
    this.selector = document.querySelector(selector);
    this.callbackOnSelect = callbackOnSelect;
    this.createMarkup();
    this.addFunctionality();
    this.init();
  }

  createMarkup() {
    for (let i = 0; i < 3; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${i + 1}`);
      option.innerHTML = `Item ${i + 1}`;
      this.selector.appendChild(option);
    }

    return this.selector;
  }

  addFunctionality() {
    this.selector.addEventListener("change", (e) => {
      this.callbackOnSelect(e.target.value);
    });
  }

  init() {
    const select = document.querySelector(this.#id);
    return select;
  }
}
