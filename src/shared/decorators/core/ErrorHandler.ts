export function ErrorHandler(handleError: (error: unknown) => void) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            try {
                return originalMethod.apply(this, args);
            } catch (error) {
                handleError(error);
            }
        };

        console.log(`Registered error handler for function: ${propertyKey}`);
    };
}
