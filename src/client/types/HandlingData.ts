import { Vector } from './Vector';

/**
 * This Handling Data type represents data on handling.meta file
 */
export type HandlingData = {
    handlingName: string;
    fMass: number;
    fInitialDragCoeff: number;
    fPercentSubmerged: number;
    vecCentreOfMassOffset: Vector;
    vecInertiaMultiplier: Vector;
    fDriveBiasFront: number;
    nInitialDriveGears: number;
    fInitialDriveForce: number;
    fDriveInertia: number;
    fClutchChangeRateScaleUpShift: number;
    fClutchChangeRateScaleDownShift: number;
    fInitialDriveMaxFlatVel: number;
    fBrakeForce: number;
    fBrakeBiasFront: number;
    fHandBrakeForce: number;
    fSteeringLock: number;
    fTractionCurveMax: number;
    fTractionCurveMin: number;
    fTractionCurveLateral: number;
    fTractionSpringDeltaMax: number;
    fLowSpeedTractionLossMult: number;
    fCamberStiffnesss: number;
    fTractionBiasFront: number;
    fTractionLossMult: number;
    fSuspensionForce: number;
    fSuspensionCompDamp: number;
    fSuspensionReboundDamp: number;
    fSuspensionUpperLimit: number;
    fSuspensionLowerLimit: number;
    fSuspensionRaise: number;
    fSuspensionBiasFront: number;
    fAntiRollBarForce: number;
    fAntiRollBarBiasFront: number;
    fRollCentreHeightFront: number;
    fRollCentreHeightRear: number;
    fCollisionDamageMult: number;
    fWeaponDamageMult: number;
    fDeformationDamageMult: number;
    fEngineDamageMult: number;
    fPetrolTankVolume: number;
    fOilVolume: number;
    fSeatOffsetDistX: number;
    fSeatOffsetDistY: number;
    fSeatOffsetDistZ: number;
    nMonetaryValue: number;
    strModelFlags: number;
    strHandlingFlags: number;
    strDamageFlags: number;
    AIHandling: 'AVERAGE' | 'TRUCK' | 'SPORTS_CAR' | 'CRAP';
};