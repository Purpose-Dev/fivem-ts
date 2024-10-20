import 'reflect-metadata';

/**
 * A decorator to register a method as a command with a specified name.
 *
 * This decorator uses the `RegisterCommand` function to register the method as a command handler
 * and stores metadata about the command name using `reflect-metadata`.
 *
 * @example
 * ```ts
 * class MyCommands {
 *   @Command('sayHello')
 *   helloCommand() {
 *     console.log('Hello, world!');
 *   }
 * }
 * ```
 *
 * In the above example, the `helloCommand` method is registered as a command with the name `sayHello`.
 *
 * @param commandName - The name of the command to register.
 *
 * @throws Error if the command registration fails.
 *
 * @remarks
 * The `RegisterCommand` function is expected to handle the command registration logic
 * and `reflect-metadata` is used for storing and retrieving metadata associated with the command.
 *
 * @see [RegisterCommand](https://docs.fivem.net/natives/?_0x5FA79B0F)
 */
export function Command(commandName: string) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('command', { name: commandName }, target, propertyKey);

        RegisterCommand(commandName, descriptor.value, false);
        console.log(`Registered command: ${commandName}`);
    };
}
