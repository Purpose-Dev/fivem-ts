/**
 * Interface representing a stack data structure.
 *
 * @template T The type of elements held in the stack.
 */
export interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    isFull(): boolean;
    size(): number;
}
