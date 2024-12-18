/**
 * Enum representing various states or types of vehicle indicator lights.
 *
 * Values:
 * - `None` (0): Represents the state where no indicator lights are active.
 * - `BlinkLeft` (1): Represents the left indicator light flashing.
 * - `BlinkRight` (2): Represents the right indicator light flashing.
 * - `BlinkBoth` (3): Represents both indicator lights flashing simultaneously.
 * - `StaticBoth` (8): Represents both indicator lights turned on constantly without flashing.
 * - `Interior` (64): Represents the activation of interior lighting.
 *
 * @enum{number}
 */
export enum VehicleIndicatorsLights {
    None = 0,
    BlinkLeft = 1,
    BlinkRight = 2,
    BlinkBoth = 3,
    StaticBoth = 8,
    Interior = 64,
}
