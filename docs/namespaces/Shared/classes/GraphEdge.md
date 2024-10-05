[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / GraphEdge

# Class: GraphEdge\<T\>

Represents an edge in a graph structure.

## Type Parameters

• **T**

The type of the node.

## Implements

- [`IGraphEdge`](../interfaces/IGraphEdge.md)\<`T`\>

## Constructors

### new GraphEdge()

> **new GraphEdge**\<`T`\>(`source`, `destination`, `weight`): [`GraphEdge`](GraphEdge.md)\<`T`\>

#### Parameters

• **source**: [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

• **destination**: [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

• **weight**: `number` = `1`

#### Returns

[`GraphEdge`](GraphEdge.md)\<`T`\>

#### Defined in

[shared/ds/graph/GraphEdge.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/GraphEdge.ts#L9)

## Methods

### getDestination()

> **getDestination**(): [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

Retrieves the destination IGraphNode for the current instance.

#### Returns

[`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

The destination node.

#### Implementation of

[`IGraphEdge`](../interfaces/IGraphEdge.md).[`getDestination`](../interfaces/IGraphEdge.md#getdestination)

#### Defined in

[shared/ds/graph/GraphEdge.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/GraphEdge.ts#L29)

***

### getSource()

> **getSource**(): [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

Retrieves the source node of the graph.

#### Returns

[`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

The source graph node.

#### Implementation of

[`IGraphEdge`](../interfaces/IGraphEdge.md).[`getSource`](../interfaces/IGraphEdge.md#getsource)

#### Defined in

[shared/ds/graph/GraphEdge.ts:20](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/GraphEdge.ts#L20)

***

### getWeight()

> **getWeight**(): `number`

Retrieves the weight of the object.

#### Returns

`number`

The weight of the object.

#### Implementation of

[`IGraphEdge`](../interfaces/IGraphEdge.md).[`getWeight`](../interfaces/IGraphEdge.md#getweight)

#### Defined in

[shared/ds/graph/GraphEdge.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/GraphEdge.ts#L38)
