/**
 * Interface representing a circular queue.
 *
 * @interface ICircularQueue
 * @template T - The type of elements held in this queue.
 */
export interface ICircularQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    isFull(): boolean;
    size(): number;
}
