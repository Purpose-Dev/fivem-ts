import { Vehicle, VehicleMods } from '..';

/**
 * A class representing vehicle mod.
 */
export class VehicleMod {
	constructor(
		private readonly owner: Vehicle,
		private readonly modType: VehicleMods,
	) {}

	public get Owner(): Vehicle {
		return this.owner;
	}

	public get ModType(): VehicleMods {
		return this.modType;
	}

	public get IdentifierHash(): number {
		return GetVehicleModIdentifierHash(this.owner.Handle, this.modType, this.Index);
	}

	public get Index(): number {
		return GetVehicleMod(this.owner.Handle, this.modType);
	}

	public set Index(index: number) {
		SetVehicleMod(this.owner.Handle, this.modType, index, this.Variation);
	}

	public get IsHswExclusive(): boolean {
		return IsVehicleModHswExclusive(this.owner.Handle, this.modType, this.Index);
	}

	public get ModCount(): number {
		return GetNumVehicleMods(this.owner.Handle, this.modType);
	}

	public get ModifierValue(): number {
		return GetVehicleModModifierValue(this.owner.Handle, this.modType, this.Index);
	}

	public get Variation(): boolean {
		return GetVehicleModVariation(this.owner.Handle, this.modType);
	}

	public set Variation(value: boolean) {
		SetVehicleMod(this.owner.Handle, this.modType, this.Index, value);
	}

	/**
	 * Preloads a vehicle mod for the given owner's handle, modification type, and index.
	 *
	 * @returns {void}
	 */
	public preload(): void {
		PreloadVehicleMod(this.owner.Handle, this.modType, this.Index);
	}

	/**
	 * Removes the vehicle mod from the owner's vehicle based on the specified modification type.
	 *
	 * @returns {void}
	 */
	public remove(): void {
		RemoveVehicleMod(this.owner.Handle, this.ModType);
	}
}
