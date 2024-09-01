import 'reflect-metadata';

/**
 * A simple Dependency Injection (DI) container for managing dependency injection.
 *
 * This class allows for the registration and resolution of singletons, transients, and factory-based dependencies.
 * It uses TypeScript decorators and metadata reflection to handle dependency injection.
 *
 * Example usage:
 *
 * @example
 * ```ts
 * // Define a service
 * class MyService {
 *     constructor(private dependency: AnotherService) {}
 * }
 *
 * // Register the service
 * container.registerSingleton(MyService);
 *
 * // Resolve the service
 * const myService = container.resolve(MyService);
 * ```
 */
export class DIContainer {
    private singletons: Map<Function, any> = new Map<Function, any>();
    private transients: Map<Function, any> = new Map<Function, any>();

    /**
     * Registers a class as a singleton in the container.
     *
     * A singleton instance will be created once and reused for all future requests.
     *
     * @param constructor - The constructor function of the class to be registered.
     *
     * @example
     * ```ts
     * container.registerSingleton(MyService);
     * ```
     */
    public registerSingleton<T>(constructor: new (...args: any[]) => T): void {
        if (!this.singletons.has(constructor)) {
            const instance: T = this.resolve<T>(constructor);
            this.singletons.set(constructor, instance);
        }
    }

    /**
     * Registers a class as a transient in the container.
     *
     * A transient instance will be created every time it is resolved.
     *
     * @param constructor - The constructor function of the class to be registered.
     *
     * @example
     * ```ts
     * container.registerTransient(MyTransientService);
     * ```
     */
    public registerTransient<T>(constructor: new (...args: any[]) => T): void {
        this.transients.set(constructor, constructor);
    }

    /**
     * Registers a factory function to create an instance of the class.
     *
     * The factory function will be called to produce the instance.
     *
     * @param constructor - The constructor function of the class to be registered.
     * @param factoryFn - The factory function to create an instance of the class.
     *
     * @example
     * ```ts
     * container.registerFactory(MyService, () => new MyService(new Dependency()));
     * ```
     */
    public registerFactory<T>(constructor: new (...args: any[]) => T, factoryFn: () => T): void {
        this.singletons.set(constructor, factoryFn());
    }

    /**
     * Resolves an instance of the specified class.
     *
     * This method creates an instance of the class and injects its dependencies.
     *
     * @param constructor - The constructor function of the class to be resolved.
     *
     * @returns An instance of the specified class.
     *
     * @example
     * ```ts
     * const myService = container.resolve(MyService);
     * ```
     */
    public resolve<T>(constructor: new (...args: any[]) => T): T {
        const dependencies: any = Reflect.getMetadata('design:paramtypes', constructor) || [];
        const injections: any = dependencies.map((dependency: any): unknown =>
            this.resolveDependency(dependency),
        );
        return new constructor(...injections);
    }

    /**
     * Resolves a dependency, either from singletons, transients, or by creating a new instance.
     *
     * @param constructor - The constructor function of the dependency to be resolved.
     *
     * @returns An instance of the dependency.
     *
     * @throws Error if no provider is found for the dependency.
     */
    private resolveDependency<T>(constructor: new (...args: any[]) => T): T {
        if (this.singletons.has(constructor)) {
            return this.singletons.get(constructor);
        }
        if (this.transients.has(constructor)) {
            return this.resolve<T>(constructor);
        }

        throw new Error(
            `No provider found for ${constructor.name}. Make sure its marked with @Injectable or @Scoped`,
        );
    }
}

/**
 * The default instance of the DIContainer that can be used directly.
 *
 * This instance is used to register and resolve dependencies globally.
 *
 * @example
 * ```ts
 * container.registerSingleton(MyService);
 * const myService = container.resolve(MyService);
 * ```
 */
export const container = new DIContainer();
