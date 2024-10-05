[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Stack

# Class: Stack\<T\>

A generic stack implementation with a maximum capacity.

## Type Parameters

• **T**

The type of elements in the stack.

## Implements

- [`IStack`](../interfaces/IStack.md)\<`T`\>

## Constructors

### new Stack()

> **new Stack**\<`T`\>(`maxCapacity`): [`Stack`](Stack.md)\<`T`\>

#### Parameters

• **maxCapacity**: `number`

#### Returns

[`Stack`](Stack.md)\<`T`\>

#### Defined in

[shared/ds/stack/Stack.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L12)

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the collection is empty.

#### Returns

`boolean`

True if the collection has no elements, otherwise false.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isEmpty`](../interfaces/IStack.md#isempty)

#### Defined in

[shared/ds/stack/Stack.ts:67](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L67)

***

### isFull()

> **isFull**(): `boolean`

Determines whether the container or collection has reached its maximum capacity.
Checks if the number of elements in the collection is equal to its predefined maximum capacity.

#### Returns

`boolean`

True if the number of elements equals the maximum capacity, otherwise false.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isFull`](../interfaces/IStack.md#isfull)

#### Defined in

[shared/ds/stack/Stack.ts:77](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L77)

***

### peek()

> **peek**(): `T`

Returns the top element of the stack without removing it.
Throws an error if the stack is empty.

#### Returns

`T`

The top element of the stack.

#### Throws

If the stack is empty.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`peek`](../interfaces/IStack.md#peek)

#### Defined in

[shared/ds/stack/Stack.ts:55](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L55)

***

### pop()

> **pop**(): `T`

Removes the top element from the stack and returns it.
If the stack is empty, an error is thrown.

#### Returns

`T`

The top element of the stack if available, otherwise undefined.

#### Throws

StackUnderflowError if the stack is empty.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`pop`](../interfaces/IStack.md#pop)

#### Defined in

[shared/ds/stack/Stack.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L41)

***

### push()

> **push**(`item`): `void`

Adds an item to the top of the stack.

#### Parameters

• **item**: `T`

The item to be added to the stack.

#### Returns

`void`

No return value.

#### Throws

If the stack is already at its maximum capacity.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`push`](../interfaces/IStack.md#push)

#### Defined in

[shared/ds/stack/Stack.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L26)

***

### size()

> **size**(): `number`

Retrieves the size of the collection.

#### Returns

`number`

The number of elements in the collection.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`size`](../interfaces/IStack.md#size)

#### Defined in

[shared/ds/stack/Stack.ts:85](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/Stack.ts#L85)
