import { selectOptions } from "./types&enums/enumForSelectOptions";

export class Select {
  private el: HTMLElement | null;
  callbackOnSelect: Function;
  constructor(selector: string, callbackOnSelect: Function) {
    this.el = document.querySelector(selector);
    this.callbackOnSelect = callbackOnSelect;

    this.init();
  }

  initMarkup(): void {
    const optionsMarkup:string[] = [0, 1, 2].map(
      (id) =>
        `<option value="${Number(Object.values(selectOptions)[id])}"> ${
          Object.keys(selectOptions)[id]
        }</option>`
    );    
    this.el.innerHTML = `<select data-select> ${optionsMarkup}</select>`;
  }

  initEvents(): void {
    const select = document.querySelector("[data-select]") as HTMLSelectElement;
    select.classList.add("pref-select");
    select.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLOptionElement;
      this.callbackOnSelect(target.value);
    });
  }

  init(): void {
    this.initMarkup();
    this.initEvents();
  }
}
