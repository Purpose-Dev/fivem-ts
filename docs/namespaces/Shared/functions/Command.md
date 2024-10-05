[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Command

# Function: Command()

> **Command**(`commandName`): (`target`, `propertyKey`, `descriptor`) => `void`

A decorator to register a method as a command with a specified name.

This decorator uses the `RegisterCommand` function to register the method as a command handler
and stores metadata about the command name using `reflect-metadata`.

## Parameters

• **commandName**: `string`

The name of the command to register.

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
class MyCommands {
  @Command('sayHello')
  helloCommand() {
    console.log('Hello, world!');
  }
}
```

In the above example, the `helloCommand` method is registered as a command with the name `sayHello`.

## Throws

Error if the command registration fails.

## Remarks

The `RegisterCommand` function is expected to handle the command registration logic
and `reflect-metadata` is used for storing and retrieving metadata associated with the command.

## See

[RegisterCommand](https://docs.fivem.net/natives/?_0x5FA79B0F)

## Defined in

[shared/decorators/game/Command.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/game/Command.ts#L29)
