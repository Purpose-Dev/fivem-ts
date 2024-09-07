/**
 * Enumeration representing the different states of a vehicle's landing gear.
 *
 * - `Deployed` (0): The landing gear is fully deployed.
 * - `Closing` (1): The landing gear is in the process of retracting.
 * - `Never` (2): The landing gear is in a state that should never occur.
 * - `Opening` (3): The landing gear is in the process of deploying.
 * - `Retracted` (4): The landing gear is fully retracted.
 * - `Broken` (5): The landing gear is broken and likely unusable.
 *
 * @enum{number}
 */
export enum VehicleLandingGearState {
    Deployed = 0,
    Closing = 1,
    Never = 2,
    Opening = 3,
    Retracted = 4,
    Broken = 5,
}
