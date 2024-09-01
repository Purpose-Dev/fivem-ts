export function MeasureTime(_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`[${propertyKey}] Execution time: ${end - start}ms`);
        return result;
    };

    console.log(`Registered measure time for function: ${propertyKey}`);
}
