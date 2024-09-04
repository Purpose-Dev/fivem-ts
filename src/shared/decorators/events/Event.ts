import 'reflect-metadata';

/**
 * A decorator that subscribes a method to a specified local event.
 *
 * The `@Event` decorator is used to associate a method with a named event. When the specified event is triggered, the decorated method will be automatically called with the event's arguments.
 *
 * **Usage:**
 * - This decorator listens for an event and invokes the decorated method whenever the event is fired.
 *
 * **Example:**
 * ```ts
 * class EventHandler {
 *     @Event('userLoggedIn')
 *     onUserLoggedIn(userId: number, userName: string) {
 *         console.log(`User logged in: ${userName} (ID: ${userId})`);
 *     }
 * }
 * ```
 *
 * **Parameters:**
 * - `eventName`: The name of the event to listen for. The method decorated with `@Event` will be called whenever this event is triggered.
 *
 * **Note:** Ensure that the event name matches the one used in the event system, and the method should match the expected signature of the event arguments.
 *
 * @param eventName The name of the event to subscribe to.
 * @returns A method decorator that subscribes the decorated method to the specified event.
 */
export function Event(eventName: string) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('event', eventName, target, propertyKey);

        const originalMethod = descriptor.value;

        if (typeof originalMethod === 'function') {
            on(eventName, (...args: unknown[]) => (originalMethod as Function).apply(target, args));
            console.log(`Subscribed to event: ${eventName} for function: ${String(propertyKey)}`);
        } else {
            console.warn(`Method ${String(propertyKey)} is not a function.`);
        }
    };
}
