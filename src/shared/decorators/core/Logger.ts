export function Logger(logLevel: 'info' | 'warn' | 'error' | 'debug' = 'info') {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            console[logLevel](`[${propertyKey}] Called with args:`, args);
            const result = originalMethod.apply(this, args);
            console[logLevel](`[${propertyKey}] Returned:`, result);
            return result;
        };

        console.log(`Registered logger for function: ${propertyKey}`);
    };
}
