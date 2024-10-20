/**
 * A decorator that enforces a cooldown period between successive calls to a method.
 *
 * The `@Cooldown` decorator ensures that a method can only be executed once every specified
 * number of milliseconds. If the method is called again before the cooldown period has elapsed,
 * a warning is logged, and the method is not executed.
 *
 * @example
 * ```ts
 * class ExampleClass {
 *   @Cooldown(1000) // 1 second cooldown
 *   performAction() {
 *     console.log('Action performed');
 *   }
 * }
 *
 * const example = new ExampleClass();
 *
 * // The first call will execute the method
 * example.performAction(); // Outputs: Action performed
 *
 * // Subsequent calls within 1 second will be ignored
 * example.performAction(); // Outputs: Function performAction is on cooldown.
 *
 * // After 1 second, the method can be called again
 * setTimeout(() => example.performAction(), 1000); // Outputs: Action performed
 * ```
 *
 * @param {number} milliseconds The cooldown period (in milliseconds) that must elapse between method calls.
 *
 * @returns A function that can be used as a method decorator.
 */
export function Cooldown(milliseconds: number) {
    return function (_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        let lastCallTime = 0;

        descriptor.value = function (...args: unknown[]) {
            const now = Date.now();
            if (now - lastCallTime >= milliseconds) {
                lastCallTime = now;
                return originalMethod.apply(this, args);
            } else {
                console.warn(`Function ${propertyKey} is on cooldown.`);
            }
        };

        console.log(`Registered cooldown for function: ${propertyKey}`);
    };
}
