export function Conditional(conditionFunc: (...args: unknown[]) => boolean) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            if (conditionFunc(...args)) {
                return originalMethod.apply(this, args);
            } else {
                console.warn(`Condition not met for function: ${propertyKey}`);
            }
        };

        console.log(`Registered conditional execution for function: ${propertyKey}`);
    };
}
