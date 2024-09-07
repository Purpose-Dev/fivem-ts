/**
 * Enum representing different types of vehicle seats.
 *
 * - `None`: Indicates the absence of a seat.
 * - `Any`: Can represent any seat in the vehicle.
 * - `Driver`: Represents the driver's seat.
 * - `Passenger`: Represents a generic passenger seat.
 * - `LeftFront`: Represents the left front seat (typically the same as the driver's seat).
 * - `RightFront`: Represents the right front seat (typically the front passenger seat).
 * - `LeftRear`: Represents the left rear seat.
 * - `RightRear`: Represents the right rear seat.
 * - `ExtraSeat1` to `ExtraSeat12`: Represents additional seats, useful for vehicles with more than the standard number of seats.
 *
 * @enum{number}
 */
export enum VehicleSeat {
    None = -3,
    Any = -2,
    Driver = -1,
    Passenger = 0,
    LeftFront = -1,
    RightFront = 0,
    LeftRear = 1,
    RightRear = 2,
    ExtraSeat1 = 3,
    ExtraSeat2 = 4,
    ExtraSeat3 = 5,
    ExtraSeat4 = 6,
    ExtraSeat5 = 7,
    ExtraSeat6 = 8,
    ExtraSeat7 = 9,
    ExtraSeat8 = 10,
    ExtraSeat9 = 11,
    ExtraSeat10 = 12,
    ExtraSeat11 = 13,
    ExtraSeat12 = 14,
}
