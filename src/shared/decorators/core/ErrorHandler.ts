/**
 * A decorator that wraps a method with error handling logic.
 *
 * The `@ErrorHandler` decorator catches any errors thrown by the decorated method and
 * passes them to the provided error handler function. This allows for centralized error
 * handling and custom responses to errors.
 *
 * @param handleError A function to handle errors. This function is called with the error
 * that was thrown by the decorated method.
 *
 * @returns A function that can be used as a method decorator.
 *
 * @example
 * ```ts
 *
 * function logError(error: unknown): void {
 *   console.error('An error occurred:', error);
 * }
 *
 * class ExampleClass {
 *   @ErrorHandler(logError)
 *   riskyMethod() {
 *     throw new Error('Something went wrong');
 *   }
 * }
 *
 * const example = new ExampleClass();
 * example.riskyMethod(); // Logs: An error occurred: Error: Something went wrong
 * ```
 */
export function ErrorHandler(handleError: (error: unknown) => void) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            try {
                return originalMethod.apply(this, args);
            } catch (error) {
                handleError(error);
            }
        };

        console.log(`Registered error handler for function: ${propertyKey}`);
    };
}
