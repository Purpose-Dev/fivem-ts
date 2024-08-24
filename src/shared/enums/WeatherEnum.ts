/**
 * Enum representing various weather types as string values.
 *
 * This enum is used to manipulate and identify different weather conditions in environments such as
 * game development, simulations, or any application that requires weather state management.
 * Each value in this enum corresponds to a specific weather condition, represented by a descriptive string.
 *
 * Example usage:
 * ```ts
 * if (IsNextWeatherType(WeatherEnum.Clear)) {
 *   console.log("The next weather is clear.");
 * }
 * ```
 *
 * Enum Values:
 * - `Unknown`: Represents an unknown weather state, value `-1`.
 * - `Blizzard`: Represents blizzard conditions, value `'BLIZZARD'`.
 * - `Clear`: Represents clear weather, value `'CLEAR'`.
 * - `Clearing`: Represents clearing weather, value `'CLEARING'`.
 * - `Clouds`: Represents cloudy weather, value `'CLOUDS'`.
 * - `Extrasunny`: Represents extra sunny weather, value `'EXTRASUNNY'`.
 * - `Foggy`: Represents foggy weather, value `'FOGGY'`.
 * - `Halloween`: Represents Halloween-themed weather, value `'HALLOWEEN'`.
 * - `Neutral`: Represents neutral weather conditions, value `'NEUTRAL'`.
 * - `Overcast`: Represents overcast weather, value `'OVERCAST'`.
 * - `Rain`: Represents rainy weather, value `'RAIN'`.
 * - `Smog`: Represents smoggy weather, value `'SMOG'`.
 * - `Snow`: Represents snowy weather, value `'SNOW'`.
 * - `Snowlight`: Represents light snow, value `'SNOWLIGHT'`.
 * - `Thunder`: Represents stormy weather with thunder, value `'THUNDER'`.
 * - `Xmas`: Represents Christmas-themed weather, value `'XMAS'`.
 */
export enum WeatherEnum {
    /** Represents an unknown weather state. */
    Unknown = -1,
    /** Represents blizzard conditions. */
    Blizzard = 'BLIZZARD',
    /** Represents clear weather. */
    Clear = 'CLEAR',
    /** Represents clearing weather. */
    Clearing = 'CLEARING',
    /** Represents cloudy weather. */
    Clouds = 'CLOUDS',
    /** Represents extra sunny weather. */
    Extrasunny = 'EXTRASUNNY',
    /** Represents foggy weather. */
    Foggy = 'FOGGY',
    /** Represents Halloween-themed weather. */
    Halloween = 'HALLOWEEN',
    /** Represents neutral weather conditions. */
    Neutral = 'NEUTRAL',
    /** Represents overcast weather. */
    Overcast = 'OVERCAST',
    /** Represents rainy weather. */
    Rain = 'RAIN',
    /** Represents smoggy weather. */
    Smog = 'SMOG',
    /** Represents snowy weather. */
    Snow = 'SNOW',
    /** Represents light snow. */
    Snowlight = 'SNOWLIGHT',
    /** Represents stormy weather with thunder. */
    Thunder = 'THUNDER',
    /** Represents Christmas-themed weather. */
    Xmas = 'XMAS',
}
