import { IGraphNode } from '.';

/**
 * Interface representing an edge in a graph.
 *
 * @template T
 */
export interface IGraphEdge<T> {
    getSource(): IGraphNode<T>;
    getDestination(): IGraphNode<T>;
    getWeight(): number;
}
