[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / IGraph

# Interface: IGraph\<T\>

Interface representing a generic graph structure.

## Type Parameters

• **T**

The type of data held by the nodes in the graph.

## Methods

### addEdge()

> **addEdge**(`node`): `void`

#### Parameters

• **node**: [`IGraphEdge`](IGraphEdge.md)\<`T`\>

#### Returns

`void`

#### Defined in

[shared/ds/graph/IGraph.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/IGraph.ts#L10)

***

### addNode()

> **addNode**(`node`): `void`

#### Parameters

• **node**: [`IGraphNode`](IGraphNode.md)\<`T`\>

#### Returns

`void`

#### Defined in

[shared/ds/graph/IGraph.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/IGraph.ts#L9)

***

### getEdges()

> **getEdges**(`node`): [`IGraphEdge`](IGraphEdge.md)\<`T`\>[]

#### Parameters

• **node**: [`IGraphNode`](IGraphNode.md)\<`T`\>

#### Returns

[`IGraphEdge`](IGraphEdge.md)\<`T`\>[]

#### Defined in

[shared/ds/graph/IGraph.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/IGraph.ts#L12)

***

### getNeighbors()

> **getNeighbors**(`node`): [`IGraphNode`](IGraphNode.md)\<`T`\>[]

#### Parameters

• **node**: [`IGraphNode`](IGraphNode.md)\<`T`\>

#### Returns

[`IGraphNode`](IGraphNode.md)\<`T`\>[]

#### Defined in

[shared/ds/graph/IGraph.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/IGraph.ts#L11)
