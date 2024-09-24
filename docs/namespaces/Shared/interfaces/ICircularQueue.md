[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / ICircularQueue

# Interface: ICircularQueue\<T\>

Interface representing a circular queue.

 ICircularQueue

## Type Parameters

• **T**

The type of elements held in this queue.

## Methods

### dequeue()

> **dequeue**(): `T`

#### Returns

`T`

#### Defined in

[shared/ds/queue/ICircularQueue.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/ICircularQueue.ts#L9)

***

### enqueue()

> **enqueue**(`item`): `void`

#### Parameters

• **item**: `T`

#### Returns

`void`

#### Defined in

[shared/ds/queue/ICircularQueue.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/ICircularQueue.ts#L8)

***

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[shared/ds/queue/ICircularQueue.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/ICircularQueue.ts#L11)

***

### isFull()

> **isFull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[shared/ds/queue/ICircularQueue.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/ICircularQueue.ts#L12)

***

### peek()

> **peek**(): `T`

#### Returns

`T`

#### Defined in

[shared/ds/queue/ICircularQueue.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/ICircularQueue.ts#L10)

***

### size()

> **size**(): `number`

#### Returns

`number`

#### Defined in

[shared/ds/queue/ICircularQueue.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/queue/ICircularQueue.ts#L13)
