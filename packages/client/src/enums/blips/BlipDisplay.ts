/**
 * Enum representing various display options for blips.
 *
 * This enum defines how blips (markers or icons) should be displayed on different types of maps or screens.
 * The values specify whether a blip is visible, and on which map or minimap it should appear. The enum
 * includes several options for controlling the visibility and interactivity of blips.
 *
 * Available Native Function:
 * - [`SetBlipDisplay`](https://docs.fivem.net/natives/?_0x9029B2F3DA924928): Set a specified display ID for a blip
 *
 * Enum Values:
 * - `DoesntShowUp`: The blip does not show up on any map, value `0`.
 * - `DoesntShowUp2`: The blip does not show up on any map (alternative state), value `1`.
 * - `OnBoth`: The blip shows up on both the main map and the minimap, value `2`.
 * - `OnMainMap`: The blip shows up only on the main map, value `3`.
 * - `OnMainMap2`: The blip shows up only on the main map (alternative state), value `4`.
 * - `OnMinimapOnly`: The blip shows up only on the minimap, value `5`.
 * - `OnBoth2`: The blip shows up on both the main map and the minimap (alternative state), value `6`.
 * - `DoesntShowUp3`: The blip does not show up on any map (another alternative state), value `7`.
 * - `OnBothNotSelectable`: The blip shows up on both the main map and the minimap but is not selectable, value `8`.
 * - `OnMinimapOnly2`: The blip shows up only on the minimap (alternative state), value `9`.
 * - `OnBothNotSelectable2`: The blip shows up on both the main map and the minimap but is not selectable (alternative state), value `10`.
 *
 * Anything higher than 10 seems to be exactly the same as 10.
 * Rockstar seem to only use 0, 2, 3, 4, 5 and 8 in the decompiled scripts.
 *
 * @enum{number}
 */
export enum BlipDisplay {
    DoesntShowUp = 0,
    DoesntShowUp2 = 1,
    OnBoth = 2,
    OnMainMap = 3,
    OnMainMap2 = 4,
    OnMinimapOnly = 5,
    OnBoth2 = 6,
    DoesntShowUp3 = 7,
    OnBothNotSelectable = 8,
    OnMinimapOnly2 = 9,
    OnBothNotSelectable2 = 10,
}
