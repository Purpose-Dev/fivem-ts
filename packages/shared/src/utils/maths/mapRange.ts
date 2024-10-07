/**
 * Maps a value from one range to another.
 *
 * @example
 * ```ts
 * mapRange(5, 0, 10, 0, 100); // 50
 * ```
 *
 * @param {number} value - The value to map.
 * @param {number} inMin - The minimum value of the input range.
 * @param {number} inMax - The maximum value of the input range.
 * @param {number} outMin - The minimum value of the output range.
 * @param {number} outMax - The maximum value of the output range.
 *
 * @return {number} The mapped value.
 */
export function mapRange(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
): number {
    if (inMin === inMax) {
        return NaN;
    }
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
