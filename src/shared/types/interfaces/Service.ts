export type Service<T> = {
    start: () => void;
    stop: () => void;
} & T;
