import 'reflect-metadata';
import { MethodDecorator } from '../../types';

export function Event(eventName: string): MethodDecorator<object> {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('event', eventName, target, propertyKey);

        const originalMethod = descriptor.value;

        if (typeof originalMethod === 'function') {
            on(eventName, (...args: unknown[]) => (originalMethod as Function).apply(target, args));
            console.log(`Subscribed to event: ${eventName} for function: ${String(propertyKey)}`);
        } else {
            console.warn(`Method ${String(propertyKey)} is not a function.`);
        }
    };
}
