[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / WeatherTypeHash

# Enumeration: WeatherTypeHash

Enum representing weather types as hashed integer values.

This enum provides a mapping of weather conditions to their corresponding hash values,
which are typically used in environments like game development for efficiently identifying
different weather states. The integer values are signed and correspond to specific weather
conditions. The enum also includes a special value for unknown weather.

Example usage:
```ts
const nextWeather = GetNextWeatherTypeHashName();

if (nextWeather === WeatherTypeHash.Clear) {
  console.log("Next weather is clear.");
}
```

Enum Values:
- `Unknown`: Represents an unknown weather state with a value of `-1`.
- `Blizzard`: Represents blizzard conditions, hash value `669657108`.
- `Clear`: Represents clear weather, hash value `916995460`.
- `Clearing`: Represents clearing weather, hash value `1840358669`.
- `Clouds`: Represents cloudy weather, hash value `821931868`.
- `Extrasunny`: Represents extra sunny weather, hash value `-1750463879`.
- `Foggy`: Represents foggy weather, hash value `-1368164796`.
- `Halloween`: Represents Halloween-themed weather, hash value `-921030142`.
- `Neutral`: Represents neutral weather conditions, hash value `-1530260698`.
- `Overcast`: Represents overcast weather, hash value `-1148613331`.
- `Rain`: Represents rainy weather, hash value `1420204096`.
- `Smog`: Represents smoggy weather, hash value `282916021`.
- `Snow`: Represents snowy weather, hash value `-273223690`.
- `Snowlight`: Represents light snow, hash value `603685163`.
- `Thunder`: Represents stormy weather with thunder, hash value `-1233681761`.
- `Xmas`: Represents Christmas-themed weather, hash value `-1429616491`.

## Enumeration Members

### Blizzard

> **Blizzard**: `669657108`

Represents blizzard conditions.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L40)

***

### Clear

> **Clear**: `916995460`

Represents clear weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:42](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L42)

***

### Clearing

> **Clearing**: `1840358669`

Represents clearing weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:44](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L44)

***

### Clouds

> **Clouds**: `821931868`

Represents cloudy weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L46)

***

### Extrasunny

> **Extrasunny**: `-1750463879`

Represents extra sunny weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:48](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L48)

***

### Foggy

> **Foggy**: `-1368164796`

Represents foggy weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:50](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L50)

***

### Halloween

> **Halloween**: `-921030142`

Represents Halloween-themed weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L52)

***

### Neutral

> **Neutral**: `-1530260698`

Represents neutral weather conditions.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:54](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L54)

***

### Overcast

> **Overcast**: `-1148613331`

Represents overcast weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:56](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L56)

***

### Rain

> **Rain**: `1420204096`

Represents rainy weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:58](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L58)

***

### Smog

> **Smog**: `282916021`

Represents smoggy weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L60)

***

### Snow

> **Snow**: `-273223690`

Represents snowy weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:62](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L62)

***

### Snowlight

> **Snowlight**: `603685163`

Represents light snow.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:64](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L64)

***

### Thunder

> **Thunder**: `-1233681761`

Represents stormy weather with thunder.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:66](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L66)

***

### Unknown

> **Unknown**: `-1`

Represents an unknown weather state.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L38)

***

### Xmas

> **Xmas**: `-1429616491`

Represents Christmas-themed weather.

#### Defined in

[shared/hashes/WeatherTypeHash.ts:68](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/hashes/WeatherTypeHash.ts#L68)
