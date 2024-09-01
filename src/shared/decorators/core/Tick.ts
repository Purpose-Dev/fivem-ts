export function Tick(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    setTick(() => {
        originalMethod();
    });

    console.log(`Registered tick for function: ${propertyKey}`);
}
