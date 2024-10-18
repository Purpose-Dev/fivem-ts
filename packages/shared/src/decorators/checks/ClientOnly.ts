import 'reflect-metadata';

/**
 * A decorator that ensures a method is only executed on the client side.
 *
 * The `@ClientOnly` decorator modifies the behavior of the decorated method to prevent its execution
 * on the server side. If the method is called on the server side, a warning is logged and the method is replaced
 * with an empty function to prevent any unintended behavior.
 *
 * **Note:** This decorator intended to be used in environments where both server and client code can be executed,
 * such as in frameworks that support both server-side and client-side execution
 *
 * @example
 * ```ts
 * class Example {
 *     @ClientOnly
 *     public clientMethod() {
 *         console.log('This method should only run on the client side.');
 *     }
 * }
 *
 * const example = new Example();
 * example.clientMethod(); // Executes only if running on the client side.
 * ```
 *
 * @param target The prototype of the class.
 * @param propertyKey The name of the method being decorated.
 * @param descriptor The property descriptor for the method.
 *
 */
export function ClientOnly(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    if (IsDuplicityVersion()) {
        console.warn(`Client-side function '${propertyKey}' attempted to run on server side`);
        descriptor.value = () => {};
    }

    Reflect.defineMetadata('clientOnly', true, descriptor);
    console.log(`Registered client-side function: '${propertyKey}'`);
}
