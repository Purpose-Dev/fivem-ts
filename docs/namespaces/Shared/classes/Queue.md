[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Queue

# Class: Queue\<T\>

Represents a generic queue data structure.

## Type Parameters

• **T**

The type of elements stored in the queue.

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`T`\>

## Constructors

### new Queue()

> **new Queue**\<`T`\>(): [`Queue`](Queue.md)\<`T`\>

#### Returns

[`Queue`](Queue.md)\<`T`\>

## Methods

### dequeue()

> **dequeue**(): `T`

Removes and returns the first element from the queue.

#### Returns

`T`

The first element from the queue, or undefined if the queue is empty.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`dequeue`](../interfaces/IQueue.md#dequeue)

#### Defined in

[shared/ds/queue/Queue.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/Queue.ts#L26)

***

### enqueue()

> **enqueue**(`item`): `void`

Adds an item to the end of the queue.

#### Parameters

• **item**: `T`

The item to be added to the queue.

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`enqueue`](../interfaces/IQueue.md#enqueue)

#### Defined in

[shared/ds/queue/Queue.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/Queue.ts#L17)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the collection is empty.

#### Returns

`boolean`

True if the collection has no elements, false otherwise.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

#### Defined in

[shared/ds/queue/Queue.ts:45](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/Queue.ts#L45)

***

### peek()

> **peek**(): `T`

Retrieves but does not remove the first element of the collection.
If the collection is empty, returns undefined.

#### Returns

`T`

The first element of the collection, or undefined if the collection is empty.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`peek`](../interfaces/IQueue.md#peek)

#### Defined in

[shared/ds/queue/Queue.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/Queue.ts#L36)

***

### size()

> **size**(): `number`

Returns the number of elements in the collection.

#### Returns

`number`

The count of elements in the collection.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

#### Defined in

[shared/ds/queue/Queue.ts:54](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/Queue.ts#L54)
