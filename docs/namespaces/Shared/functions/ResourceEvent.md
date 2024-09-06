[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / ResourceEvent

# Function: ResourceEvent()

> **ResourceEvent**(`resourceEvent`): (`target`, `propertyKey`, `descriptor`) => `void`

A decorator that registers a method to be called when a specific resource event occurs.

The `@ResourceEvent` decorator is used to execute a method in response to resource start or stop events.
The method decorated with `@ResourceEvent` will be called automatically when the specified event occurs for the current resource.

**Events:**
- `'start'`: The method will be called when the resource starts.
- `'stop'`: The method will be called when the resource stops.

## Parameters

• **resourceEvent**: `"start"` \| `"stop"`

The type of resource event to listen for. Must be either `'start'` or `'stop'`.

## Returns

`Function`

### Parameters

• **target**: `unknown`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Example

```ts
class MyScript {
    @ResourceEvent('start')
    onStart() {
        console.log('Resource started');
    }

    @ResourceEvent('stop')
    onStop() {
        console.log('Resource stopped');
    }
}
```

## Defined in

[shared/decorators/events/resourceEvent.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/events/resourceEvent.ts#L30)
