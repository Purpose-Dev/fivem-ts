import { Vehicle, VehicleWheel, VehicleWheelIndex } from '..';
import { Maybe } from '@fivem-ts/shared';

/**
 * The VehicleWheelCollection class manages a collection of wheels associated with a vehicle.
 * It provides utility functions to retrieve, burst, fix, and check the existence of wheels.
 */
export class VehicleWheelCollection {
    private readonly _vehicleWheels: Map<number, VehicleWheel> = new Map();

    constructor(private readonly owner: Vehicle) {}

    public get Owner(): Vehicle {
        return this.owner;
    }

    public get VehicleWheels(): Map<number, VehicleWheel> {
        return this._vehicleWheels;
    }

    /**
     * Retrieves the wheel of the vehicle at the specified index.
     *
     * @param {VehicleWheelIndex} index - The index of the wheel to retrieve.
     *
     * @returns {VehicleWheel} The wheel at the specified index.
     */
    public getWheel(index: VehicleWheelIndex): VehicleWheel | undefined {
        if (!this._vehicleWheels.has(index)) {
            this._vehicleWheels.set(index, new VehicleWheel(this.owner, index));
        }

        return this._vehicleWheels.get(index);
    }

    /**
     * Retrieves an array of all vehicles that have wheels attached.
     *
     * @returns {VehicleWheel[]} An array containing the vehicles with wheels attached.
     */
    public getAllWheels(): Maybe<VehicleWheel>[] {
        return Object.keys(VehicleWheelIndex)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
                const index = Number(key);
                if (this.hasWheel(index)) {
                    return this.getWheel(index);
                }
                return null;
            })
            .filter(window => window);
    }

    /**
     * Bursts all the wheels of the vehicle.
     *
     * Iterates through each wheel in the vehicle's list of wheels and calls the burst method on them.
     *
     * @returns {void}
     */
    public burstAllWheels(): void {
        this._vehicleWheels.forEach((vehicleWheel: VehicleWheel) => {
            vehicleWheel.burst();
        });
    }

    /**
     * Repairs all wheels of the vehicle by invoking the fix method on each wheel.
     *
     * @returns {void}
     */
    public fixAllWheels(): void {
        this._vehicleWheels.forEach((vehicleWheel: VehicleWheel) => {
            vehicleWheel.fix();
        });
    }

    /**
     * Checks if the vehicle has a specified wheel.
     *
     * @param {VehicleWheelIndex} wheel - The index of the wheel to check.
     *
     * @returns {boolean} - Returns true if the vehicle has the specified wheel, otherwise false.
     */
    public hasWheel(wheel: VehicleWheelIndex): boolean {
        switch (wheel) {
            case VehicleWheelIndex.FrontLeftWheel:
                return this.owner.Bones.hasBone('wheel_lf');
            case VehicleWheelIndex.FrontRightWheel:
                return this.owner.Bones.hasBone('wheel_rf');
            case VehicleWheelIndex.MidLeftWheel:
                return this.owner.Bones.hasBone('wheel_lm');
            case VehicleWheelIndex.MidRightWheel:
                return this.owner.Bones.hasBone('wheel_rm');
            case VehicleWheelIndex.RearLeftWheel:
                return this.owner.Bones.hasBone('wheel_lr');
            case VehicleWheelIndex.RearRightWheel:
                return this.owner.Bones.hasBone('wheel_rr');
            default:
                return false;
        }
    }
}
