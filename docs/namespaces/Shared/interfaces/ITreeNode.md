[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / ITreeNode

# Interface: ITreeNode\<T\>

Represents a node in a binary tree.

## Type Parameters

• **T**

The type of the value held by the node.

## Properties

### color

> **color**: [`NodeColor`](../enumerations/NodeColor.md)

The color of the node, typically used in Red-Black Trees.

#### Defined in

[shared/ds/tree/ITreeNode.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITreeNode.ts#L19)

***

### left

> **left**: [`ITreeNode`](ITreeNode.md)\<`T`\>

The left child node.

#### Defined in

[shared/ds/tree/ITreeNode.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITreeNode.ts#L16)

***

### parent

> **parent**: [`ITreeNode`](ITreeNode.md)\<`T`\>

The parent node.

#### Defined in

[shared/ds/tree/ITreeNode.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITreeNode.ts#L18)

***

### right

> **right**: [`ITreeNode`](ITreeNode.md)\<`T`\>

The right child node.

#### Defined in

[shared/ds/tree/ITreeNode.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITreeNode.ts#L17)

***

### value

> **value**: `T`

The value stored in the node.

#### Defined in

[shared/ds/tree/ITreeNode.ts:15](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITreeNode.ts#L15)
