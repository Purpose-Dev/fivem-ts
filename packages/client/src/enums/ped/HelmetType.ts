/**
 * Enumeration for types of helmets.
 * This enum provides a set of constants representing different types of helmets and their associated attributes.
 * Each helmet type is represented by a unique integer value.
 *
 * @enum{number}
 */
export enum HelmetType {
    None = 0,
    Bulky = 1,
    Job = 2,
    Sunny = 4,
    Wet = 8,
    Cold = 16,
    NotInCar = 32,
    BikeOnly = 64,
    NotIndoors = 128,
    FireRetardent = 256,
    Armoured = 512,
    LightlyArmoured = 1024,
    HighDetail = 2048,
    DefaultHelmet = 4096,
    RandomHelmet = 8192,
    ScriptHelmet = 16384,
    FlightHelmet = 32768,
    HideInFirstPerson = 65536,
    UsePhysicsHat = 131072,
    PilotHelmet = 262144,
}
