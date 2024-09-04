/**
 * A decorator that transforms a method into an asynchronous method.
 *
 * The `@Async` decorator can be applied to any method within a class, converting it into an
 * asynchronous function. When the decorated method is called, it will execute asynchronously,
 * allowing other code to run concurrently.
 *
 * If the method is not already asynchronous, this decorator will wrap it in a `Promise` and
 * handle any errors that occur during its execution, logging them to the console.
 *
 * @example
 *
 * ```ts
 * class ExampleClass {
 *   @Async
 *   async myMethod() {
 *     // Your async code here
 *   }
 * }
 * ```
 *
 * @param _target The target object that owns the method.
 * @param propertyKey The name of the method being decorated.
 * @param descriptor The method descriptor, which provides access to the method itself.
 *
 * @throws Will throw an error if the `@Async` decorator is applied to something other than a method.
 */
export function Async(_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    if (typeof originalMethod !== 'function') {
        throw new Error(
            `@Async decorator can only be applied to methods, not ${typeof originalMethod}`,
        );
    }

    descriptor.value = async function (...args: unknown[]) {
        try {
            console.log(`Async execution started for method: ${String(propertyKey)}`);
            await originalMethod.apply(this, args);
        } catch (error) {
            console.error(
                `Async execution failed for method: ${String(propertyKey)} with error: ${error}`,
            );
            throw error;
        }
    };

    console.log(`Registered async method: ${String(propertyKey)}`);
}
