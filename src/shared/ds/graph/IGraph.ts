import { IGraphEdge, IGraphNode } from '.';

/**
 * Interface representing a generic graph structure.
 *
 * @template T The type of data held by the nodes in the graph.
 */
export interface IGraph<T> {
    addNode(node: IGraphNode<T>): void;
    addEdge(node: IGraphEdge<T>): void;
    getNeighbors(node: IGraphNode<T>): IGraphNode<T>[];
    getEdges(node: IGraphNode<T>): IGraphEdge<T>[];
}
