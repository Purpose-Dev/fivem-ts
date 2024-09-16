import { IGraphEdge, IGraphNode } from '.';

/**
 * Represents an edge in a graph structure.
 *
 * @template T The type of the node.
 */
export class GraphEdge<T> implements IGraphEdge<T> {
    constructor(
        private source: IGraphNode<T>,
        private destination: IGraphNode<T>,
        private weight: number = 1,
    ) {}

    /**
     * Retrieves the source node of the graph.
     *
     * @return The source graph node.
     */
    public getSource(): IGraphNode<T> {
        return this.source;
    }

    /**
     * Retrieves the destination IGraphNode for the current instance.
     *
     * @return {IGraphNode<T>} The destination node.
     */
    public getDestination(): IGraphNode<T> {
        return this.destination;
    }

    /**
     * Retrieves the weight of the object.
     *
     * @return {number} The weight of the object.
     */
    public getWeight(): number {
        return this.weight;
    }
}
