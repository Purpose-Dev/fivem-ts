/**
 * Enum representing weather types as hashed integer values.
 *
 * This enum provides a mapping of weather conditions to their corresponding hash values,
 * which are typically used in environments like game development for efficiently identifying
 * different weather states. The integer values are signed and correspond to specific weather
 * conditions. The enum also includes a special value for unknown weather.
 *
 * @example
 * ```ts
 * const nextWeather = GetNextWeatherTypeHashName();
 *
 * if (nextWeather === WeatherTypeHash.Clear) {
 *   console.log("Next weather is clear.");
 * }
 * ```
 *
 * Enum Values:
 * - `Unknown`: Represents an unknown weather state with a value of `-1`.
 * - `Blizzard`: Represents blizzard conditions, hash value `669657108`.
 * - `Clear`: Represents clear weather, hash value `916995460`.
 * - `Clearing`: Represents clearing weather, hash value `1840358669`.
 * - `Clouds`: Represents cloudy weather, hash value `821931868`.
 * - `Extrasunny`: Represents extra sunny weather, hash value `-1750463879`.
 * - `Foggy`: Represents foggy weather, hash value `-1368164796`.
 * - `Halloween`: Represents Halloween-themed weather, hash value `-921030142`.
 * - `Neutral`: Represents neutral weather conditions, hash value `-1530260698`.
 * - `Overcast`: Represents overcast weather, hash value `-1148613331`.
 * - `Rain`: Represents rainy weather, hash value `1420204096`.
 * - `Smog`: Represents smoggy weather, hash value `282916021`.
 * - `Snow`: Represents snowy weather, hash value `-273223690`.
 * - `Snowlight`: Represents light snow, hash value `603685163`.
 * - `Thunder`: Represents stormy weather with thunder, hash value `-1233681761`.
 * - `Xmas`: Represents Christmas-themed weather, hash value `-1429616491`.
 *
 * @enum{number}
 */
export enum WeatherTypeHash {
    /** Represents an unknown weather state. */
    Unknown = -1,
    /** Represents blizzard conditions. */
    Blizzard = 669657108,
    /** Represents clear weather. */
    Clear = 916995460,
    /** Represents clearing weather. */
    Clearing = 1840358669,
    /** Represents cloudy weather. */
    Clouds = 821931868,
    /** Represents extra sunny weather. */
    Extrasunny = -1750463879,
    /** Represents foggy weather. */
    Foggy = -1368164796,
    /** Represents Halloween-themed weather. */
    Halloween = -921030142,
    /** Represents neutral weather conditions. */
    Neutral = -1530260698,
    /** Represents overcast weather. */
    Overcast = -1148613331,
    /** Represents rainy weather. */
    Rain = 1420204096,
    /** Represents smoggy weather. */
    Smog = 282916021,
    /** Represents snowy weather. */
    Snow = -273223690,
    /** Represents light snow. */
    Snowlight = 603685163,
    /** Represents stormy weather with thunder. */
    Thunder = -1233681761,
    /** Represents Christmas-themed weather. */
    Xmas = -1429616491,
}
