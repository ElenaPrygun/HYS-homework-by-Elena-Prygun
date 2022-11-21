export function ReadOnly(value: boolean) {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = !value;
    descriptor.configurable = !value;
    Object.freeze(target);
  };
}
