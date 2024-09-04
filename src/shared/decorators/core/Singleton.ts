import 'reflect-metadata';

/**
 * A decorator that ensures a class follows the Singleton pattern.
 *
 * The `@Singleton` decorator enforces that a class can have only one instance. When a class is decorated with
 * `@Singleton`, any subsequent instantiations will return the same instance rather than creating a new one.
 * This is useful for scenarios where you want to ensure a single point of control or a global state.
 *
 * @typeParam T  constructor type of the class being decorated.
 *
 * @param constructor The class constructor to decorate.
 *
 * @returns A new class that extends the original class, ensuring only one instance is created.
 *
 * @example
 * ```ts
 * @Singleton
 * class Configuration {
 *     public settings: any;
 *
 *     constructor() {
 *         this.settings = { theme: 'dark' };
 *     }
 * }
 *
 * const instance1 = new Configuration();
 * const instance2 = new Configuration();
 *
 * console.log(instance1 === instance2); // true
 * ```
 */
export function Singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        public static instance: T;

        constructor(...args: any[]) {
            if (constructor.prototype.constructor.instance) {
                return constructor.prototype.constructor.instance;
            }

            super(...args);
            constructor.prototype.constructor.instance = this;
            Reflect.defineMetadata('singletonInstance', this, constructor);
        }
    };
}
