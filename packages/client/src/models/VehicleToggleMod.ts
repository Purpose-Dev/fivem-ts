import { Vehicle, VehicleToggleModType } from '..';

/**
 * Represents a vehicle modification that can be toggled on or off.
 */
export class VehicleToggleMod {
    constructor(
        private readonly owner: Vehicle,
        private readonly modType: VehicleToggleModType,
    ) {}

    public get Owner(): Vehicle {
        return this.owner;
    }

    public get ModType(): VehicleToggleModType {
        return this.modType;
    }

    public get IsInstalled(): boolean {
        return IsToggleModOn(this.owner.Handle, this.ModType);
    }

    public set IsInstalled(value: boolean) {
        ToggleVehicleMod(this.owner.Handle, this.ModType, value);
    }

    public get LocalizedModTypeName(): string {
        return GetModSlotName(this.owner.Handle, this.ModType);
    }

    /**
     * Removes a vehicle modification.
     *
     * This method removes a specific modification type from the vehicle owned by the current owner.
     *
     * @returns {void}
     */
    public remove(): void {
        RemoveVehicleMod(this.owner.Handle, this.ModType);
    }
}
