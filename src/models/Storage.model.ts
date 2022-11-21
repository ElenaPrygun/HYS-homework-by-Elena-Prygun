export interface IStorage<T> {
  localData: Array<T>;
  saveData(): void;
  getSliderData(): Array<T>;
}
