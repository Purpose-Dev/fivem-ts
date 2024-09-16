/**
 * Represents an element in a priority queue.
 *
 * @template T
 * @property {T} value - The value of the element.
 * @property {number} priority - The priority of the element, higher numbers indicate higher priority.
 */
export interface PriorityQueueElement<T> {
    value: T;
    priority: number;
}
