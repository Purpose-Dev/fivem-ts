export function Cache(duration: number) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const cacheKey = Symbol.for(propertyKey);
        const cacheExpiryKey = Symbol.for(`${propertyKey}_expiry`);

        descriptor.value = function (...args: unknown[]) {
            const now = Date.now();
            if (this[cacheExpiryKey] && this[cacheExpiryKey] > now) {
                console.log(`Returning cached result for ${propertyKey}`);
                return this[cacheKey];
            }
            const result = originalMethod.apply(this, args);
            this[cacheKey] = result;
            this[cacheExpiryKey] = now + duration;
            return result;
        };

        console.log(`Registered cache for function: ${propertyKey} with duration: ${duration}ms`);
    };
}
