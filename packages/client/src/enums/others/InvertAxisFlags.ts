/**
 * Enum representing flags used to specify axis inversion.
 *
 * Values:
 * - `None`: No axis inversion (default).
 * - `X`: Invert the X-axis.
 * - `Y`: Invert the Y-axis.
 * - `Z`: Invert the Z-axis.
 *
 * @enum{number}
 */
export enum InvertAxisFlags {
    None = 0,
    X = 1,
    Y = 2,
    Z = 4,
}
