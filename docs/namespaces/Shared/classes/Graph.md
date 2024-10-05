[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Graph

# Class: Graph\<T\>

Represents a graph data structure.

## Type Parameters

• **T**

The type of value stored in the graph nodes.

## Implements

- [`IGraph`](../interfaces/IGraph.md)\<`T`\>

## Constructors

### new Graph()

> **new Graph**\<`T`\>(): [`Graph`](Graph.md)\<`T`\>

#### Returns

[`Graph`](Graph.md)\<`T`\>

## Methods

### addEdge()

> **addEdge**(`edge`): `void`

Adds an edge to the graph.

#### Parameters

• **edge**: [`IGraphEdge`](../interfaces/IGraphEdge.md)\<`T`\>

The edge to be added to the graph. Must be an instance of `IGraphEdge<T>`.

#### Returns

`void`

void

#### Throws

Error if the source node of the edge is not found in the graph.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`addEdge`](../interfaces/IGraph.md#addedge)

#### Defined in

[shared/ds/graph/Graph.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/Graph.ts#L32)

***

### addNode()

> **addNode**(`node`): `void`

Adds a node to the graph.

#### Parameters

• **node**: [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

The node to be added to the graph.

#### Returns

`void`

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`addNode`](../interfaces/IGraph.md#addnode)

#### Defined in

[shared/ds/graph/Graph.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/Graph.ts#L18)

***

### displayGraph()

> **displayGraph**(): `void`

Displays the graph by invoking the graph printing function.

#### Returns

`void`

#### Defined in

[shared/ds/graph/Graph.ts:65](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/Graph.ts#L65)

***

### getEdges()

> **getEdges**(`node`): [`IGraphEdge`](../interfaces/IGraphEdge.md)\<`T`\>[]

Retrieves a list of edges connected to the specified node.

#### Parameters

• **node**: [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

The node for which to get the edges.

#### Returns

[`IGraphEdge`](../interfaces/IGraphEdge.md)\<`T`\>[]

An array of edges connected to the specified node.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`getEdges`](../interfaces/IGraph.md#getedges)

#### Defined in

[shared/ds/graph/Graph.ts:56](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/Graph.ts#L56)

***

### getNeighbors()

> **getNeighbors**(`node`): [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>[]

Retrieves the neighboring nodes of a given node in the graph.

#### Parameters

• **node**: [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

The node for which to find neighbors.

#### Returns

[`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>[]

An array of neighboring nodes.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`getNeighbors`](../interfaces/IGraph.md#getneighbors)

#### Defined in

[shared/ds/graph/Graph.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/Graph.ts#L46)
