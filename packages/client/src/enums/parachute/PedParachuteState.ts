/**
 * Enum representing the various states of a ped in relation to parachute usage.
 *
 * @enum{number}
 */
export enum PedParachuteState {
    Normal = -1,
    Wearing,
    Opening,
    Open,
    LandingOrFallingToDoom,
}
