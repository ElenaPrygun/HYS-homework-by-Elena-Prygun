export interface IStorage<T> {
  localData: Array<T>;
  saveData(value: Array<any>): void;
  getSliderData(): Array<T>;
}
