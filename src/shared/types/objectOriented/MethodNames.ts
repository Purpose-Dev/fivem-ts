export type MethodNames<T> = {
    [K in keyof T]: T[K] extends (...args: unknown[]) => any ? K : never;
}[keyof T];
