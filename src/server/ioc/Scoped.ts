import { Scope } from './Scope';
import { container } from './DIContainer';

/**
 * Marks a class as injectable with a specific scope and registers it in the DI container.
 *
 * This decorator allows you to specify the scope for a class when registering it with the DI container.
 * Depending on the provided scope, the class will be registered either as a singleton or transient:
 *
 * - **Singleton**: A single instance of the class will be created and shared across all injections. The same instance
 *   will be returned each time the class is resolved.
 * - **Transient**: A new instance of the class will be created each time it is resolved. Every request for the class
 *   will result in a new instance.
 *
 * This is useful for controlling the lifecycle and sharing behavior of service instances in your application.
 *
 * **Example usage:**
 *
 * ```ts
 * @Scoped(Scope.Singleton)
 * class MyService {
 *     constructor(private dependency: AnotherService) {}
 * }
 *
 * @Scoped(Scope.Transient)
 * class MyOtherService {
 *     constructor(private dependency: AnotherService) {}
 * }
 *
 * // Register AnotherService
 * container.registerSingleton(AnotherService);
 *
 * // Resolve instances of MyService and MyOtherService
 * const myService = container.resolve(MyService); // Singleton instance
 * const myOtherService = container.resolve(MyOtherService); // New instance
 * ```
 *
 * @param scope - The scope to use for the class. Determines how instances of the class are managed and shared:
 *   - `Scope.Singleton`: Register the class as a singleton.
 *   - `Scope.Transient`: Register the class as transient.
 *
 * @template T - The type of the class being decorated. It must be a constructor function.
 *
 * @returns A decorator function that registers the class with the specified scope in the DI container.
 */
export function Scoped(scope: Scope) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        if (scope === Scope.Singleton) {
            container.registerSingleton(constructor);
        } else if (scope === Scope.Transient) {
            container.registerTransient(constructor);
        }
    };
}
