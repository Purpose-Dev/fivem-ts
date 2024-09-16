import { ICircularQueue } from '.';

/**
 * CircularQueue is a data structure that follows the First In First Out (FIFO) principle
 * and efficiently manages queue operations within a fixed, circular buffer.
 *
 * @template T - The type of elements held in the queue.
 */
export class CircularQueue<T> implements ICircularQueue<T> {
    private readonly elements: (T | null)[];
    private front: number;
    private rear: number;
    private count: number;
    private readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.elements = new Array(capacity).fill(null);
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }

    /**
     * Adds an item to the end of the queue.
     *
     * @param {T} item - The item to be added to the queue.
     * @return {void} Does not return a value.
     */
    public enqueue(item: T): void {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.elements[this.rear] = item;
        this.count++;
    }

    /**
     * Removes and returns the front element from the queue.
     * If the queue is empty, returns undefined.
     *
     * @return {T | undefined} The front element of the queue if it exists, otherwise undefined.
     */
    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const item = this.elements[this.front];
        this.elements[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.count--;
        return item;
    }

    /**
     * Retrieves, but does not remove, the front element of the queue.
     *
     * @return {T | undefined} The front element of the queue if present, otherwise undefined.
     */
    public peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.elements[this.front] || undefined;
    }

    /**
     * Checks if the collection is empty.
     *
     * @return true if the collection has no elements; otherwise, false.
     */
    public isEmpty(): boolean {
        return this.count === 0;
    }

    /**
     * Checks if the current container is full.
     *
     * @return {boolean} Returns true if the container is full, otherwise false.
     */
    public isFull(): boolean {
        return this.count === this.capacity;
    }

    /**
     * Gets the current size or count of elements.
     *
     * @return {number} The number of elements.
     */
    public size(): number {
        return this.count;
    }
}
