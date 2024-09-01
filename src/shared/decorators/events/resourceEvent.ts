export function ResourceEvent(resourceEvent: 'start' | 'stop') {
    return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata('resourceEvent', resourceEvent, target, propertyKey);

        if (resourceEvent === 'start') {
            on('onResourceStart', (resourceName: string) => {
                if (GetCurrentResourceName() === resourceName) {
                    descriptor.value();
                }
            });
            console.log(`Registered on script start: ${propertyKey}`);
        } else if (resourceEvent === 'stop') {
            on('onResourceStop', (resourceName: string) => {
                if (GetCurrentResourceName() === resourceName) {
                    descriptor.value();
                }
            });
            console.log(`Registered on script stop: ${propertyKey}`);
        }
    };
}
