export function Cooldown(milliseconds: number) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        let lastCallTime = 0;

        descriptor.value = function (...args: unknown[]) {
            const now = Date.now();
            if (now - lastCallTime >= milliseconds) {
                lastCallTime = now;
                return originalMethod.apply(this, args);
            } else {
                console.warn(`Function ${propertyKey} is on cooldown.`);
            }
        };

        console.log(`Registered cooldown for function: ${propertyKey}`);
    };
}
