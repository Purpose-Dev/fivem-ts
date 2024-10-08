import 'reflect-metadata';
import { HttpRequest, HttpResponse } from '../web';

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
    private instances: Map<Function, unknown> = new Map();
    private scopedInstances: Map<string, Map<Function, unknown>> = new Map();
    private routes: Map<string, Function> = new Map();

    /**
     * Clears the request-scoped instances.
     *
     * This should be called at the end of a request to clean up the container.
     *
     * @example
     * ```ts
     * container.clearRequestScope();
     * ```
     */
    public clearRequestScope(): void {
        this.clearScope('request');
    }

    /**
     * Clears the session-scoped instances for a given session ID.
     *
     * This should be called at the end of a session to clean up the container.
     *
     * @param sessionId - The ID of the session to clear.
     *
     * @example
     * ```ts
     * container.clearSessionScope('sessionId123');
     * ```
     */
    public clearSessionScope(sessionId: string): void {
        this.clearScope('session', sessionId);
    }

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
    public registerSingleton<T>(constructor: new (...args: unknown[]) => T): void {
        this.instances.set(constructor, this.createInstance(constructor));
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
    public registerTransient<T>(constructor: new (...args: unknown[]) => T): void {
        this.instances.set(constructor, 'transient');
    }

    /**
     * Registers a class as request-scoped in the container.
     *
     * A request-scoped instance will be created and shared throughout a single request, and then discarded.
     *
     * @param constructor - The constructor function of the class to be registered.
     *
     * @example
     * ```ts
     * container.registerRequestScoped(MyRequestService);
     * ```
     */
    public registerRequestScoped<T>(constructor: new (...args: unknown[]) => T): void {
        this.registerScoped(constructor, 'request');
    }

    /**
     * Registers a class as session-scoped in the container.
     *
     * A session-scoped instance will be created and shared throughout a user's session, and then discarded when the session ends.
     *
     * @param constructor - The constructor function of the class to be registered.
     *
     * @example
     * ```ts
     * container.registerSessionScoped(MySessionService);
     * ```
     */
    public registerSessionScoped<T>(constructor: new (...args: unknown[]) => T): void {
        this.registerScoped(constructor, 'session');
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
    public registerFactory<T>(
        constructor: new (...args: unknown[]) => T,
        factoryFn: () => T,
    ): void {
        this.instances.set(constructor, factoryFn);
    }

    /**
     * Registers a route in the container. This route will handle HTTP requests that match the method and path provided.
     *
     * @param method - The HTTP method (GET, POST, etc.).
     * @param path - The path of the route.
     * @param handler - The function that handles the route.
     */
    public registerRoute(method: string, path: string, handler: Function): void {
        const routeKey = `${method.toUpperCase()}:${path}`;
        this.routes.set(routeKey, handler);
    }

    /**
     * Handles an HTTP request by matching it against the registered routes.
     *
     * @param request - The HTTP request object.
     * @param response - The HTTP response object.
     */
    public handleHttpRequest(request: HttpRequest, response: HttpResponse): void {
        const routeKey = `${request.method.toUpperCase()}:${request.path}`;
        const handler = this.routes.get(routeKey);

        if (handler) {
            request.setDataHandler(data => {
                try {
                    const parsedData = JSON.parse(data);
                    handler({ ...request, body: parsedData }, response);
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (_error) {
                    response.writeHead(400, { 'Content-Type': 'application/json' });
                    response.send(JSON.stringify({ error: 'Invalid JSON' }));
                }
            });

            request.setCancelHandler(() => {
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.send(JSON.stringify({ error: 'Request cancelled' }));
            });
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.send(JSON.stringify({ error: 'Not found' }));
        }
    }

    /**
     * Resolves an instance of the specified class.
     *
     * This method creates an instance of the class and injects its dependencies.
     * If a request or session context is provided, it will resolve accordingly.
     *
     * @param constructor - The constructor function of the class to be resolved.
     * @param request - An optional request context for request-scoped dependencies.
     * @param sessionId - An optional session ID for session-scoped dependencies.
     *
     * @returns An instance of the specified class.
     *
     * @example
     * ```ts
     * const myService = container.resolve(MyService);
     * ```
     */
    public resolve<T>(
        constructor: new (...args: unknown[]) => T,
        request?: unknown,
        sessionId?: string,
    ): T {
        if (this.instances.has(constructor)) {
            const instance: unknown = this.instances.get(constructor);

            if (typeof instance === 'function') return instance();

            if (instance === 'transient') return this.createInstance(constructor);

            return <T>instance;
        }

        if (request && this.scopedInstances.get('request')?.has(constructor)) {
            return this.getScopedInstance(constructor, 'request');
        }

        if (sessionId && this.scopedInstances.get(sessionId)?.has(constructor)) {
            return this.getScopedInstance(constructor, sessionId);
        }

        if (Reflect.hasMetadata('controller:basePath', constructor)) {
            return this.createInstance(constructor);
        }

        throw new Error(`No provider found for ${constructor.name}. Make sure it's registered.`);
    }

    /**
     * Creates an instance of the specified class and injects its dependencies.
     *
     * This method is used internally to handle the creation of instances for singletons, transients, and scoped instances.
     *
     * @param constructor - The constructor function of the class to be instantiated.
     *
     * @returns A new instance of the specified class.
     */
    private createInstance<T>(constructor: new (...args: unknown[]) => T): T {
        const dependencies = Reflect.getMetadata('design:paramtypes', constructor) || [];
        const injections = dependencies.map((dep: new (...args: unknown[]) => unknown) =>
            this.resolve(dep),
        );
        return new constructor(...injections);
    }

    /**
     * Registers a class as a scoped dependency in the container.
     *
     * This method is used internally to register classes for request-scoped or session-scoped lifetimes.
     *
     * @param constructor - The constructor function of the class to be registered.
     * @param scope - The scope in which the class should be registered ('request' or 'session').
     */
    private registerScoped<T>(constructor: new (...args: unknown[]) => T, scope: string): void {
        if (!this.scopedInstances.has(scope)) {
            this.scopedInstances.set(scope, new Map());
        }
        this.scopedInstances.get(scope)?.set(constructor, 'scoped');
    }

    /**
     * Resolves a scoped instance of the specified class.
     *
     * This method is used internally to resolve instances that are either request-scoped or session-scoped.
     *
     * @param constructor - The constructor function of the class to be resolved.
     * @param scope - The scope in which the class should be resolved ('request' or session ID).
     *
     * @returns An instance of the specified class within the given scope.
     */
    private getScopedInstance<T>(constructor: new (...args: unknown[]) => T, scope: string): T {
        const scopeMap = this.scopedInstances.get(scope);

        if (!scopeMap) {
            throw new Error(`DIContainer: No scope found for scope: ${scope}`);
        }

        if (scopeMap.get(constructor) === 'scoped') {
            const instance: T = this.createInstance(constructor);
            scopeMap.set(constructor, instance);
            return instance;
        }

        return <T>scopeMap.get(constructor);
    }

    /**
     * Clears the instances associated with a given scope.
     *
     * This method is used internally to clear instances for request or session scopes.
     *
     * @param scope - The scope to be cleared ('request' or session ID).
     * @param id - An optional session ID if clearing a specific session scope.
     */
    private clearScope(scope: 'request' | 'session', id?: string): void {
        if (id) {
            this.scopedInstances.delete(id);
        } else {
            this.scopedInstances.get(scope)?.clear();
        }
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
