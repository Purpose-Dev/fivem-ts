import { IStack, StackOverflowError, StackUnderflowError } from '.';

/**
 * A generic stack implementation with a maximum capacity.
 *
 * @template T - The type of elements in the stack.
 */
export class Stack<T> implements IStack<T> {
    private elements: T[] = [];
    private readonly maxCapacity: number;

    constructor(maxCapacity: number) {
        if (maxCapacity <= 0) {
            throw new Error('Invalid max capacity');
        }
        this.maxCapacity = maxCapacity;
    }

    /**
     * Adds an item to the top of the stack.
     *
     * @param {T} item - The item to be added to the stack.
     * @return {void} No return value.
     * @throws {StackOverflowError} If the stack is already at its maximum capacity.
     */
    public push(item: T): void {
        if (this.isFull()) {
            throw new StackOverflowError(
                `Unable to add ${item}: the stack is full (maximum capacity: ${this.maxCapacity}).`,
            );
        }
        this.elements.push(item);
    }

    /**
     * Removes the top element from the stack and returns it.
     * If the stack is empty, an error is thrown.
     * @return The top element of the stack if available, otherwise undefined.
     * @throws StackUnderflowError if the stack is empty.
     */
    public pop(): T | undefined {
        if (this.isEmpty()) {
            throw new StackUnderflowError('Unable to remove an item: the stack is empty.');
        }
        return this.elements.pop();
    }

    /**
     * Returns the top element of the stack without removing it.
     * Throws an error if the stack is empty.
     *
     * @return {T | undefined} The top element of the stack.
     * @throws {StackUnderflowError} If the stack is empty.
     */
    public peek(): T | undefined {
        if (this.isEmpty()) {
            throw new StackUnderflowError('Unable to peek: the stack is empty.');
        }
        return this.elements[this.elements.length - 1];
    }

    /**
     * Checks if the collection is empty.
     *
     * @return {boolean} True if the collection has no elements, otherwise false.
     */
    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    /**
     * Determines whether the container or collection has reached its maximum capacity.
     * Checks if the number of elements in the collection is equal to its predefined maximum capacity.
     *
     * @return {boolean} True if the number of elements equals the maximum capacity, otherwise false.
     */
    public isFull(): boolean {
        return this.elements.length === this.maxCapacity;
    }

    /**
     * Retrieves the size of the collection.
     * @return The number of elements in the collection.
     */
    public size(): number {
        return this.elements.length;
    }
}
