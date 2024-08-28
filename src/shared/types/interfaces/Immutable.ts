export type Immutable<T> = {
    readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};
