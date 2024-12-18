/**
 * Represents the flags that can be used to configure the driving behavior of a vehicle.
 *
 * Values:
 * - None: No specific driving behaviors selected.
 * - FollowTraffic: Directs the vehicle to follow general traffic rules.
 * - YieldToPeds: Makes the vehicle yield to pedestrians.
 * - AvoidVehicles: Enables vehicle avoidance logic for other vehicles.
 * - AvoidEmptyVehicles: Enables vehicle avoidance logic specifically for empty vehicles.
 * - AvoidPeds: Makes the vehicle avoid hitting pedestrians.
 * - AvoidObjects: Directs the vehicle to avoid static or dynamic objects.
 * - StopAtTrafficLights: Instructs the vehicle to stop at traffic lights.
 * - UseBlinkers: Controls whether the vehicle will use blinkers during turns.
 * - AllowGoingWrongWay: Allows the vehicle to drive against traffic flow or on a wrong-way path.
 * - Reverse: Enables the ability for the vehicle to reverse as part of its driving behavior.
 * - AllowMedianCrossing: Permits the vehicle to cross over medians where traffic separation exists.
 * - DriveBySight: Configures the vehicle to navigate primarily based on visible surroundings.
 * - IgnorePathFinding: Disables pathfinding logic for the vehicle.
 * - TryToAvoidHighways: Configures the vehicle to attempt to avoid highways during navigation.
 * - StopAtDestination: Ensures the vehicle will stop at its defined destination.
 *
 * @enum{number}
 */
export enum VehicleDrivingFlags {
    None = 0,
    FollowTraffic = 1,
    YieldToPeds = 2,
    AvoidVehicles = 4,
    AvoidEmptyVehicles = 8,
    AvoidPeds = 16,
    AvoidObjects = 32,
    StopAtTrafficLights = 128,
    UseBlinkers = 256,
    AllowGoingWrongWay = 512,
    Reverse = 1024,
    AllowMedianCrossing = 262144,
    DriveBySight = 4194304,
    IgnorePathFinding = 16777216,
    TryToAvoidHighways = 536870912,
    StopAtDestination = 2147483648,
}
