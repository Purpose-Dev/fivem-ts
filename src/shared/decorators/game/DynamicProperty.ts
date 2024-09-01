export function DynamicProperty(propertyName: string) {
    return function (target: unknown, propertyKey: string) {
        Reflect.defineMetadata('dynamicProperty', propertyName, target, propertyKey);

        Object.defineProperty(target, propertyKey, {
            get() {
                const prop = Reflect.getMetadata('dynamicProperty', target, propertyKey);
                return GetResourceKvpString(prop);
            },
            set(value: string) {
                const prop = Reflect.getMetadata('dynamicProperty', target, propertyKey);
                SetResourceKvp(prop, value);
                emitNet(`updateProperty:${prop}`, value);
            },
            enumerable: true,
            configurable: true,
        });

        console.log(`Registered dynamic property: ${propertyName}`);
    };
}
