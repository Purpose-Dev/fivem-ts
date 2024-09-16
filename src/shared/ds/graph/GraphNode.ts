import { IGraphNode } from '.';

/**
 * Represents a node in a graph structure.
 *
 * @template T - The type of the value held by the node.
 * @implements {IGraphNode<T>}
 */
export class GraphNode<T> implements IGraphNode<T> {
    constructor(private value: T) {}

    /**
     * Retrieves the current value stored in the instance.
     *
     * @return {T} The value stored in the instance.
     */
    public getValue(): T {
        return this.value;
    }
}
