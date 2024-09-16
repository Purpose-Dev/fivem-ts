import { IGraph, IGraphEdge, IGraphNode } from '.';

/**
 * Represents a graph data structure.
 *
 * @template T - The type of value stored in the graph nodes.
 */
export class Graph<T> implements IGraph<T> {
    private nodes: Map<T, IGraphNode<T>> = new Map();
    private adjacencyList: Map<IGraphNode<T>, IGraphEdge<T>[]> = new Map();

    /**
     * Adds a node to the graph.
     *
     * @param {IGraphNode<T>} node - The node to be added to the graph.
     * @return {void}
     */
    public addNode(node: IGraphNode<T>): void {
        this.nodes.set(node.getValue(), node);
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    /**
     * Adds an edge to the graph.
     *
     * @param edge - The edge to be added to the graph. Must be an instance of `IGraphEdge<T>`.
     * @return void
     * @throws Error if the source node of the edge is not found in the graph.
     */
    public addEdge(edge: IGraphEdge<T>): void {
        const source = edge.getSource();
        if (!this.adjacencyList.has(source)) {
            throw new Error(`Source ${source} node not found in graph`);
        }
        this.adjacencyList.get(source)?.push(edge);
    }

    /**
     * Retrieves the neighboring nodes of a given node in the graph.
     *
     * @param {IGraphNode<T>} node - The node for which to find neighbors.
     * @return {IGraphNode<T>[]} An array of neighboring nodes.
     */
    public getNeighbors(node: IGraphNode<T>): IGraphNode<T>[] {
        return this.adjacencyList.get(node)?.map(edge => edge.getDestination()) || [];
    }

    /**
     * Retrieves a list of edges connected to the specified node.
     *
     * @param {IGraphNode<T>} node - The node for which to get the edges.
     * @return {IGraphEdge<T>[]} An array of edges connected to the specified node.
     */
    public getEdges(node: IGraphNode<T>): IGraphEdge<T>[] {
        return this.adjacencyList.get(node) || [];
    }

    /**
     * Displays the graph by invoking the graph printing function.
     *
     * @return {void}
     */
    public displayGraph(): void {
        this.printGraph();
    }

    /**
     * Formats the given graph edge into a string representation.
     * This representation includes the destination node's value and the edge's weight.
     *
     * @param edge - The edge instance implementing the IGraphEdge interface.
     * @return A string representing the destination node's value and the edge's weight.
     */
    private formatEdge(edge: IGraphEdge<T>): string {
        return `${edge.getDestination().getValue()} (weight: ${edge.getWeight()})`;
    }

    /**
     * Formats a graph node by combining its value with its associated edges.
     *
     * @param {IGraphNode<T>} node - The graph node to be formatted.
     * @param {IGraphEdge<T>[]} edges - An array of edges connected to the graph node.
     * @return {string} The formatted string representing the node and its edges.
     */
    private formatNode(node: IGraphNode<T>, edges: IGraphEdge<T>[]): string {
        const formattedEdges = edges.map(this.formatEdge).join(', ');
        return `${node.getValue()} -> ${formattedEdges}`;
    }

    /**
     * Prints the graph by iterating over the adjacency list and logging each node
     * along with its connected edges.
     *
     * @return {void} This method does not return any value.
     */
    private printGraph(): void {
        for (let [node, edges] of this.adjacencyList.entries()) {
            const nodeRepresentation = this.formatNode(node, edges);
            console.log(nodeRepresentation);
        }
    }
}
