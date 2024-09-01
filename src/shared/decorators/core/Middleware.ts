export function Middleware(preFn: Function, postFn: Function) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            if (preFn) preFn(...args);
            const result = originalMethod.apply(this, args);
            if (postFn) postFn(...args);
            return result;
        };

        console.log(`Registered middleware for function: ${propertyKey}`);
    };
}
