/**
 * Represents a generic tree data structure where each node can have multiple children.
 * This interface supports standard operations such as adding, removing,
 * checking the existence of elements, and performing in-order traversal.
 *
 * @template T - The type of elements maintained by this tree.
 */
export interface ITree<T> {
    add(value: T): void;
    remove(value: T): void;
    contains(value: T): boolean;
    inOrderTraversal(): T[];
    findMin(): T | null;
    findMax(): T | null;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
}
