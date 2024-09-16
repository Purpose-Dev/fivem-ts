import { Entity } from '.';

/**
 * Represents the colors of a vehicle.
 *
 * @property {number} primary - The primary color code of the vehicle.
 * @property {number} secondary - The secondary color code of the vehicle.
 */
export type VehicleColours = {
    primary: number;
    secondary: number;
};

/**
 * Represents a custom color specification for a vehicle.
 *
 * @property {number} r - The red component of the color, ranging from 0 to 255.
 * @property {number} g - The green component of the color, ranging from 0 to 255.
 * @property {number} b - The blue component of the color, ranging from 0 to 255.
 */
export type CustomVehicleColour = {
    r: number;
    g: number;
    b: number;
};

/**
 * Vehicle class that extends the Entity class.
 * Represents a vehicle entity.
 *
 * @extends {Entity}
 */
export class Vehicle extends Entity {
    constructor(id: number) {
        if (!(GetEntityType(id) === 2)) {
            throw new Error('Entity type is not a vehicle');
        }
        super(id);
    }

    public get Plate(): string {
        return GetVehicleNumberPlateText(this.Id);
    }

    public set Plate(value: string) {
        SetVehicleNumberPlateText(this.Id, value);
    }

    public get PlateIndex(): number {
        return GetVehicleNumberPlateTextIndex(this.Id);
    }

    public get BodyHealth(): number {
        return GetVehicleBodyHealth(this.Id);
    }

    public set BodyHealth(value: number) {
        SetVehicleBodyHealth(this.Id, value);
    }

    public get EngineHealth(): number {
        return GetVehicleEngineHealth(this.Id);
    }

    public get PetrolTankHealth(): number {
        return GetVehiclePetrolTankHealth(this.Id);
    }

    public get IsEngineRunning(): boolean {
        return GetIsVehicleEngineRunning(this.Id);
    }

    public get IsEngineStarting(): boolean {
        return IsVehicleEngineStarting(this.Id);
    }

    public set Alarm(state: boolean) {
        SetVehicleAlarm(this.Id, state);
    }

    public get LightsState(): [boolean, boolean, boolean] {
        return GetVehicleLightsState(this.Id);
    }

    public get AreLightsOn(): boolean {
        return this.LightsState[0];
    }

    public get IsPrimaryColourCustom(): boolean {
        return GetIsVehiclePrimaryColourCustom(this.Id);
    }

    public get IsSecondaryColourCustom(): boolean {
        return GetIsVehicleSecondaryColourCustom(this.Id);
    }

    public get Colours(): VehicleColours {
        const colours: [number, number] = GetVehicleColours(this.Id);
        return {
            primary: colours[0],
            secondary: colours[1],
        };
    }

    public set Colours(colours: VehicleColours) {
        SetVehicleColours(this.Id, colours.primary, colours.secondary);
    }

    public get CustomPrimaryColour(): CustomVehicleColour {
        const customColor: [number, number, number] = GetVehicleCustomPrimaryColour(this.Id);
        return {
            r: customColor[0],
            g: customColor[1],
            b: customColor[2],
        };
    }

    public set CustomPrimaryColour(value: CustomVehicleColour) {
        SetVehicleCustomPrimaryColour(this.Id, value.r, value.g, value.b);
    }

    public get CustomSecondaryColour(): CustomVehicleColour {
        const customColor: [number, number, number] = GetVehicleCustomSecondaryColour(this.Id);
        return {
            r: customColor[0],
            g: customColor[1],
            b: customColor[2],
        };
    }

    public set CustomSecondaryColour(value: CustomVehicleColour) {
        SetVehicleCustomSecondaryColour(this.Id, value.r, value.g, value.b);
    }

    public get DashboardColour(): number {
        return GetVehicleDashboardColour(this.Id);
    }

    public get DirtLevel(): number {
        return GetVehicleDirtLevel(this.Id);
    }

    public set DirtLevel(value: number) {
        SetVehicleDirtLevel(this.Id, value);
    }

    /**
     * Washes the vehicle by setting the DirtLevel to 0.
     */
    public wash(): void {
        this.DirtLevel = 0;
    }
}
