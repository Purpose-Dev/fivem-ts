[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / PriorityQueue

# Class: PriorityQueue\<T\>

PriorityQueue is a data structure that manages elements in a way that the element with
the highest priority is always dequeued first.
Elements are stored with an associated priority, and the element with the lowest numerical
priority value is considered the highest priority.

## Type Parameters

• **T**

The type of elements held in the PriorityQueue.

## Implements

- [`IPriorityQueue`](../interfaces/IPriorityQueue.md)\<`T`\>

## Constructors

### new PriorityQueue()

> **new PriorityQueue**\<`T`\>(): [`PriorityQueue`](PriorityQueue.md)\<`T`\>

#### Returns

[`PriorityQueue`](PriorityQueue.md)\<`T`\>

## Methods

### dequeue()

> **dequeue**(): `T`

Removes and returns the first element from the queue.
If the queue is empty, it returns undefined.

#### Returns

`T`

The first element in the queue or undefined if the queue is empty.

#### Implementation of

[`IPriorityQueue`](../interfaces/IPriorityQueue.md).[`dequeue`](../interfaces/IPriorityQueue.md#dequeue)

#### Defined in

[shared/ds/queue/PriorityQueue.ts:44](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/PriorityQueue.ts#L44)

***

### enqueue()

> **enqueue**(`item`, `priority`): `void`

Adds an item to the queue with a specified priority.

#### Parameters

• **item**: `T`

The item to be added to the queue.

• **priority**: `number`

The priority of the item.

#### Returns

`void`

#### Implementation of

[`IPriorityQueue`](../interfaces/IPriorityQueue.md).[`enqueue`](../interfaces/IPriorityQueue.md#enqueue)

#### Defined in

[shared/ds/queue/PriorityQueue.ts:21](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/PriorityQueue.ts#L21)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the collection is empty.

#### Returns

`boolean`

True if the collection is empty, false otherwise.

#### Implementation of

[`IPriorityQueue`](../interfaces/IPriorityQueue.md).[`isEmpty`](../interfaces/IPriorityQueue.md#isempty)

#### Defined in

[shared/ds/queue/PriorityQueue.ts:62](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/PriorityQueue.ts#L62)

***

### peek()

> **peek**(): `T`

Returns the first element in the collection without removing it.

#### Returns

`T`

The value of the first element, or undefined if the collection is empty.

#### Implementation of

[`IPriorityQueue`](../interfaces/IPriorityQueue.md).[`peek`](../interfaces/IPriorityQueue.md#peek)

#### Defined in

[shared/ds/queue/PriorityQueue.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/PriorityQueue.ts#L53)

***

### size()

> **size**(): `number`

Gets the number of elements.

#### Returns

`number`

The number of elements.

#### Implementation of

[`IPriorityQueue`](../interfaces/IPriorityQueue.md).[`size`](../interfaces/IPriorityQueue.md#size)

#### Defined in

[shared/ds/queue/PriorityQueue.ts:71](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/PriorityQueue.ts#L71)
