export class Select {
  constructor(selector, callbackOnSelect) {
    this._el = document.querySelector(selector);
    this.callbackOnSelect = callbackOnSelect;

    this.init();
  }

  initMarkup() {
    const optionsMurkup = [1, 2, 3].map(
      (id) => `<option value="${id}"> Item ${id}</option>`
    );
    this._el.innerHTML = `<select data-select> ${optionsMurkup}</select>`;
  }

  initEvents() {
    const select = document.querySelector("[data-select]");
    select.classList.add("pref-select");
    select.addEventListener("change", (e) => {
      this.callbackOnSelect(e.target.value);
    });
  }

  init() {
    this.initMarkup();
    this.initEvents();
  }
}
