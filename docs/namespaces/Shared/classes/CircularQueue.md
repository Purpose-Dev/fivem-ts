[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / CircularQueue

# Class: CircularQueue\<T\>

CircularQueue is a data structure that follows the First In First Out (FIFO) principle
and efficiently manages queue operations within a fixed, circular buffer.

## Type Parameters

• **T**

The type of elements held in the queue.

## Implements

- [`ICircularQueue`](../interfaces/ICircularQueue.md)\<`T`\>

## Constructors

### new CircularQueue()

> **new CircularQueue**\<`T`\>(`capacity`): [`CircularQueue`](CircularQueue.md)\<`T`\>

#### Parameters

• **capacity**: `number`

#### Returns

[`CircularQueue`](CircularQueue.md)\<`T`\>

#### Defined in

[shared/ds/queue/CircularQueue.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L16)

## Methods

### dequeue()

> **dequeue**(): `T`

Removes and returns the front element from the queue.
If the queue is empty, returns undefined.

#### Returns

`T`

The front element of the queue if it exists, otherwise undefined.

#### Implementation of

[`ICircularQueue`](../interfaces/ICircularQueue.md).[`dequeue`](../interfaces/ICircularQueue.md#dequeue)

#### Defined in

[shared/ds/queue/CircularQueue.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L46)

***

### enqueue()

> **enqueue**(`item`): `void`

Adds an item to the end of the queue.

#### Parameters

• **item**: `T`

The item to be added to the queue.

#### Returns

`void`

Does not return a value.

#### Implementation of

[`ICircularQueue`](../interfaces/ICircularQueue.md).[`enqueue`](../interfaces/ICircularQueue.md#enqueue)

#### Defined in

[shared/ds/queue/CircularQueue.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L30)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the collection is empty.

#### Returns

`boolean`

true if the collection has no elements; otherwise, false.

#### Implementation of

[`ICircularQueue`](../interfaces/ICircularQueue.md).[`isEmpty`](../interfaces/ICircularQueue.md#isempty)

#### Defined in

[shared/ds/queue/CircularQueue.ts:76](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L76)

***

### isFull()

> **isFull**(): `boolean`

Checks if the current container is full.

#### Returns

`boolean`

Returns true if the container is full, otherwise false.

#### Implementation of

[`ICircularQueue`](../interfaces/ICircularQueue.md).[`isFull`](../interfaces/ICircularQueue.md#isfull)

#### Defined in

[shared/ds/queue/CircularQueue.ts:85](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L85)

***

### peek()

> **peek**(): `T`

Retrieves, but does not remove, the front element of the queue.

#### Returns

`T`

The front element of the queue if present, otherwise undefined.

#### Implementation of

[`ICircularQueue`](../interfaces/ICircularQueue.md).[`peek`](../interfaces/ICircularQueue.md#peek)

#### Defined in

[shared/ds/queue/CircularQueue.ts:63](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L63)

***

### size()

> **size**(): `number`

Gets the current size or count of elements.

#### Returns

`number`

The number of elements.

#### Implementation of

[`ICircularQueue`](../interfaces/ICircularQueue.md).[`size`](../interfaces/ICircularQueue.md#size)

#### Defined in

[shared/ds/queue/CircularQueue.ts:94](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/CircularQueue.ts#L94)
