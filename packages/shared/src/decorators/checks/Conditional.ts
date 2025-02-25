/**
 * A decorator that conditionally executes a method based on a provided condition function.
 *
 * The `@Conditional` decorator wraps the decorated method and only executes it if the provided condition function
 * returns `true` for the given arguments. If the condition is not met, the method is not executed and a warning
 * message is logged to the console.
 *
 * @example
 * ```ts
 * class Example {
 *     @Conditional((active) => active === true)
 *     public performAction(active: boolean) {
 *         console.log(`Action performed! with active value is ${active}`);
 *     }
 * }
 *
 * const example = new Example();
 * example.performAction(false); // Condition not met for function: performAction
 * example.performAction(true); // Action performed! with active value is true
 * ```
 *
 * @param conditionFunc A function that takes the method's arguments and returns a boolean indicating whether the method should be executed.
 *
 */
export function Conditional(conditionFunc: (...args: unknown[]) => boolean) {
	return function (_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;

		descriptor.value = function (...args: unknown[]) {
			if (conditionFunc(...args)) {
				return originalMethod.apply(this, args);
			} else {
				console.warn(`Condition not met for function: ${propertyKey}`);
			}
		};

		console.log(`Registered conditional execution for function: ${propertyKey}`);
	};
}
