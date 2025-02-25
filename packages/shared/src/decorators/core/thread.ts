import 'reflect-metadata';

/**
 * A decorator that executes a method periodically at a specified interval.
 *
 * The `@Thread` decorator schedules the decorated method to be executed repeatedly after a specified delay.
 * This is useful for scenarios where you need a method to be run on a regular interval, such as updating
 * status, checking conditions, or performing background tasks.
 *
 * @example
 * ```ts
 * class StatusUpdater {
 *     @Thread(5000) // Runs every 5 seconds
 *     public updateStatus() {
 *         console.log('Updating status...');
 *     }
 * }
 *
 * const updater = new StatusUpdater();
 * // The `updateStatus` method will now be called every 5 seconds.
 * ```
 *
 * @param delay The interval in milliseconds between successive executions of the method.
 *
 * @returns A decorator function that modifies the behavior of the method to run periodically.
 */
export function Thread(delay: number) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;

		setInterval(async () => {
			originalMethod.call(target);
		}, delay);

		Reflect.defineMetadata('threadOnly', delay, target, propertyKey);
		console.log(`Registered thread function: ${propertyKey} with delay ${delay}ms`);
	};
}
