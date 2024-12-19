/**
 * Converts an angle from radians to degrees.
 *
 * @example
 * ```ts
 * toDegrees(Math.PI); // 180
 * toDegrees(Math.PI / 2); // 90
 * ```
 *
 * @param {number} radians - The angle in radians.
 *
 * @returns {number} The angle in degrees.
 */
export function toDegrees(radians: number): number {
    return radians * (180 / Math.PI);
}
