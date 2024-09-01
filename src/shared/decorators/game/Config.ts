export function Config(settings: object) {
    return function (target: any, propertyKey?: string, _descriptor?: PropertyDescriptor) {
        if (propertyKey) {
            Reflect.defineMetadata(propertyKey, settings, target);
        } else {
            Reflect.defineMetadata('config', settings, target);
        }

        console.log(`Configured settings for ${propertyKey || target.name}`);
    };
}
