import { getRandomInt } from '.';

/**
 * Returns a random entry from the given enum type.
 *
 * @template T
 *
 * @param {object} enumType - The enum type from which to select a random entry.
 *
 * @return {[keyof T, T[keyof T]]} - An array containing the random key-value pair from the enum.
 */
export function getRandomEnumEntry<T extends object>(enumType: T): [keyof T, T[keyof T]] {
    const values = Object.entries(enumType).filter(([key]): boolean => isNaN(Number(key))) as [
        keyof T,
        T[keyof T],
    ][];
    const randomIndex: number = getRandomInt(0, values.length);
    return values[randomIndex];
}
