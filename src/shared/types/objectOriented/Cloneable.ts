export type Cloneable<T> = T & {
    clone: () => T;
};
