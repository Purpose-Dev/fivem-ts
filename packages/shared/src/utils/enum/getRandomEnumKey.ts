/**
 * Returns a random key from the given enum type.
 *
 * @template T
 *
 * @param {T} enumType - The enum type from which to select a random key
 *
 * @returns {keyof T} A randomly selected key from the provided enum type.
 */
export function getRandomEnumKey<T extends object>(enumType: T): keyof T {
    const keys = Object.keys(enumType).filter(key => isNaN(Number(key))) as Array<keyof T>;
    const randomIndex: number = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
