[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / ITree

# Interface: ITree\<T\>

Represents a generic tree data structure where each node can have multiple children.
This interface supports standard operations such as adding, removing,
checking the existence of elements, and performing in-order traversal.

## Type Parameters

• **T**

The type of elements maintained by this tree.

## Methods

### add()

> **add**(`value`): `void`

#### Parameters

• **value**: `T`

#### Returns

`void`

#### Defined in

[shared/ds/tree/ITree.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L9)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[shared/ds/tree/ITree.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L17)

***

### contains()

> **contains**(`value`): `boolean`

#### Parameters

• **value**: `T`

#### Returns

`boolean`

#### Defined in

[shared/ds/tree/ITree.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L11)

***

### findMax()

> **findMax**(): `T`

#### Returns

`T`

#### Defined in

[shared/ds/tree/ITree.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L14)

***

### findMin()

> **findMin**(): `T`

#### Returns

`T`

#### Defined in

[shared/ds/tree/ITree.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L13)

***

### inOrderTraversal()

> **inOrderTraversal**(): `T`[]

#### Returns

`T`[]

#### Defined in

[shared/ds/tree/ITree.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L12)

***

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[shared/ds/tree/ITree.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L16)

***

### remove()

> **remove**(`value`): `void`

#### Parameters

• **value**: `T`

#### Returns

`void`

#### Defined in

[shared/ds/tree/ITree.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L10)

***

### size()

> **size**(): `number`

#### Returns

`number`

#### Defined in

[shared/ds/tree/ITree.ts:15](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/tree/ITree.ts#L15)
