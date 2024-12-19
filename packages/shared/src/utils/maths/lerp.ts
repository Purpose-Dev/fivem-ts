/**
 * Linearly interpolates between two values.
 *
 * @example
 * ```ts
 * lerp(0, 10, 0.5); // 5
 * lerp(0, 10, 0.75); // 7.5
 * ```
 *
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @param {number} amount - The interpolation factor between 0 and 1.
 *
 * @returns {number} The interpolated value.
 */
export function lerp(start: number, end: number, amount: number): number {
    return (1 - amount) * start + amount * end;
}
