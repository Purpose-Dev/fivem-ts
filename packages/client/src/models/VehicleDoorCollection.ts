import { Vehicle, VehicleDoor, VehicleDoorIndex } from '../';
import { Nullable } from '@fivem-ts/shared';

/**
 * Manages a collection of vehicle doors associated with a specific vehicle.
 */
export class VehicleDoorCollection {
    private readonly vehicleDoors: Map<VehicleDoorIndex, VehicleDoor> = new Map();

    constructor(private readonly owner: Vehicle) {}

    public get Owner(): Vehicle {
        return this.owner;
    }

    public get VehicleDoors(): Map<VehicleDoorIndex, VehicleDoor> {
        return this.vehicleDoors;
    }

    /**
     * Retrieves the door of the vehicle at the given index.
     *
     * @param {VehicleDoorIndex} index - The index of the door to retrieve.
     *
     * @returns {VehicleDoor} The door at the specified index.
     */
    public getDoor(index: VehicleDoorIndex): Nullable<VehicleDoor> {
        if (!this.vehicleDoors.has(index)) {
            this.vehicleDoors.set(index, new VehicleDoor(this.owner, index));
        }

        return this.vehicleDoors.get(index) ?? null;
    }

    /**
     * Retrieves all doors associated with the vehicle.
     *
     * @returns {VehicleDoor[]} An array containing all valid vehicle doors.
     */
    public getAllDoors(): Nullable<VehicleDoor>[] {
        return Object.keys(VehicleDoorIndex)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
                const index = Number(key);
                if (this.hasDoor(index)) {
                    return this.getDoor(index);
                }
                return null;
            })
            .filter(door => door);
    }

    /**
     * Breaks all doors in the current context.
     *
     * @param {boolean} [stayInTheWorld] - Optional parameter, if set to true, the doors will stay in the world after being broken.
     *
     * @returns {void}
     */
    public breakAllDoors(stayInTheWorld?: boolean): void {
        this.getAllDoors().forEach(door => {
            door?.break(stayInTheWorld);
        });
    }

    /**
     * Closes all doors in the system.
     *
     * @param {boolean} instantly - Determines whether the doors should close instantly or not.
     *
     * @returns {void} This method does not return a value.
     */
    public closeAllDoors(instantly: boolean): void {
        this.getAllDoors().forEach(door => {
            door?.close(instantly);
        });
    }

    /**
     * Opens all doors associated with the current object.
     *
     * @param {boolean} [loose=false] - If true, doors will open loosely.
     * @param {boolean} [instantly=false] - If true, doors will open instantly.
     *
     * @returns {void} This method does not return any value.
     */
    public openAllDoors(loose?: boolean, instantly?: boolean): void {
        this.getAllDoors().forEach(door => {
            door?.open(loose, instantly);
        });
    }

    /**
     * Sets control parameters for all doors managed by this instance.
     *
     * @param {number} [speed] - The speed parameter to set for each door. Defaults to undefined.
     * @param {number} [angle] - The angle parameter to set for each door. Defaults to undefined.
     *
     * @returns {void}
     */
    public setControlForAll(speed?: number, angle?: number): void {
        this.getAllDoors().forEach(door => {
            door?.setControl(speed, angle);
        });
    }

    /**
     * Sets the latched state for all doors.
     *
     * @param {boolean} forceClose - Indicates if the doors should be forcefully closed.
     * @param {boolean} lock - Indicates if the doors should be locked.
     * @param {boolean} [p4] - Optional parameter to set additional state on the doors.
     *
     * @returns {void}
     */
    public setLatchedForAll(forceClose: boolean, lock: boolean, p4?: boolean): void {
        this.getAllDoors().forEach(door => {
            door?.setLatched(forceClose, lock, p4);
        });
    }

    /**
     * Checks if the vehicle has a specified door.
     *
     * @param {VehicleDoorIndex} index - The index of the vehicle door to check.
     *
     * @returns {boolean} True if the vehicle has the specified door, false otherwise.
     */
    public hasDoor(index: VehicleDoorIndex): boolean {
        switch (index) {
            case VehicleDoorIndex.FrontLeftDoor:
                return this.owner.Bones.hasBone('door_dside_f');
            case VehicleDoorIndex.FrontRightDoor:
                return this.owner.Bones.hasBone('door_pside_f');
            case VehicleDoorIndex.BackLeftDoor:
                return this.owner.Bones.hasBone('door_dside_r');
            case VehicleDoorIndex.BackRightDoor:
                return this.owner.Bones.hasBone('door_pside_r');
            case VehicleDoorIndex.Hood:
                return this.owner.Bones.hasBone('bonnet');
            case VehicleDoorIndex.Trunk:
                return this.owner.Bones.hasBone('boot');
            default:
                return false;
        }
    }
}
