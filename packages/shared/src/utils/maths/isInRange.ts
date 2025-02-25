/**
 * Checks if a value is within a specified range.
 *
 * @example
 * ```ts
 * isInRange(5, 1, 10); // true
 * isInRange(0, 1, 10); // false
 * ```
 *
 * @param {number} value - The value to check.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 *
 * @returns {boolean} `true` if the value is within the range, `false` otherwise.
 */
export function isInRange(value: number, min: number, max: number): boolean {
	return value >= min && value <= max;
}
