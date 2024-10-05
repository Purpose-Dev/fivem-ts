[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Conditional

# Function: Conditional()

> **Conditional**(`conditionFunc`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator that conditionally executes a method based on a provided condition function.

The `@Conditional` decorator wraps the decorated method and only executes it if the provided condition function
returns `true` for the given arguments. If the condition is not met, the method is not executed and a warning
message is logged to the console.

## Parameters

• **conditionFunc**

A function that takes the method's arguments and returns a boolean indicating whether the method should be executed.

## Returns

`Function`

### Parameters

• **\_target**: `unknown`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Example

```ts
class Example {
    @Conditional((active) => active === true)
    public performAction(active: boolean) {
        console.log(`Action performed! with active value is ${active}`);
    }
}

const example = new Example();
example.performAction(false); // Condition not met for function: performAction
example.performAction(true); // Action performed! with active value is true
```

## Defined in

[shared/decorators/checks/Conditional.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/checks/Conditional.ts#L24)
