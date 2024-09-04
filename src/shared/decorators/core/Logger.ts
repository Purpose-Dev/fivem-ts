/**
 * A decorator that logs method calls and their results.
 *
 * The `@Logger` decorator wraps a method, logging its invocation with the provided log level,
 * including the arguments passed and the result returned. This can be useful for debugging and
 * monitoring method execution in your application.
 *
 * @param logLevel The level of logging. Possible values are `'info'`, `'warn'`, `'error'`, or `'debug'`.
 * The default is `'info'`.
 *
 * @returns A function that can be used as a method decorator.
 *
 * @example
 * ```ts
 * class ExampleClass {
 *   @Logger('debug')
 *   someMethod(arg1: string, arg2: number): string {
 *     return `Processed ${arg1} and ${arg2}`;
 *   }
 * }
 *
 * const example = new ExampleClass();
 * example.someMethod('test', 123);
 * // Logs:
 * // [someMethod] Called with args: ['test', 123]
 * // [someMethod] Returned: 'Processed test and 123'
 * ```
 */
export function Logger(logLevel: 'info' | 'warn' | 'error' | 'debug' = 'info') {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            console[logLevel](`[${propertyKey}] Called with args:`, args);
            const result = originalMethod.apply(this, args);
            console[logLevel](`[${propertyKey}] Returned:`, result);
            return result;
        };

        console.log(`Registered logger for function: ${propertyKey}`);
    };
}
