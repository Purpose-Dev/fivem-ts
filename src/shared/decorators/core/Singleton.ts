import 'reflect-metadata';

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
