/**
 * A decorator that adds middleware functions before and after a method execution.
 *
 * The `@Middleware` decorator allows you to specify functions to run before (`preFn`) and after (`postFn`) the
 * execution of a method. This can be useful for adding common logic such as logging, validation, or transformation
 * around method calls.
 *
 * @example
 * ```ts
 * function logStart(...args: any[]) {
 *     console.log('Method started with args:', args);
 * }
 *
 * function logEnd(result: unknown) {
 *     console.log(`Method ended with return value: ${result}`);
 * }
 *
 * class ExampleClass {
 *   @Middleware(logStart, logEnd)
 *   processData(data: string): string {
 *     return `Processed ${data}`;
 *   }
 * }
 *
 * const example = new ExampleClass();
 * example.processData('test');
 * // Logs:
 * // Method started with args: ['test']
 * // Method ended with return value: test
 * ```
 *
 * @param preFn The function to execute before the method. It receives the same arguments as the method.
 * @param postFn The function to execute after the method. It receives the same arguments as the method.
 *
 * @returns A function that can be used as a method decorator.
 *
 */
export function Middleware(preFn: Function, postFn: Function) {
    return function (_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            if (preFn) preFn(...args);
            const result = originalMethod.apply(this, args);

            if (postFn) {
                if (typeof result === 'undefined') {
                    postFn('Result is undefined because return type is a void');
                } else {
                    postFn(...args);
                }
            }

            return result;
        };

        console.log(`Registered middleware for function: ${propertyKey}`);
    };
}
