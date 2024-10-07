/**
 * Generates a random integer between the specified minimum and maximum values.
 *
 * @example
 * ```ts
 * getRandomInt(1, 10); // A random integer between 1 and 10
 * ```
 *
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 *
 * @return {number} A random integer between min and max.
 */
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min)) + min;
}
