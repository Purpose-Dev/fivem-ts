/**
 * Enum representing the type of license plates a vehicle can have.
 *
 * Values:
 * - `FrontAndBackPlates` - Indicates that the vehicle requires both a front and back license plate.
 * - `FrontPlate` - Indicates that the vehicle only requires a front license plate.
 * - `BackPlate` - Indicates that the vehicle only requires a back license plate.
 * - `None` - Indicates that the vehicle does not require any license plates.
 *
 * @enum{number}
 */
export enum LicensePlateType {
	FrontAndBackPlates,
	FrontPlate,
	BackPlate,
	None,
}
