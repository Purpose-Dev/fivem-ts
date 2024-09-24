[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / StackOverflowError

# Class: StackOverflowError

Represents an error thrown when a stack exceeds its capacity.

The StackOverflowError extends the standard Error object and is used to indicate
that an operation could not be completed because the stack is full.

## Param

The error message to be displayed.

## Extends

- `Error`

## Constructors

### new StackOverflowError()

> **new StackOverflowError**(`message`): [`StackOverflowError`](StackOverflowError.md)

#### Parameters

• **message**: `string` = `'Stack Overflow: The stack is full'`

#### Returns

[`StackOverflowError`](StackOverflowError.md)

#### Overrides

`Error.constructor`

#### Defined in

[shared/ds/stack/StackErrors.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/ds/stack/StackErrors.ts#L10)
