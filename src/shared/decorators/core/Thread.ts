import 'reflect-metadata';

export function Thread(delay: number) {
    return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        setInterval(async () => {
            originalMethod.call(target);
        }, delay);

        Reflect.defineMetadata('threadOnly', delay, target, propertyKey);
        console.log(`Registered thread function: ${propertyKey} with delay ${delay}ms`);
    };
}
