import { BlipSprites, Vector3 } from '@fivem-ts/shared';
import { BlipColors, BlipData, BlipDisplay, BlipScale, BlipType } from '.';

export class Blip {
    constructor(protected handle: number) {}

    public get Handle(): number {
        return this.handle;
    }

    public get Position(): Vector3 {
        const coords: number[] = GetBlipInfoIdCoord(this.handle);
        return new Vector3(coords[0], coords[1], coords[2]);
    }

    public set Position(vector: Vector3) {
        SetBlipCoords(this.handle, vector.x, vector.y, vector.z);
    }

    public get Rotation(): number {
        return GetBlipRotation(this.handle);
    }

    public set Rotation(rot: number) {
        SetBlipRotation(this.handle, rot);
    }

    public set Scale(scale: BlipScale) {
        SetBlipScale(this.handle, scale.valueOf());
    }

    public get Type(): BlipType {
        return GetBlipInfoIdType(this.handle);
    }

    public get Alpha(): number {
        return GetBlipAlpha(this.handle);
    }

    public set Alpha(alpha: number) {
        SetBlipAlpha(this.handle, alpha);
    }

    public set Priority(priority: number) {
        SetBlipPriority(this.handle, priority);
    }

    public set NumberLabel(number: number) {
        ShowNumberOnBlip(this.handle, number);
    }

    public get Color(): BlipColors {
        return GetBlipColour(this.handle);
    }

    public set Color(color: BlipColors) {
        SetBlipColour(this.handle, color);
    }

    public get Sprite(): BlipSprites {
        return GetBlipSprite(this.handle);
    }

    public set Sprite(sprite: BlipSprites) {
        SetBlipSprite(this.handle, sprite);
    }

    public get Display(): number {
        return GetBlipInfoIdDisplay(this.handle);
    }

    public set Display(display: number) {
        SetBlipDisplay(this.handle, display);
    }

    public set Name(name: string) {
        BeginTextCommandSetBlipName('STRING');
        AddTextComponentSubstringPlayerName(name);
        EndTextCommandSetBlipName(this.handle);
    }

    public set ShowHeadingIndicator(show: boolean) {
        ShowHeadingIndicatorOnBlip(this.handle, show);
    }

    public set ShowRoute(show: boolean) {
        SetBlipRoute(this.handle, show);
    }

    public set IsFriendly(friendly: boolean) {
        SetBlipAsFriendly(this.handle, friendly);
    }

    public set IsFriend(friend: boolean) {
        SetBlipFriend(this.handle, friend);
    }

    public set IsCrew(crew: boolean) {
        SetBlipCrew(this.handle, crew);
    }

    public get IsFlashing(): boolean {
        return IsBlipFlashing(this.handle);
    }

    public set IsFlashing(flashing: boolean) {
        SetBlipFlashes(this.handle, flashing);
    }

    public get IsOnMinimap(): boolean {
        return IsBlipOnMinimap(this.handle);
    }

    public get IsShortRange(): boolean {
        return IsBlipShortRange(this.handle);
    }

    public set IsShortRange(shortRange: boolean) {
        SetBlipAsShortRange(this.handle, shortRange);
    }

    /**
     * Removes the numerical label displayed on the associated map blip.
     *
     * @returns {void}
     */
    public removeNumberLabel(): void {
        HideNumberOnBlip(this.handle);
    }

    /**
     * Checks if the blip exists based on the current handle.
     *
     * @returns {boolean} True if the blip exists, otherwise false.
     */
    public exists(): boolean {
        return DoesBlipExist(this.handle);
    }

    /**
     * Deletes the current blip if it exists.
     * This method checks for the existence of the blip and removes it.
     *
     * @returns {void} No return value.
     */
    public delete(): void {
        if (this.exists()) {
            RemoveBlip(this.handle);
        }
    }

    // Static Methods

    /**
     * Creates a blip on the map from the provided coordinates.
     *
     * @param {Vector3} coords - The 3D coordinates where the blip will be created.
     * @param {string} name - The name of the blip.
     * @param {BlipSprites} sprite - The sprite type for the blip.
     * @param {BlipDisplay} display - The display setting for the blip.
     * @param {BlipScale} scale - The scale of the blip.
     * @param {BlipColors} color - The color of the blip.
     * @param {boolean} shortRange - Indicates if the blip is short-range (visible only when nearby).
     *
     * @returns {BlipData} The data structure representing the created blip.
     */
    public static createBlipFromCoords(
        coords: Vector3,
        name: string,
        sprite: BlipSprites,
        display: BlipDisplay,
        scale: BlipScale,
        color: BlipColors,
        shortRange: boolean,
    ): BlipData {
        const blip: Blip = new Blip(AddBlipForCoord(coords.x, coords.y, coords.z));
        return Blip.setBlipData(
            blip,
            'COORDS',
            coords,
            0.0,
            0.0,
            0.0,
            name,
            sprite,
            display,
            scale,
            color,
            shortRange,
        );
    }

    /**
     * Creates a blip on the map using a specified radius and sets its data.
     *
     * @param {Vector3} coords - The coordinates where the blip will be created.
     * @param {number} radius - The radius of the blip.
     * @param {string} name - The name of the blip for identification.
     * @param {BlipSprites} sprite - The sprite type of the blip to be displayed.
     * @param {BlipDisplay} display - The display style of the blip.
     * @param {BlipScale} scale - The scale of the blip on the map.
     * @param {BlipColors} color - The color of the blip.
     * @param {boolean} shortRange - Whether the blip is visible only when in short range.
     *
     * @returns {BlipData} The data of the created blip.
     */
    public static createBlipFromRadius(
        coords: Vector3,
        radius: number,
        name: string,
        sprite: BlipSprites,
        display: BlipDisplay,
        scale: BlipScale,
        color: BlipColors,
        shortRange: boolean,
    ): BlipData {
        const blip: Blip = new Blip(AddBlipForRadius(coords.x, coords.y, coords.z, radius));
        return Blip.setBlipData(
            blip,
            'RADIUS',
            coords,
            radius,
            0.0,
            0.0,
            name,
            sprite,
            display,
            scale,
            color,
            shortRange,
        );
    }

    /**
     * Creates a blip on the map from a specified area.
     *
     * @param {Vector3} coords - The coordinate location for the blip.
     * @param {number} width - The width of the area for the blip.
     * @param {number} height - The height of the area for the blip.
     * @param {string} name - The name of the blip.
     * @param {BlipSprites} sprite - The sprite identifier for the blip.
     * @param {BlipDisplay} display - The display settings for the blip.
     * @param {BlipScale} scale - The scale of the blip.
     * @param {BlipColors} color - The color of the blip.
     * @param {boolean} shortRange - Indicates if the blip should only be visible on short range.
     *
     * @returns {BlipData} The data of the created blip.
     */
    public static createBlipFromArea(
        coords: Vector3,
        width: number,
        height: number,
        name: string,
        sprite: BlipSprites,
        display: BlipDisplay,
        scale: BlipScale,
        color: BlipColors,
        shortRange: boolean,
    ): BlipData {
        const blip: Blip = new Blip(AddBlipForArea(coords.x, coords.y, coords.z, width, height));
        return Blip.setBlipData(
            blip,
            'AREA',
            coords,
            0.0,
            width,
            height,
            name,
            sprite,
            display,
            scale,
            color,
            shortRange,
        );
    }

    /**
     * Sets the data for a Blip.
     *
     * @param {Blip} blip - The blip object to set data for.
     * @param {'AREA' | 'COORDS' | 'RADIUS'} type - The type of the blip.
     * @param {Vector3} coords - The coordinates for the blip.
     * @param {number} radius - The radius for the blip.
     * @param {number} width - The width for the blip.
     * @param {number} height - The height for the blip.
     * @param {string} name - The name for the blip.
     * @param {BlipSprites} sprite - The sprite for the blip.
     * @param {BlipDisplay} display - The display setting for the blip.
     * @param {BlipScale} scale - The scale for the blip.
     * @param {BlipColors} color - The color for the blip.
     * @param {boolean} shortRange - Indicates if the blip is short-range.
     *
     * @returns {BlipData} The data object containing all the blip settings.
     */
    private static setBlipData(
        blip: Blip,
        type: 'AREA' | 'COORDS' | 'RADIUS',
        coords: Vector3,
        radius: number,
        width: number,
        height: number,
        name: string,
        sprite: BlipSprites,
        display: BlipDisplay,
        scale: BlipScale,
        color: BlipColors,
        shortRange: boolean,
    ): BlipData {
        blip.Name = name;
        blip.Sprite = sprite;
        blip.Display = display;
        blip.Scale = scale;
        blip.Color = color;
        blip.IsShortRange = shortRange;

        return {
            blip,
            id: blip.Handle,
            type: type,
            color: color,
            coords: coords,
            display: display,
            height: height,
            name: name,
            radius: radius,
            scale: scale,
            shortRange: shortRange,
            sprite: sprite,
            width: width,
        };
    }
}
