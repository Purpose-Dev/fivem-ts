/**
 * Enum containing keys on a handling.meta file
 *
 * example:
 * ```ts
 * const vehicle: number = GetVehiclePedIsIn(PlayerPedId(), false);
 * const massOfVehicle: number = GetVehicleHandlingFloat(vehicle, "CHandlingData", HandlingKeys.FMass);
 *
 * console.log(`Mass of Vehicle with ID ${vehicle} is ${massOfVehicle}`);
 * ```
 */
export enum HandlingKeys {
    HandlingName = 'handlingName',
    FMass = 'fMass',
    FInitialDragCoeff = 'fInitialDragCoeff',
    FPercentSubmerged = 'fPercentSubmerged',
    VecCentreOfMassOffset = 'vecCentreOfMassOffset',
    VecInertiaMultiplier = 'vecInertiaMultiplier',
    FDriveBiasFront = 'fDriveBiasFront',
    NInitialDriveGears = 'nInitialDriveGears',
    FInitialDriveForce = 'fInitialDriveForce',
    FDriveInertia = 'fDriveInertia',
    FClutchChangeRateScaleUpShift = 'fClutchChangeRateScaleUpShift',
    FClutchChangeRateScaleDownShift = 'fClutchChangeRateScaleDownShift',
    FInitialDriveMaxFlatVel = 'fInitialDriveMaxFlatVel',
    FBrakeForce = 'fBrakeForce',
    FBrakeBiasFront = 'fBrakeBiasFront',
    FHandBrakeForce = 'fHandBrakeForce',
    FSteeringLock = 'fSteeringLock',
    FTractionCurveMax = 'fTractionCurveMax',
    FTractionCurveMin = 'fTractionCurveMin',
    FTractionCurveLateral = 'fTractionCurveLateral',
    FTractionSpringDeltaMax = 'fTractionSpringDeltaMax',
    FLowSpeedTractionLossMult = 'fLowSpeedTractionLossMult',
    FCamberStiffnesss = 'fCamberStiffnesss',
    FTractionBiasFront = 'fTractionBiasFront',
    FTractionLossMult = 'fTractionLossMult',
    FSuspensionForce = 'fSuspensionForce',
    FFSuspensionCompDamp = 'fSuspensionCompDamp',
    FSuspensionReboundDamp = 'fSuspensionReboundDamp',
    FSuspensionUpperLimit = 'fSuspensionUpperLimit',
    FSuspensionLowerLimit = 'fSuspensionLowerLimit',
    FSuspensionRaise = 'fSuspensionRaise',
    FSuspensionBiasFront = 'fSuspensionBiasFront',
    FAntiRollBarForce = 'fAntiRollBarForce',
    FAntiRollBarBiasFront = 'fAntiRollBarBiasFront',
    FRollCentreHeightFront = 'fRollCentreHeightFront',
    FRollCentreHeightRear = 'fRollCentreHeightRear',
    FCollisionDamageMult = 'fCollisionDamageMult',
    FWeaponDamageMult = 'fWeaponDamageMult',
    FDeformationDamageMult = 'fDeformationDamageMult',
    FEngineDamageMult = 'fEngineDamageMult',
    FPetrolTankVolume = 'fPetrolTankVolume',
    FOilVolume = 'fOilVolume',
    FSeatOffsetDistX = 'fSeatOffsetDistX',
    FSeatOffsetDistY = 'fSeatOffsetDistY',
    FSeatOffsetDistZ = 'fSeatOffsetDistZ',
    NMonetaryValue = 'nMonetaryValue',
    StrModelFlags = 'strModelFlags',
    StrHandlingFlags = 'strHandlingFlags',
    StrDamageFlags = 'strDamageFlags',
    AIHandling = 'AIHandling',
}
