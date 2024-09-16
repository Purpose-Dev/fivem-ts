import { IPriorityQueue, PriorityQueueElement } from '.';

/**
 * PriorityQueue is a data structure that manages elements in a way that the element with
 * the highest priority is always dequeued first.
 * Elements are stored with an associated priority, and the element with the lowest numerical
 * priority value is considered the highest priority.
 *
 * @template T The type of elements held in the PriorityQueue.
 */
export class PriorityQueue<T> implements IPriorityQueue<T> {
    private elements: PriorityQueueElement<T>[] = [];

    /**
     * Adds an item to the queue with a specified priority.
     *
     * @param {T} item - The item to be added to the queue.
     * @param {number} priority - The priority of the item.
     * @return {void}
     */
    public enqueue(item: T, priority: number): void {
        const element: PriorityQueueElement<T> = { value: item, priority };
        let added: boolean = false;

        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i].priority > priority) {
                this.elements.splice(i, 0, element);
                added = true;
                break;
            }
        }

        if (!added) {
            this.elements.push(element);
        }
    }

    /**
     * Removes and returns the first element from the queue.
     * If the queue is empty, it returns undefined.
     *
     * @return The first element in the queue or undefined if the queue is empty.
     */
    public dequeue(): T | undefined {
        return this.elements.shift()?.value;
    }

    /**
     * Returns the first element in the collection without removing it.
     *
     * @return {T | undefined} The value of the first element, or undefined if the collection is empty.
     */
    public peek(): T | undefined {
        return this.elements[0]?.value;
    }

    /**
     * Checks if the collection is empty.
     *
     * @return {boolean} True if the collection is empty, false otherwise.
     */
    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    /**
     * Gets the number of elements.
     *
     * @return {number} The number of elements.
     */
    public size(): number {
        return this.elements.length;
    }
}
