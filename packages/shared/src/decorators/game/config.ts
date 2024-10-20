import 'reflect-metadata';

/**
 * A decorator for attaching configuration settings to a class or method in game environment.
 * This allows for easy retrieval and management of settings via metadata.
 *
 * @example
 * ```ts
 * @Config({ maxPlayers: 32, gameMode: 'deathmatch' })
 * class GameConfig {
 *
 * }
 *
 * class PlayerSettings {
 *   @Config({ maxHealth: 100, canRespawn: true })
 *   configurePlayer() {
 *
 *   }
 * }
 *
 * // Retrieve configuration metadata
 * const configMetadata = Reflect.getMetadata('config', GameConfig);
 * const playerSettings = Reflect.getMetadata('configurePlayer', PlayerSettings.prototype);
 * console.log(configMetadata, playerSettings);
 * ```
 *
 * @param {object} settings - An object containing configuration settings to associate with the class or method.
 *
 * @remarks
 * - When applied to a class, the settings are stored with the key `'config'` in the class's metadata.
 * - When applied to a method, the settings are stored using the method name as the metadata key.
 * - This decorator is useful for organizing and applying settings consistently across different parts of the application.
 */
export function Config(settings: object) {
    // eslint-disable-next-line
    return function (target: any, propertyKey?: string, _descriptor?: PropertyDescriptor) {
        if (propertyKey) {
            Reflect.defineMetadata(propertyKey, settings, target);
        } else {
            Reflect.defineMetadata('config', settings, target);
        }

        console.log(`Configured settings for ${propertyKey || target.name}`);
    };
}

/**
 * Retrieves the configuration metadata associated with a class or method.
 *
 * @example
 * ```ts
 * @Config({ maxPlayers: 32, gameMode: 'deathmatch' })
 * class GameConfig {
 *
 * }
 *
 * class PlayerSettings {
 *   @Config({ maxHealth: 100, canRespawn: true })
 *   configurePlayer() {
 *
 *   }
 * }
 *
 * // Retrieve configuration metadata
 * const classConfig = getConfig(GameConfig);
 * const methodConfig = getConfig(PlayerSettings.prototype, 'configurePlayer');
 * console.log('Class Config:', classConfig); // output: { maxPlayers: 32, gameMode: 'deathmatch' }
 * console.log('Method Config:', methodConfig); // output: { maxHealth: 100, canRespawn: true }
 * ```
 *
 * @param target - The target object (class or prototype).
 * @param {string} [propertyKey] - The name of the method being queried, if applicable.
 *
 * @returns {object | undefined} - The configuration settings associated with the target or method, or `undefined` if no settings are found.
 */
export function getConfig(target: object, propertyKey?: string): object | undefined {
    if (propertyKey) {
        return Reflect.getMetadata(propertyKey, target);
    } else {
        return Reflect.getMetadata('config', target);
    }
}
