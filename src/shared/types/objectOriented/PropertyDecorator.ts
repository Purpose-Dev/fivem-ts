export type PropertyDecorator<T> = (target: T, propertyKey: string | symbol) => void;
