import { IQueue } from '.';

/**
 * Represents a generic queue data structure.
 *
 * @template T - The type of elements stored in the queue.
 */
export class Queue<T> implements IQueue<T> {
    private elements: T[] = [];

    /**
     * Adds an item to the end of the queue.
     *
     * @param {T} item - The item to be added to the queue.
     * @return {void}
     */
    public enqueue(item: T): void {
        this.elements.push(item);
    }

    /**
     * Removes and returns the first element from the queue.
     *
     * @return {T | undefined} The first element from the queue, or undefined if the queue is empty.
     */
    public dequeue(): T | undefined {
        return this.elements.shift();
    }

    /**
     * Retrieves but does not remove the first element of the collection.
     * If the collection is empty, returns undefined.
     *
     * @return {T | undefined} The first element of the collection, or undefined if the collection is empty.
     */
    public peek(): T | undefined {
        return this.elements[0];
    }

    /**
     * Checks if the collection is empty.
     *
     * @return {boolean} True if the collection has no elements, false otherwise.
     */
    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    /**
     * Returns the number of elements in the collection.
     *
     * @return {number} The count of elements in the collection.
     */
    public size(): number {
        return this.elements.length;
    }
}
