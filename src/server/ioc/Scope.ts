/**
 * Enum representing the different scopes for Inversion of Control (IoC) in dependency injection.
 *
 * This enum defines the scopes in which services can be registered and managed by the DI container. It determines
 * how instances of services are created and shared within the application:
 *
 * - `Singleton`: A single instance of the service is created and shared across all requests. Every time the service is resolved, the same instance is returned.
 * - `Transient`: A new instance of the service is created each time it is resolved. Each request for the service results in a new instance being provided.
 *
 * These scopes help control the lifecycle and sharing of service instances within the DI container.
 *
 * **Example usage:**
 *
 * ```typescript
 * // Register a service with a singleton scope
 * container.registerSingleton(MyService);
 *
 * // Register a service with a transient scope
 * container.registerTransient(MyOtherService);
 * ```
 *
 * @enum {number}
 */
export enum Scope {
    /**
     * Represents a singleton scope where a single instance of the service is created and shared across all requests.
     *
     * When a service is registered with this scope, the DI container will return the same instance for every resolution.
     */
    Singleton = 0,

    /**
     * Represents a transient scope where a new instance of the service is created each time it is resolved.
     *
     * When a service is registered with this scope, a new instance is created and provided every time the service is resolved.
     */
    Transient = 1,
}
