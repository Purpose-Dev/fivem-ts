[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / waitFor

# Function: waitFor()

> **waitFor**\<`T`\>(`cb`, `errorMessage`, `timeout`): `Promise`\<`T`\>

Waits for a callback function to return a defined value within a specified timeout.

This function repeatedly calls the provided callback until it returns a non-`undefined`
value or the specified timeout is reached. If the timeout is `false`, the function will
wait indefinitely until the callback returns a non-`undefined` value or the script is terminated.

## Type Parameters

• **T**

## Parameters

• **cb**

A callback function that returns a value of type `T` or a `Promise` of type `T`.
             The function will be called repeatedly until it returns a non-`undefined` value.

• **errorMessage**: `string` = `'Callback failed to resolve'`

An optional custom error message to use if the timeout is reached before
                    the callback returns a value. Defaults to `'Callback failed to resolve'`.

• **timeout**: `number` \| `boolean` = `1000`

An optional timeout duration in milliseconds. If `false`, it disables the
                  timeout, making the function wait indefinitely. If not provided or if `null`,
                  defaults to `1000` milliseconds. If provided, must be a non-negative number.

## Returns

`Promise`\<`T`\>

A promise that resolves with the non-`undefined` value returned by the callback,
         or rejects with an error if the timeout is reached before a value is returned.

## Throws

Error if the timeout is reached before the callback returns a non-`undefined` value.
               The error message includes the provided or default error message and the elapsed
               time in milliseconds.

## Example

```ts
async function exampleCallback(): Promise<number | undefined> {
  return new Promise(resolve => setTimeout(() => resolve(Math.random() > 0.5 ? 42 : undefined), 500));
}

waitFor(exampleCallback, 'Value not returned in time', 2000)
  .then(value => console.log('Received value:', value))
  .catch(error => console.error('Error:', error));
```

## Defined in

[shared/utils/waitFor.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/waitFor.ts#L37)
