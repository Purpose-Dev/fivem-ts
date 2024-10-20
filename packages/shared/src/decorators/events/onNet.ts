import 'reflect-metadata';

/**
 * A decorator that subscribes a method to a network event.
 *
 * The `@OnNet` decorator is used to associate a method with a network event. When the specified network event occurs, the decorated method will be automatically called with the event's arguments.
 *
 * **Usage:**
 * - This decorator listens for a network event and invokes the decorated method whenever the event is triggered.
 *
 * @example
 * ```ts
 * class NetworkHandler {
 *     @OnNet('playerJoined')
 *     onPlayerJoined(playerId: number, playerName: string) {
 *         console.log(`Player joined: ${playerName} (ID: ${playerId})`);
 *     }
 * }
 * ```
 *
 * @param eventName The name of the network event to subscribe to.
 * @returns A method decorator that subscribes the decorated method to the specified network event.
 */
export function OnNet(eventName: string) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('onNetEvent', eventName, target, propertyKey);

        const originalMethod = descriptor.value;

        if (typeof originalMethod === 'function') {
            onNet(eventName, (...args: unknown[]) =>
                (originalMethod as Function).apply(target, args),
            );
            console.log(`Subscribed to event: ${eventName} for function: ${String(propertyKey)}`);
        } else {
            console.warn(`Method ${String(propertyKey)} is not a function.`);
        }
    };
}
