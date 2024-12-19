import { BlipSprites, Vector3 } from '@fivem-ts/shared';
import { Blip, BlipColors, BlipDisplay, BlipScale } from '../';

/**
 * Represents the data structure for a blip, including properties related to its appearance, position, and behavior.
 *
 * @property {Blip} blip - The blip instance associated with this data.
 * @property {number} id - Unique identifier for the blip.
 * @property {'AREA' | 'COORDS' | 'RADIUS'} type - The type of blip, determining its spatial representation.
 * @property {BlipColors} color - The color of the blip.
 * @property {Vector3} coords - The 3D coordinates where the blip is located.
 * @property {BlipDisplay} display - Display settings for the blip.
 * @property {number} height - The height at which the blip is displayed.
 * @property {string} name - The name or label associated with the blip.
 * @property {number} radius - The radius of the blip if type is 'RADIUS'.
 * @property {BlipScale} scale - The scale of the blip icon.
 * @property {boolean} shortRange - Indicates if the blip is only visible at short range.
 * @property {BlipSprites} sprite - The icon or sprite used for the blip.
 * @property {number} width - The width of the blip.
 */
export type BlipData = {
    blip: Blip;
    id: number;
    type: 'AREA' | 'COORDS' | 'RADIUS';
    color: BlipColors;
    coords: Vector3;
    display: BlipDisplay;
    height: number;
    name: string;
    radius: number;
    scale: BlipScale;
    shortRange: boolean;
    sprite: BlipSprites;
    width: number;
};
