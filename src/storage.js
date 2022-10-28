export class Storage {
  constructor(storageData) {
    this.storageData = storageData;
    this.saveData();
  }
  saveData() {
    if (!localStorage.getItem("dataForSlider")) {
      localStorage.setItem("dataForSlider", JSON.stringify(this.storageData));
    }
  }
  getSliderData() {
    return localStorage.getItem("dataForSlider")
      ? JSON.parse(localStorage.getItem("dataForSlider"))
      : [];
  }
}
