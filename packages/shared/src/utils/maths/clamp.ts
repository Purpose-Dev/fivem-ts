/**
 * Clamps a number to a specified range.
 *
 * @example
 * ```ts
 * clamp(5, 1, 10); // 5
 * clamp(0, 1, 10); // 1
 * clamp(15, 1, 10); // 10
 * ```
 *
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 *
 * @returns {number} The clamped value.
 */
export function clamp(num: number, min: number, max: number): number {
    return num <= min ? min : num >= max ? max : num;
}
