import { Vehicle } from '.';
import { VehicleDoorIndex } from '../enums';
import { VehicleLockState } from '../../shared';

/**
 * Represents a door of a vehicle and provides various methods to interact with it.
 */
export class VehicleDoor {
    constructor(
        private readonly owner: Vehicle,
        private readonly index: VehicleDoorIndex,
    ) {}

    public get Owner(): Vehicle {
        return this.owner;
    }

    public get Index(): VehicleDoorIndex {
        return this.index;
    }

    public get AngleRatio(): number {
        return GetVehicleDoorAngleRatio(this.owner.Handle, this.index);
    }

    public get LockStatus(): VehicleLockState {
        return GetVehicleIndividualDoorLockStatus(this.owner.Handle, this.index);
    }

    public set LockStatus(lockState: VehicleLockState) {
        SetVehicleIndividualDoorsLocked(this.owner.Handle, this.index, lockState);
    }

    public get IsDamaged(): boolean {
        return IsVehicleDoorDamaged(this.owner.Handle, this.index);
    }

    public get IsOpen(): boolean {
        return this.AngleRatio > 0;
    }

    public get IsClosed(): boolean {
        return !this.IsOpen;
    }

    public get IsFullyOpen(): boolean {
        return IsVehicleDoorFullyOpen(this.owner.Handle, this.index);
    }

    public set CanBreak(isBreakable: boolean) {
        SetVehicleDoorCanBreak(this.owner.Handle, this.index, isBreakable);
    }

    /**
     * Breaks the vehicle door with the option to keep it in the world.
     *
     * @param [stayInTheWorld=true] - Determines whether the broken door stays in the world.
     * @return {void}
     */
    public break(stayInTheWorld = true): void {
        SetVehicleDoorBroken(this.owner.Handle, this.index, stayInTheWorld);
    }

    /**
     * Closes the vehicle door associated with this instance.
     *
     * @param [instantly=false] - Indicates whether the door should be closed instantly (true) or with normal animation (false).
     *
     * @return {void}
     */
    public close(instantly = false): void {
        SetVehicleDoorShut(this.owner.Handle, this.index, instantly);
    }

    /**
     * Opens a vehicle door.
     *
     * @param [loose=false] - Indicates if the door should be opened loosely.
     * @param [openInstantly=false] - If true, the door opens instantly.
     *
     * @return {void}
     */
    public open(loose = false, openInstantly = false): void {
        SetVehicleDoorOpen(this.owner.Handle, this.index, loose, openInstantly);
    }

    /**
     * Controls the door of the vehicle by setting its speed and angle.
     *
     * @param [speed=0.5] - The speed at which the door should move. Default is 0.5.
     * @param [angle=45] - The angle to which the door should be moved. Default is 45 degrees.
     *
     * @return {void}
     */
    public setControl(speed = 0.5, angle = 45): void {
        SetVehicleDoorControl(this.owner.Handle, this.index, speed, angle);
    }

    /**
     * Sets the latch state of the vehicle door.
     *
     * @param {boolean} forceClose - A flag determining whether to force the door closed.
     * @param {boolean} lock - A flag indicating whether to lock the door.
     * @param [p4=true] - An optional unknown and undocumented parameter
     *
     * @return {void} This method does not return a value.
     */
    public setLatched(forceClose: boolean, lock: boolean, p4 = true): void {
        SetVehicleDoorLatched(this.owner.Handle, this.index, forceClose, lock, p4);
    }
}
