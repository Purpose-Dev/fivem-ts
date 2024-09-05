import 'reflect-metadata';

/**
 * Decorator to define a route in a controller.
 *
 * @param method - The HTTP method (GET, POST, etc.).
 * @param path - The route path.
 */
export function Route(method: string, path: string): MethodDecorator {
    return function (target: unknown, propertyKey: string | symbol) {
        const routes = Reflect.getMetadata('routes', target.constructor) || [];
        routes.push({ method, path, handlerName: propertyKey });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
}
