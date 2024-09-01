export function Command(commandName: string) {
    return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('command', { name: commandName }, target, propertyKey);

        RegisterCommand(commandName, descriptor.value, false);
        console.log(`Registered command: ${commandName}`);
    };
}
