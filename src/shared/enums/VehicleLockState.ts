/**
 * Enum for representing the state of a vehicle's lock.
 *
 * - `None` (0): The vehicle is in an undefined lock state.
 * - `Unlocked` (1): The vehicle is unlocked and can be entered by anyone.
 * - `Locked` (2): The vehicle is locked and cannot be entered or started.
 * - `LockoutPlayerOnly` (3): The vehicle is locked, restricting only the player.
 * - `LockedPlayerInside` (4): The player is locked inside the vehicle.
 * - `InitiallyLocked` (5): The vehicle starts in a locked state.
 * - `ForceShutDoors` (6): The vehicle's doors are forcefully shut.
 * - `LockedCanBeDamaged` (7): The vehicle is locked but can be damaged.
 * - `LockedWithBootUnlocked` (8): The vehicle is locked, but the boot is unlocked.
 * - `LockedWithNoPassengers` (9): The vehicle is locked and all passengers must exit.
 * - `LockedCannotEnter` (10): The vehicle is locked and cannot be entered.
 *
 * @enum{number}
 */
export enum VehicleLockState {
    None = 0,
    Unlocked = 1,
    Locked = 2,
    LockoutPlayerOnly = 3,
    LockedPlayerInside = 4,
    InitiallyLocked = 5,
    ForceShutDoors = 6,
    LockedCanBeDamaged = 7,
    LockedWithBootUnlocked = 8,
    LockedWithNoPassengers = 9,
    LockedCannotEnter = 10,
}
