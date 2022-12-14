import { dataForSlider } from "../data";

export function LocalStorage(value: string) {
  return function (target: Object, propertyKey: string | symbol) {

    const setter = function (data: Array<any>) {

      localStorage.setItem(value, JSON.stringify(dataForSlider));
    };

    const getter = function () {
      return localStorage.getItem(value)
        ? JSON.parse(localStorage.getItem(value))
        : [];
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}
