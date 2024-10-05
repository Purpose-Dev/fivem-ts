[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / TreeNode

# Class: TreeNode\<T\>

Represents a node in a binary tree.

## Type Parameters

• **T**

The type of the value held by this node.

## Implements

- [`ITreeNode`](../interfaces/ITreeNode.md)\<`T`\>

## Constructors

### new TreeNode()

> **new TreeNode**\<`T`\>(`value`, `color`): [`TreeNode`](TreeNode.md)\<`T`\>

#### Parameters

• **value**: `T`

• **color**: [`NodeColor`](../enumerations/NodeColor.md) = `NodeColor.RED`

#### Returns

[`TreeNode`](TreeNode.md)\<`T`\>

#### Defined in

[shared/ds/tree/TreeNode.ts:15](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/TreeNode.ts#L15)

## Properties

### color

> **color**: [`NodeColor`](../enumerations/NodeColor.md)

The color of the node, typically used in Red-Black Trees.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`color`](../interfaces/ITreeNode.md#color)

#### Defined in

[shared/ds/tree/TreeNode.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/TreeNode.ts#L13)

***

### left

> **left**: [`TreeNode`](TreeNode.md)\<`T`\> = `null`

The left child node.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`left`](../interfaces/ITreeNode.md#left)

#### Defined in

[shared/ds/tree/TreeNode.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/TreeNode.ts#L10)

***

### parent

> **parent**: [`TreeNode`](TreeNode.md)\<`T`\> = `null`

The parent node.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`parent`](../interfaces/ITreeNode.md#parent)

#### Defined in

[shared/ds/tree/TreeNode.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/TreeNode.ts#L12)

***

### right

> **right**: [`TreeNode`](TreeNode.md)\<`T`\> = `null`

The right child node.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`right`](../interfaces/ITreeNode.md#right)

#### Defined in

[shared/ds/tree/TreeNode.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/TreeNode.ts#L11)

***

### value

> **value**: `T`

The value stored in the node.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`value`](../interfaces/ITreeNode.md#value)

#### Defined in

[shared/ds/tree/TreeNode.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/TreeNode.ts#L9)
