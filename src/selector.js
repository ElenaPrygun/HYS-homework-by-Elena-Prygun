export class Select {
  #container;
  constructor(selector) {
    this.#container = document.querySelector(selector);
    this.#container.innerHTML = this.createMarkup();
  }

  createMarkup() {
    return `<option> Select item </option>
    <option value= "1"> Item 1 </option>  
     <option value= "2"> Item 2 </option>
      <option value= "3"> Item 3 </option>`;
  }

  init() {
    const select = document.querySelector("#select");
    return select;
  }
}
