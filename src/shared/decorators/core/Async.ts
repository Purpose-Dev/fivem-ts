export function Async(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    if (typeof originalMethod !== 'function') {
        throw new Error(
            `@Async decorator can only be applied to methods, not ${typeof originalMethod}`,
        );
    }

    descriptor.value = async function (...args: unknown[]) {
        try {
            console.log(`Async execution started for method: ${String(propertyKey)}`);
            await originalMethod.apply(this, args);
        } catch (error) {
            console.error(
                `Async execution failed for method: ${String(propertyKey)} with error: ${error}`,
            );
            throw error;
        }
    };

    console.log(`Registered async method: ${String(propertyKey)}`);
}
