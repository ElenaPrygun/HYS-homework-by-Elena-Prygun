export interface IStorage<T> {
  saveData(): void;
  getSliderData(): Array<T>;
}
