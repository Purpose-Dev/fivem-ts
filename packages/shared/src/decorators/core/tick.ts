/**
 * A decorator that schedules a method to be executed every game tick.
 *
 * The `@Tick` decorator registers the decorated method to be executed on each game tick. This is particularly useful
 * where a method needs to be run continuously at every update cycle.
 *
 * @example
 * ```ts
 * class GameLogic {
 *     @Tick
 *     public update() {
 *         console.log('Updating game state...');
 *     }
 * }
 *
 * const game = new GameLogic();
 * // The `update` method will now be called on every game tick.
 * ```
 *
 * @param _target The prototype of the class.
 * @param propertyKey The name of the method being decorated.
 * @param descriptor The property descriptor for the method.
 */
export function Tick(_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	setTick(() => {
		originalMethod();
	});

	console.log(`Registered tick for function: ${propertyKey}`);
}
