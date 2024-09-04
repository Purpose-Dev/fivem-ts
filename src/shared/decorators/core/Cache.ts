/**
 * A decorator that caches the result of a method for a specified duration.
 *
 * The `@Cache` decorator can be applied to methods to store their return values for a given amount
 * of time. If the method is called again within the cache duration, the cached result is returned
 * instead of re-executing the method. This can improve performance by reducing the need for repeated
 * expensive computations or operations.
 *
 * @param duration The duration (in milliseconds) for which the result should be cached.
 *
 * @returns A function that can be used as a method decorator.
 *
 * @example
 *
 * ```ts
 * class ExampleClass {
 *   @Cache(5000) // Cache the result for 5 seconds
 *   computeExpensiveOperation() {
 *     console.log('Computing...');
 *     return Math.random(); // Simulate an expensive operation
 *   }
 * }
 *
 * const example = new ExampleClass();
 *
 * // First call will compute and cache the result
 * console.log(example.computeExpensiveOperation()); // Outputs: Computing... followed by a random number
 *
 * // Subsequent calls within 5 seconds will return the cached result
 * console.log(example.computeExpensiveOperation()); // Outputs: the cached random number
 *
 * // After 5 seconds, a new result will be computed and cached again
 * setTimeout(() => console.log(example.computeExpensiveOperation()), 6000); // Outputs: Computing... followed by a new random number
 * ```
 */
export function Cache(duration: number) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const cacheKey = Symbol.for(propertyKey);
        const cacheExpiryKey = Symbol.for(`${propertyKey}_expiry`);

        descriptor.value = function (...args: unknown[]) {
            const now = Date.now();
            if (this[cacheExpiryKey] && this[cacheExpiryKey] > now) {
                console.log(`Returning cached result for ${propertyKey}`);
                return this[cacheKey];
            }
            const result = originalMethod.apply(this, args);
            this[cacheKey] = result;
            this[cacheExpiryKey] = now + duration;
            return result;
        };

        console.log(`Registered cache for function: ${propertyKey} with duration: ${duration}ms`);
    };
}
