[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / StackUnderflowError

# Class: StackUnderflowError

Represents an error thrown when an operation is attempted on an empty stack.

This specific type of error should be thrown to indicate that
the stack does not have enough elements to satisfy the requested operation.

## Param

Custom error message.

## Extends

- `Error`

## Constructors

### new StackUnderflowError()

> **new StackUnderflowError**(`message`): [`StackUnderflowError`](StackUnderflowError.md)

#### Parameters

• **message**: `string` = `'Stack Underflow: The stack is empty'`

#### Returns

[`StackUnderflowError`](StackUnderflowError.md)

#### Overrides

`Error.constructor`

#### Defined in

[shared/ds/stack/StackErrors.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/StackErrors.ts#L26)
