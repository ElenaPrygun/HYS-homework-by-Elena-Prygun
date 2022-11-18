import { IStorage } from "./models/Storage.model";
import { SliderData } from "./models/SliderData.model";

export class Storage implements IStorage<SliderData> {
  constructor(public storageData: any[]) {
    this.storageData = storageData;
    this.saveData();
  }
  public saveData<T>(): void {
    localStorage.setItem("dataForSlider", JSON.stringify(this.storageData));
  }
  public getSliderData<T>(): Array<T> {
    return localStorage.getItem("dataForSlider")
      ? JSON.parse(localStorage.getItem("dataForSlider"))
      : [];
  }
}
