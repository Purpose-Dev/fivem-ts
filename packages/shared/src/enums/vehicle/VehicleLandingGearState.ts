/**
 * Enumeration representing the different states of a vehicle's landing gear.
 *
 * @enum{number}
 */
export enum VehicleLandingGearState {
	/** The landing gear is fully deployed. */
	Deployed = 0,
	/** The landing gear is in the process of retracting. */
	Closing = 1,
	/** The landing gear is in a state that should never occur. */
	Never = 2,
	/** The landing gear is in the process of deploying. */
	Opening = 3,
	/** The landing gear is fully retracted. */
	Retracted = 4,
	/** The landing gear is broken and likely unusable. */
	Broken = 5,
}
