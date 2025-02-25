/**
 * Enum representing different scales for blips.
 *
 * This enum provides a set of predefined scales for blips, which can be used in various applications
 * such as maps or game markers to adjust the size of the blips. The scales range from `Mini` (0.3) to
 * `XXL` (2.0), with intermediate values to allow for more precise control over blip sizes.
 *
 * Available Native Function:
 * - [`SetBlipScale`](https://docs.fivem.net/natives/?_0xD38744167B2FA257): Set a specified scale for a blip
 *
 * Enum Values:
 * - `Mini`: Represents the smallest blip scale with a value of `0.3`.
 * - `Small`: Represents a small blip scale with a value of `0.6`.
 * - `MediumSmall`: Represents a medium-small blip scale with a value of `0.8`.
 * - `Medium`: Represents a medium blip scale with a value of `1.0`.
 * - `MediumLarge`: Represents a medium-large blip scale with a value of `1.2`.
 * - `Large`: Represents a large blip scale with a value of `1.5`.
 * - `XL`: Represents an extra-large blip scale with a value of `1.7`.
 * - `XXL`: Represents the largest blip scale with a value of `2.0`.
 *
 * @enum{number}
 */
export enum BlipScale {
	/** Represents the smallest blip scale. */
	Mini = 0.3,
	/** Represents a small blip scale. */
	Small = 0.6,
	/** Represents a medium-small blip scale. */
	MediumSmall = 0.8,
	/** Represents a medium blip scale. */
	Medium = 1.0,
	/** Represents a medium-large blip scale. */
	MediumLarge = 1.2,
	/** Represents a large blip scale. */
	Large = 1.5,
	/** Represents an extra-large blip scale. */
	XL = 1.7,
	/** Represents the largest blip scale. */
	XXL = 2.0,
}
