import { container } from './DIContainer';

/**
 * Factory decorator for methods that create instances and automatically register them as singletons in the DI container.
 *
 * This decorator is used on methods that create instances of a class. When the method is called, the created instance is registered
 * as a singleton in the DI container. This means that the same instance will be returned whenever the class is resolved from the container.
 *
 * Example usage:
 *
 * ```ts
 * class MyService {
 *     // Decorated factory method
 *     @Factory
 *     public static createInstance(): MyService {
 *         return new MyService();
 *     }
 * }
 *
 * // Resolve the singleton instance
 * const myService = container.resolve(MyService);
 * ```
 *
 * @param _target - The prototype of the class on which the method is defined. This parameter is not used.
 * @param _propertyKey - The name of the method being decorated. This parameter is not used.
 * @param descriptor - The property descriptor of the method being decorated.
 *
 * @returns The modified property descriptor with the factory logic applied.
 */
export function Factory(_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
        const instance = originalMethod.apply(this, args);
        container.registerFactory(instance.constructor, () => instance);
        return instance;
    };

    return descriptor;
}
