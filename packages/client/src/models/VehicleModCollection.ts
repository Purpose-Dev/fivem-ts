import { Maybe, VehicleWheelType, VehicleWindowTint } from '@fivem-ts/shared';
import {
	Color,
	LicensePlateStyle,
	LicensePlateType,
	Vehicle,
	VehicleColor,
	VehicleMod,
	VehicleMods,
	VehicleNeonLight,
	VehiclePaintType,
	VehicleToggleMod,
	VehicleToggleModType,
} from '..';

/**
 * The VehicleModCollection class manages the mods for a Vehicle,
 * including standard mods and toggleable mods such as neon lights, etc.
 */
export class VehicleModCollection {
	private readonly vehicleMods: Map<VehicleMods, VehicleMod> = new Map();
	private readonly vehicleToggleMods: Map<VehicleToggleModType, VehicleToggleMod> = new Map();

	constructor(private readonly owner: Vehicle) {}

	public get Owner(): Vehicle {
		return this.owner;
	}

	public get VehicleMods(): Map<VehicleMods, VehicleMod> {
		return this.vehicleMods;
	}

	public get VehicleToggleMods(): Map<VehicleToggleModType, VehicleToggleMod> {
		return this.vehicleToggleMods;
	}

	/**
	 * Checks if the vehicle has the specified modification type.
	 *
	 * @param {VehicleMods} type - The type of vehicle modification to check for.
	 *
	 * @returns {boolean} - True if the vehicle has the specified modification, false otherwise.
	 */
	public hasVehicleMod(type: VehicleMods): boolean {
		return GetNumVehicleMods(this.owner.Handle, type) > 0;
	}

	/**
	 * Retrieves or initializes a VehicleMod based on the specified modType.
	 *
	 * @param {VehicleMods} modType - The type of vehicle modification to retrieve.
	 *
	 * @returns {VehicleMod} The instance of VehicleMod corresponding to the provided modType.
	 */
	public getMod(modType: VehicleMods): VehicleMod | undefined {
		if (!this.vehicleMods.has(modType)) {
			this.vehicleMods.set(modType, new VehicleMod(this.owner, modType));
		}
		return this.vehicleMods.get(modType);
	}

	/**
	 * Retrieves or creates a toggle modification for the vehicle based on the specified modification type.
	 *
	 * @param {VehicleToggleModType} modType - The type of toggle modification to retrieve or create.
	 *
	 * @returns {VehicleToggleMod} The toggle modification for the specified type.
	 */
	public getToggleMod(modType: VehicleToggleModType): VehicleToggleMod | undefined {
		if (!this.vehicleToggleMods.has(modType)) {
			this.vehicleToggleMods.set(modType, new VehicleToggleMod(this.owner, modType));
		}
		return this.vehicleToggleMods.get(modType);
	}

	/**
	 * Retrieves all the vehicle modifications.
	 *
	 * @returns {VehicleMod[]} An array of VehicleMod objects representing all the vehicle modifications.
	 */
	public getAllMods(): Maybe<VehicleMod>[] {
		return Object.keys(VehicleMods)
			.filter(key => !isNaN(Number(key)))
			.map(key => {
				const index = Number(key);
				if (this.hasVehicleMod(index)) {
					return this.getMod(index);
				}
				return null;
			})
			.filter(mod => mod);
	}

	public get HasAllNeonLights(): boolean {
		return Object.values(VehicleNeonLight).every(light => this.hasNeonLight(Number(light)));
	}

	public get NeonLightsColor(): Color {
		const color: [number, number, number] = GetVehicleNeonLightsColour(this.owner.Handle);
		return Color.fromRgb(color[0], color[1], color[2]);
	}

	public set NeonLightsColor(color: Color) {
		SetVehicleNeonLightsColour(this.owner.Handle, color.r, color.g, color.b);
	}

	/**
	 * Checks if all neon lights on the vehicle are turned on.
	 *
	 * @returns {boolean} True if all neon lights are on, false otherwise.
	 */
	public areAllNeonLightsOn(): boolean {
		if (!this.HasAllNeonLights) {
			return false;
		}

		let on = true;
		Object.keys(VehicleNeonLight)
			.filter(key => !isNaN(Number(key)))
			.forEach(key => {
				if (!on) {
					return;
				}
				on = this.isNeonLightOn(Number(key));
			});
		return on;
	}

	/**
	 * Checks if the vehicle has the specified neon light.
	 *
	 * @param {VehicleNeonLight} light - The neon light position to check (Back, Front, Left, Right).
	 *
	 * @returns {boolean} True if the vehicle has the specified neon light, false otherwise.
	 */
	public hasNeonLight(light: VehicleNeonLight): boolean {
		switch (light) {
			case VehicleNeonLight.Back:
				return this.owner.Bones.hasBone('neon_b');
			case VehicleNeonLight.Front:
				return this.owner.Bones.hasBone('neon_f');
			case VehicleNeonLight.Left:
				return this.owner.Bones.hasBone('neon_l');
			case VehicleNeonLight.Right:
				return this.owner.Bones.hasBone('neon_r');
			default:
				return false;
		}
	}

	/**
	 * Checks if the specified neon light on the vehicle is turned on.
	 *
	 * @param {VehicleNeonLight} light - The neon light to check the status of.
	 *
	 * @returns {boolean} - Returns true if the neon light is on, false otherwise.
	 */
	public isNeonLightOn(light: VehicleNeonLight): boolean {
		return IsVehicleNeonLightEnabled(this.owner.Handle, light);
	}

	/**
	 * Turns on all neon lights of the vehicle by iterating over all available
	 * neon light types and setting each one to 'on' state.
	 *
	 * @returns {void} This method does not return any value.
	 */
	public setAllNeonLightsOn(): void {
		Object.values(VehicleNeonLight).forEach((light: string | VehicleNeonLight) => {
			this.setNeonLightOn(light as VehicleNeonLight, true);
		});
	}

	/**
	 * Turns off all neon lights on the vehicle by iterating over
	 * each type of neon light and setting its state to off.
	 *
	 * @returns {void} No return value.
	 */
	public setAllNeonLightsOff(): void {
		Object.values(VehicleNeonLight).forEach((light: string | VehicleNeonLight) => {
			this.setNeonLightOn(light as VehicleNeonLight, false);
		});
	}

	/**
	 * Sets the state of the specified neon light on the vehicle.
	 *
	 * @param {VehicleNeonLight} light - The specific neon light to be toggled.
	 * @param {boolean} toggle - The desired state of the neon light; true to turn it on, false to turn it off.
	 *
	 * @returns {void}
	 */
	public setNeonLightOn(light: VehicleNeonLight, toggle: boolean): void {
		SetVehicleNeonLightEnabled(this.owner.Handle, light, toggle);
	}

	public get WheelType(): VehicleWheelType {
		return GetVehicleWheelType(this.owner.Handle);
	}

	public set WheelType(type: VehicleWheelType) {
		SetVehicleWheelType(this.owner.Handle, type);
	}

	public get LiveryCount(): number {
		const modCount = this.getMod(VehicleMods.LiveryMod)?.ModCount;

		if (modCount !== undefined && modCount > 0) {
			return modCount;
		}

		return GetVehicleLiveryCount(this.owner.Handle);
	}

	public get Livery(): number {
		if (this.LiveryCount > 0) {
			return this.getMod(VehicleMods.LiveryMod)?.Index ?? -1;
		}

		return GetVehicleLivery(this.owner.Handle);
	}

	public set Livery(index: number) {
		if (this.LiveryCount > 0) {
			// @ts-ignore
			this.getMod(VehicleMods.LiveryMod)?.Index = index;
		} else {
			SetVehicleLivery(this.owner.Handle, index);
		}
	}

	public get WindowTint(): VehicleWindowTint {
		return GetVehicleWindowTint(this.owner.Handle);
	}

	public set WindowTint(tint: VehicleWindowTint) {
		SetVehicleWindowTint(this.owner.Handle, tint);
	}

	public get PrimaryColor(): VehicleColor {
		return GetVehicleColours(this.owner.Handle)[0];
	}

	public set PrimaryColor(color: VehicleColor) {
		SetVehicleColours(this.owner.Handle, color, this.SecondaryColor);
	}

	public get SecondaryColor(): VehicleColor {
		return GetVehicleColours(this.owner.Handle)[1];
	}

	public set SecondaryColor(color: VehicleColor) {
		SetVehicleColours(this.owner.Handle, this.PrimaryColor, color);
	}

	public get RimColor(): VehicleColor {
		return GetVehicleExtraColours(this.owner.Handle)[1];
	}

	public set RimColor(color: VehicleColor) {
		SetVehicleExtraColours(this.owner.Handle, this.PearlescentColor, color);
	}

	public get PearlescentColor(): VehicleColor {
		return GetVehicleExtraColours(this.owner.Handle)[0];
	}

	public set PearlescentColor(color: VehicleColor) {
		SetVehicleExtraColours(this.owner.Handle, color, this.RimColor);
	}

	public set TrimColor(color: VehicleColor) {
		SetVehicleInteriorColour(this.owner.Handle, color);
	}

	public set DashboardColor(color: VehicleColor) {
		SetVehicleDashboardColour(this.owner.Handle, color);
	}

	public get ColorCombination(): number {
		return GetVehicleColourCombination(this.owner.Handle);
	}

	public set ColorCombination(value: number) {
		SetVehicleColourCombination(this.owner.Handle, value);
	}

	public get ColorCombinationCount(): number {
		return GetNumberOfVehicleColours(this.owner.Handle);
	}

	public get TireSmokeColor(): Color {
		const color = GetVehicleTyreSmokeColor(this.owner.Handle);
		return Color.fromRgb(color[0], color[1], color[2]);
	}

	public set TireSmokeColor(color: Color) {
		SetVehicleTyreSmokeColor(this.owner.Handle, color.r, color.g, color.b);
	}

	public setModColor1(paintType: VehiclePaintType, color: VehicleColor): void {
		SetVehicleModColor_1(this.owner.Handle, paintType, color, 0);
	}

	public setModColor2(paintType: VehiclePaintType, color: VehicleColor): void {
		SetVehicleModColor_2(this.owner.Handle, paintType, color);
	}

	public get CustomPrimaryColor(): Color {
		const color = GetVehicleCustomPrimaryColour(this.owner.Handle);
		return Color.fromRgb(color[0], color[1], color[2]);
	}

	public set CustomPrimaryColor(color: Color) {
		SetVehicleCustomPrimaryColour(this.owner.Handle, color.r, color.g, color.b);
	}

	public get CustomSecondaryColor(): Color {
		const color = GetVehicleCustomSecondaryColour(this.owner.Handle);
		return Color.fromRgb(color[0], color[1], color[2]);
	}

	public set CustomSecondaryColor(color: Color) {
		SetVehicleCustomSecondaryColour(this.owner.Handle, color.r, color.g, color.b);
	}

	public get IsPrimaryColorCustom(): boolean {
		return GetIsVehiclePrimaryColourCustom(this.owner.Handle);
	}

	public get IsSecondaryColorCustom(): boolean {
		return GetIsVehicleSecondaryColourCustom(this.owner.Handle);
	}

	/**
	 * Clears the custom primary color of the vehicle.
	 *
	 * This method resets the vehicle's primary color to the default value,
	 * removing any custom color that might have been set previously.
	 *
	 * @returns {void}
	 */
	public clearCustomPrimaryColor(): void {
		ClearVehicleCustomPrimaryColour(this.owner.Handle);
	}

	/**
	 * Clears the custom secondary color of the vehicle.
	 *
	 * This method will reset the custom secondary color of the vehicle associated with the owner Handle to its default state.
	 *
	 * @returns {void}
	 */
	public clearCustomSecondaryColor(): void {
		ClearVehicleCustomSecondaryColour(this.owner.Handle);
	}

	public get LicensePlateStyle(): LicensePlateStyle {
		return GetVehicleNumberPlateTextIndex(this.owner.Handle);
	}

	public set LicensePlateStyle(style: LicensePlateStyle) {
		SetVehicleNumberPlateTextIndex(this.owner.Handle, style);
	}

	public get LicensePlateType(): LicensePlateType {
		return GetVehiclePlateType(this.owner.Handle);
	}

	public get LicensePlate(): string {
		return GetVehicleNumberPlateText(this.owner.Handle);
	}

	public set LicensePlate(text: string) {
		SetVehicleNumberPlateText(this.owner.Handle, text);
	}
}
