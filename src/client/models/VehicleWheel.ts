import { Vehicle } from '.';

/**
 * Represents a wheel of a vehicle and provides methods to interact with its state.
 */
export class VehicleWheel {
    constructor(
        private readonly _owner: Vehicle,
        private _index: number,
    ) {}

    public get Owner(): Vehicle {
        return this._owner;
    }

    public get Index(): number {
        return this._index;
    }

    public set Index(index: number) {
        this._index = index;
    }

    public exists(): boolean {
        return DoesVehicleTyreExist(this.Owner.Handle, this.Index);
    }

    public get Health(): number {
        return GetTyreHealth(this.Owner.Handle, this.Index);
    }

    public set Health(value: number) {
        SetTyreHealth(this.Owner.Handle, this.Index, value);
    }

    public get WearMultiplier(): number {
        return GetTyreWearMultiplier(this.Owner.Handle, this.Index);
    }

    /**
     * Determines if the vehicle's tire is burst.
     *
     * @param {boolean} completely - Flag indicating if the check should consider complete burst.
     * @return {boolean} - Returns true if the tire is burst based on the provided condition, otherwise false.
     */
    public isBurstable(completely: boolean): boolean {
        return IsVehicleTyreBurst(this.Owner.Handle, this.Index, completely);
    }

    /**
     * Causes the vehicle tyre to burst for the vehicle associated with the owner.
     *
     * This method utilizes `SetVehicleTyreBurst` to simulate a tyre burst effect.
     * The tyre index and bursting properties are specified in the parameters of the method.
     *
     * @return {void} No return value.
     */
    public burst(): void {
        SetVehicleTyreBurst(this.Owner.Handle, this.Index, true, 1000);
    }

    /**
     * Repairs a specific vehicle tire associated with the vehicle owner.
     * This method ensures that the tire at the provided index of the owner's vehicle is fixed.
     *
     * @return {void} Does not return any value.
     */
    public fix(): void {
        SetVehicleTyreFixed(this.Owner.Handle, this.Index);
    }
}
