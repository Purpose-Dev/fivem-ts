import 'reflect-metadata';
import { container } from '../ioc';

/**
 * Decorator to mark a class as a controller.
 *
 * @param basePath - The base path for the controller's routes.
 */
export function Controller(basePath: string): ClassDecorator {
    return function (constructor: Function) {
        const routes = Reflect.getMetadata('routes', constructor) || [];
        routes.forEach((route: { method; path; handlerName }) => {
            const { method, path, handlerName } = route;
            container.registerRoute(
                method,
                `${basePath}${path}`,
                constructor.prototype[handlerName],
            );
        });
    };
}
