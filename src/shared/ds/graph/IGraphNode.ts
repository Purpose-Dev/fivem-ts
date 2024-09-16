/**
 * Represents a node in a graph with a generic type.
 *
 * @template T - The type of the value held by the node.
 */
export interface IGraphNode<T> {
    getValue(): T;
}
