import 'reflect-metadata';

/**
 * A decorator that subscribes a method to a network event.
 *
 * The `@NetEvent` decorator is used to associate a method with a network event. When the specified network event occurs, the decorated method will be automatically called with the event's arguments.
 *
 * **Usage:**
 * - This decorator listens for a network event and invokes the decorated method whenever the event is triggered.
 *
 * **Example:**
 * ```ts
 * class NetworkHandler {
 *     @NetEvent('playerJoined')
 *     onPlayerJoined(playerId: number, playerName: string) {
 *         console.log(`Player joined: ${playerName} (ID: ${playerId})`);
 *     }
 * }
 * ```
 *
 * **Parameters:**
 * - `eventName`: The name of the network event to listen for. The method decorated with `@NetEvent` will be called whenever this event is fired.
 *
 * **Note:** Ensure that the event name matches the one used in the network event system, and the method should match the expected signature of the event arguments.
 *
 * @param eventName The name of the network event to subscribe to.
 * @returns A method decorator that subscribes the decorated method to the specified network event.
 */
export function NetEvent(eventName: string) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('netEvent', eventName, target, propertyKey);

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
