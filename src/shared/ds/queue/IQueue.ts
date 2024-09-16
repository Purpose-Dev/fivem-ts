/**
 * Interface representing a generic queue.
 *
 * @template T - The type of value stored in the queue.
 */
export interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
