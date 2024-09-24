[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / GraphNode

# Class: GraphNode\<T\>

Represents a node in a graph structure.

## Type Parameters

• **T**

The type of the value held by the node.

## Implements

- [`IGraphNode`](../interfaces/IGraphNode.md)\<`T`\>

## Constructors

### new GraphNode()

> **new GraphNode**\<`T`\>(`value`): [`GraphNode`](GraphNode.md)\<`T`\>

#### Parameters

• **value**: `T`

#### Returns

[`GraphNode`](GraphNode.md)\<`T`\>

#### Defined in

[shared/ds/graph/GraphNode.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/GraphNode.ts#L9)

## Methods

### getValue()

> **getValue**(): `T`

Retrieves the current value stored in the instance.

#### Returns

`T`

The value stored in the instance.

#### Implementation of

[`IGraphNode`](../interfaces/IGraphNode.md).[`getValue`](../interfaces/IGraphNode.md#getvalue)

#### Defined in

[shared/ds/graph/GraphNode.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/graph/GraphNode.ts#L16)
