export type InstanceTypeWithArgs<T, Args extends unknown[]> = T extends new (...args: Args) => infer R
    ? R
    : never;
