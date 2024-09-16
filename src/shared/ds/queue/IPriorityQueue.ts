/**
 * Interface representing a priority queue data structure.
 *
 * @template T - The type of elements held in the priority queue.
 */
export interface IPriorityQueue<T> {
    enqueue(item: T, priority: number): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
