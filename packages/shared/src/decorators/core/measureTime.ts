/**
 * A decorator that measures the execution time of a method.
 *
 * The `@MeasureTime` decorator wraps a method, logging the time it takes to execute in milliseconds.
 * This can be useful for performance profiling and identifying slow methods.
 *
 * @example
 * ```ts
 * class ExampleClass {
 *   @MeasureTime
 *   processData(data: string): string {
 *     // Simulate some processing time
 *     for (let i = 0; i < 1e6; i++) {
 *
 *     }
 *     return `Processed ${data}`;
 *   }
 * }
 *
 * const example = new ExampleClass();
 * example.processData('test');
 * // Logs:
 * // [processData] Execution time: 123.456ms
 * ```
 *
 * @param _target The target object that owns the method.
 * @param propertyKey The name of the method being decorated.
 * @param descriptor The method descriptor, which provides access to the method itself.
 *
 * @returns A function that can be used as a method decorator.
 */
export function MeasureTime(_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
        const start: number = performance.now();
        const result = originalMethod.apply(this, args);
        const end: number = performance.now();
        const durationMs: number = end - start;

        const { duration, unit } =
            durationMs >= 1000
                ? { duration: durationMs / 1000, unit: 's' }
                : durationMs >= 1
                  ? { duration: durationMs, unit: 'ms' }
                  : { duration: durationMs * 1000, unit: 'μs' };

        console.debug(`[${propertyKey}] Execution time: ${duration.toFixed(3)} ${unit}`);
        return result;
    };

    console.log(`Registered measure time for function: ${propertyKey}`);
}
