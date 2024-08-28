export type InstanceTypeWithArgs<T, Args extends any[]> = T extends new (...args: Args) => infer R
    ? R
    : never;
