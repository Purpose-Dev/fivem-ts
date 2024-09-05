import { container } from './DIContainer';

/**
 * Resolves an instance of the specified class from the DI container.
 *
 * This function retrieves an instance of a class by resolving it from the DI container. It uses the container's
 * `resolve` method to handle dependency injection and create an instance with its dependencies automatically injected.
 *
 * **Note:** The class must be registered with the DI container (as a singleton, transient, or factory) for this
 * function to successfully resolve an instance. If the class is not registered, an error will be thrown.
 *
 * **Example usage:**
 *
 * ```ts
 * @Injectable()
 * class MyService {
 *     constructor(private dependency: AnotherService) {}
 * }
 *
 * // Register AnotherService
 * container.registerSingleton(AnotherService);
 *
 * // Resolve MyService instance with dependencies injected
 * const myService = resolve(MyService);
 * ```
 *
 * @template T - The type of the class to be resolved. It must be a constructor function.
 *
 * @param constructor - The constructor function of the class to be resolved.
 *
 * @returns An instance of the specified class with its dependencies injected.
 *
 * @throws Error if the class is not registered in the DI container or cannot be resolved.
 */
export function resolve<T>(constructor: new (...args: unknown[]) => T): T {
    return container.resolve<T>(constructor);
}
