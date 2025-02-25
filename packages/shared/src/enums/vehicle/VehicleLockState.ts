/**
 * Enum for representing the state of a vehicle's lock.
 *
 * @enum{number}
 */
export enum VehicleLockState {
	/** The vehicle is in an undefined lock state. */
	None = 0,
	/** The vehicle is unlocked and can be entered by anyone. */
	Unlocked = 1,
	/** The vehicle is locked and cannot be entered or started. */
	Locked = 2,
	/** The vehicle is locked, restricting only the player. */
	LockoutPlayerOnly = 3,
	/** The player is locked inside the vehicle. */
	LockedPlayerInside = 4,
	/** The vehicle starts in a locked state. */
	InitiallyLocked = 5,
	/** The vehicle's doors are forcefully shut. */
	ForceShutDoors = 6,
	/** The vehicle is locked but can be damaged. */
	LockedCanBeDamaged = 7,
	/** The vehicle is locked, but the boot is unlocked. */
	LockedWithBootUnlocked = 8,
	/** The vehicle is locked and all passengers must exit. */
	LockedWithNoPassengers = 9,
	/** The vehicle is locked and cannot be entered. */
	LockedCannotEnter = 10,
}
