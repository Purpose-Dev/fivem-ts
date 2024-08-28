export type Serializable<T> = {
    toJSON: () => string;
} & T;
