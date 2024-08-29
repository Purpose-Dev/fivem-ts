export type MethodDecorator<T> = (
    target: T,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<unknown>,
) => TypedPropertyDescriptor<unknown> | void;
