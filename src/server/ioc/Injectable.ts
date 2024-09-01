import { container } from './DIContainer';

/**
 * Marks a class as injectable and registers it as a singleton in the DI container.
 *
 * This decorator is used to indicate that a class should be managed by the DI container and registered
 * as a singleton. When a class is decorated with `@Injectable`, an instance of that class will be created
 * once and reused for all future requests from the DI container.
 *
 * This is useful for marking classes that should be automatically resolved and injected into other classes
 * or components managed by the DI container.
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
 * // Resolve MyService; dependency will be automatically injected
 * const myService = container.resolve(MyService);
 * ```
 *
 * @template T - The type of the class being decorated. It must be a constructor function.
 *
 * @returns A decorator function that registers the class as a singleton in the DI container.
 */
export function Injectable() {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        container.registerSingleton(constructor);
    };
}
