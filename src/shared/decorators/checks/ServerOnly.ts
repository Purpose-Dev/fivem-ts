import 'reflect-metadata';
import { isDuplicityVersion } from '../../utils';

/**
 * A decorator that ensures a method is only executed on the server side.
 *
 * The `@ServerOnly` decorator modifies the behavior of the decorated method to prevent its execution
 * on the client side. If the method is called on the client side, a warning is logged and the method is replaced
 * with an empty function to prevent any unintended behavior.
 *
 * **Note:** This decorator intended to be used in environments where both server and client code can be executed,
 * such as in frameworks that support both server-side and client-side execution
 *
 * @param target The prototype of the class.
 * @param propertyKey The name of the method being decorated.
 * @param descriptor The property descriptor for the method.
 *
 * @example
 * ```ts
 * class Example {
 *     @ServerOnly
 *     public serverMethod() {
 *         console.log('This method should only run on the server side.');
 *     }
 * }
 *
 * const example = new Example();
 * example.serverMethod(); // Executes only if running on the server side.
 * ```
 */
export function ServerOnly(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    if (!isDuplicityVersion()) {
        console.warn(`Client-side function "${propertyKey}" attempted to run on the client side.`);
        descriptor.value = () => {};
    }

    Reflect.defineMetadata('serverOnly', true, target, propertyKey);
    console.log(`Registered server-side function: ${propertyKey}`);
}
