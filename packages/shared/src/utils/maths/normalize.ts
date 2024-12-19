/**
 * Normalizes a value within a given range to a value between 0 and 1.
 *
 * @example
 * ```ts
 * normalize(75, 50, 100); // 0.5
 * ```
 *
 * @param {number} value - The value to normalize.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 *
 * @returns {number} The normalized value.
 */
export function normalize(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
}
