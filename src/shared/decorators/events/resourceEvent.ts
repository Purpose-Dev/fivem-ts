import 'reflect-metadata';

/**
 * A decorator that registers a method to be called when a specific resource event occurs.
 *
 * The `@ResourceEvent` decorator is used to execute a method in response to resource start or stop events.
 * The method decorated with `@ResourceEvent` will be called automatically when the specified event occurs for the current resource.
 *
 * **Events:**
 * - `'start'`: The method will be called when the resource starts.
 * - `'stop'`: The method will be called when the resource stops.
 *
 * @param resourceEvent The type of resource event to listen for. Must be either `'start'` or `'stop'`.
 *
 * @example
 * ```ts
 * class MyScript {
 *     @ResourceEvent('start')
 *     onStart() {
 *         console.log('Resource started');
 *     }
 *
 *     @ResourceEvent('stop')
 *     onStop() {
 *         console.log('Resource stopped');
 *     }
 * }
 * ```
 */
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
