export type FluentInterface<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => unknown
        ? (...args: A) => FluentInterface<T>
        : T[K];
};
