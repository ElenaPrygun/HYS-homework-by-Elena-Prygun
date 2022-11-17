export interface IStorage<T> {
  storageData: Array<T>;
  saveData(): void;
  getSliderData(): Array<T>;
}
