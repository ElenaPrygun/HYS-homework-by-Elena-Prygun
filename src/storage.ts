import { IStorage } from "./models/Storage.model";
import { SliderData } from "./models/SliderData.model";
import { LocalStorage } from "./decorators/localSrorage.decorator";

export class Storage implements IStorage<SliderData> {
  @LocalStorage("DataFromStorage")
  localData: Array<SliderData>;

  constructor() {
    this.saveData(this.localData);
  }

  public saveData<T>(value: Array<SliderData>): void {
    this.localData = value;
  }

  public getSliderData<T>(): Array<SliderData> {
    return this.localData;
  }
}
