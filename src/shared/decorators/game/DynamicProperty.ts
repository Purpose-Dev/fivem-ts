/**
 * A decorator for dynamically binding a class property to a FiveM resource KVP (Key-Value Pair).
 * This allows for automatic persistence of the property's value and synchronization across the network.
 *
 * @param {string} propertyName - The name of the KVP to associate with the decorated property.
 *
 * @example
 * ```ts
 * class PlayerSettings {
 *   // Bind the 'playerName' property to a KVP, automatically syncing changes across the network.
 *   @DynamicProperty('playerNameKvp')
 *   public playerName: string;
 * }
 *
 * const settings = new PlayerSettings();
 * settings.playerName = 'NewName'; // Automatically sets the KVP and syncs across the network
 * console.log(settings.playerName); // Retrieves the current value from the KVP
 * ```
 *
 * @remarks
 * - When a property is decorated with `@DynamicProperty`, any changes to that property will automatically update
 *   the corresponding KVP and emit a network event to sync the new value with other clients.
 * - The property value is persisted across resource restarts using the KVP system.
 * - The network event emitted when the property is set is named in the format `updateProperty:<propertyName>`.
 */
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
