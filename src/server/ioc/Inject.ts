import 'reflect-metadata';
import { container } from './DIContainer';

/**
 * Injects a dependency into a class property or constructor parameter.
 *
 * This decorator is used to automatically inject dependencies into class properties or constructor parameters
 * by resolving them from the DI container. It works by leveraging TypeScript's metadata reflection to determine
 * the type of dependency needed and then retrieving it from the global DI container.
 *
 * **Note:** To use this decorator effectively, ensure that the `emitDecoratorMetadata` option is enabled in your
 * `tsconfig.json` configuration file.
 *
 * Example usage:
 *
 * ```ts
 * class MyService {
 *     constructor(@Inject private dependency: AnotherService) {}
 * }
 *
 * // Ensure that AnotherService is registered with the DI container
 * container.registerSingleton(AnotherService);
 *
 * // Resolve an instance of MyService with its dependencies injected
 * const myService = container.resolve(MyService);
 * ```
 *
 * @param target - The prototype of the class or the constructor function where the dependency is injected.
 * @param propertyKey - The name of the property or method parameter where the dependency is injected.
 * @param parameterIndex - The index of the constructor parameter to be injected with a dependency. This is relevant only for constructor parameters.
 *
 * @throws Error if the dependency cannot be resolved. This might occur if:
 * - The dependency is not registered in the DI container.
 * - The `emitDecoratorMetadata` option is not enabled in `tsconfig.json`.
 */
export function Inject(
    target: unknown,
    propertyKey: string | symbol,
    parameterIndex: number,
): void {
    const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey) || [];
    const dependency = paramTypes[parameterIndex];

    if (!dependency) {
        throw new Error(`Unable to resolve dependency at index ${parameterIndex} in ${target.constructor.name}. 
                        Ensure that you have enabled 'emitDecoratorMetadata' in tsconfig.json.`);
    }

    target[propertyKey] = container.resolve(dependency);
}
