import { selectOptions } from "./models/Option.model";
import { OnSelect } from "./models/OnSelect.model";
import { InitSelect } from "./models/InitSelect.model";

export class Select implements InitSelect {
  private el: HTMLElement | null;
  // callbackOnSelect: OnSelect;
  constructor(selector: string, public callbackOnSelect: OnSelect) {
    this.el = document.querySelector(selector);
    this.callbackOnSelect = callbackOnSelect;

    this.init();
  }

  public init(): void {
    this.initMarkup();
    this.initEvents();
  }

  private initMarkup(): void {
    const optionsMarkup: string[] = [0, 1, 2].map(
      (id) =>
        `<option value="${Number(Object.values(selectOptions)[id])}"> ${
          Object.keys(selectOptions)[id]
        }</option>`
    );
    this.el.innerHTML = `<select data-select> ${optionsMarkup}</select>`;
  }

  private initEvents(): void {
    const select = document.querySelector("[data-select]") as HTMLSelectElement;
    select.classList.add("pref-select");
    select.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLOptionElement;
      this.callbackOnSelect(target.value);
    });
  }
}
