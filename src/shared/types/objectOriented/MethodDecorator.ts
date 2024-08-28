export type MethodDecorator<T> = (
    target: T,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
) => TypedPropertyDescriptor<any> | void;
