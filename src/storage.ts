import { IStorage } from "./models/Storage.model";
import { SliderData } from "./models/SliderData.model";
import { LocalStorage } from "./decorators/localSrorage.decorator";

export class Storage implements IStorage<SliderData> {
  @LocalStorage("DataFromStorage")
  localData: Array<SliderData>;

  public saveData<T>(): void {}

  public getSliderData<T>(): Array<SliderData> {
    return this.localData;
  }
}
