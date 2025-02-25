import 'reflect-metadata';

/**
 * A decorator that subscribes a method to a specified local event.
 *
 * The `@On` decorator is used to associate a method with a named event. When the specified event is triggered, the decorated method will be automatically called with the event's arguments.
 *
 * **Usage:**
 * - This decorator listens for an event and invokes the decorated method whenever the event is fired.
 *
 * @example
 * ```ts
 * class EventHandler {
 *     @On('userLoggedIn')
 *     onUserLoggedIn(userId: number, userName: string) {
 *         console.log(`User logged in: ${userName} (ID: ${userId})`);
 *     }
 * }
 * ```
 *
 * @param eventName The name of the event to subscribe to.
 * @returns A method decorator that subscribes the decorated method to the specified event.
 */
export function On(eventName: string) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
		Reflect.defineMetadata('onEvent', eventName, target, propertyKey);
		const originalMethod = descriptor.value;

		if (typeof originalMethod === 'function') {
			on(eventName, (...args: unknown[]) => (originalMethod as Function).apply(target, args));
			console.log(`Subscribed to event: ${eventName} for function: ${String(propertyKey)}`);
		} else {
			console.warn(`Method ${String(propertyKey)} is not a method`);
		}
	};
}
