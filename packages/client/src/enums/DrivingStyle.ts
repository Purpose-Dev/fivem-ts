/**
 * Enum representing various driving styles.
 *
 * - None: No specific driving style.
 * - Normal: Standard driving behavior.
 * - IgnoreLights: Ignores traffic lights.
 * - SometimesOvertakeTraffic: Occasionally overtakes traffic.
 * - Rushed: Drives in a hurried manner.
 * - AvoidTraffic: Prefers routes to avoid traffic.
 * - AvoidTrafficExtremely: Takes extreme measures to avoid traffic.
 * - AvoidHighwaysWhenPossible: Avoids highways when feasible.
 * - IgnorePathing: Disregards pathing rules.
 * - IgnoreRoads: Ignores standard road usage.
 * - ShortestPath: Chooses the shortest path.
 * - Backwards: Drives in reverse.
 *
 * @enum{number}
 */
export enum DrivingStyle {
    None = 0,
    Normal = 786603,
    IgnoreLights = 2883621,
    SometimesOvertakeTraffic = 5,
    Rushed = 1074528293,
    AvoidTraffic = 786468,
    AvoidTrafficExtremely = 6,
    AvoidHighwaysWhenPossible = 536870912,
    IgnorePathing = 16777216,
    IgnoreRoads = 4194304,
    ShortestPath = 262144,
    Backwards = 1024,
}
