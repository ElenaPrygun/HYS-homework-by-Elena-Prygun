export class Storage {
  storageData: [];
  constructor(storageData: []) {
    this.storageData = storageData;
    this.saveData();
  }
  saveData() {
    localStorage.setItem("dataForSlider", JSON.stringify(this.storageData));
  }
  getSliderData() {
    return localStorage.getItem("dataForSlider")
      ? JSON.parse(localStorage.getItem("dataForSlider"))
      : [];
  }
}
