/**
 * Enum representing various types of parachute landings.
 *
 * Values:
 * - `None`: Represents no specific landing event.
 * - `Landing`: A standard or normal landing without issues.
 * - `Stumbling`: A landing where the individual stumbles upon touching the ground.
 * - `Rolling`: A landing involving a controlled roll to reduce the impact.
 * - `Ragdoll`: An uncontrolled landing where the individual loses stability.
 *
 * @enum{number}
 */
export enum ParachuteLandingType {
	None = -1,
	Landing,
	Stumbling,
	Rolling,
	Ragdoll,
}
