import 'reflect-metadata';
import { MethodDecorator } from '../../types';

export function NetEvent(eventName: string): MethodDecorator<object> {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('netEvent', eventName, target, propertyKey);

        const originalMethod = descriptor.value;

        if (typeof originalMethod === 'function') {
            onNet(eventName, (...args: unknown[]) =>
                (originalMethod as Function).apply(target, args),
            );
            console.log(`Subscribed to event: ${eventName} for function: ${String(propertyKey)}`);
        } else {
            console.warn(`Method ${String(propertyKey)} is not a function.`);
        }
    };
}
