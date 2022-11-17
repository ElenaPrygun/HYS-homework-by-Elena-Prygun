import { IStorage } from "./models/Storage.model";
import { SliderData } from "./models/SliderData.model";

export class Storage implements IStorage<SliderData> {
  constructor(public storageData: Array<SliderData>) {
    this.storageData = storageData;
    this.saveData();
  }
  public saveData<SliderData>(): void {
    localStorage.setItem("dataForSlider", JSON.stringify(this.storageData));
  }
  public getSliderData<SliderData>(): Array<SliderData> {
    return localStorage.getItem("dataForSlider")
      ? JSON.parse(localStorage.getItem("dataForSlider"))
      : [];
  }
}
