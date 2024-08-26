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
