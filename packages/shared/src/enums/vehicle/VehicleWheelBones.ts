/**
 * Enum representing vehicle wheels bones.
 *
 * @enum {number}
 */
export enum VehicleWheelBones {
  /**
   * Wheel left front / bike, plane or jet front
   */
  WheelLeftFront = 0,
  /**
   * Wheel right front
   */
  WheelRightFront = 1,
  /**
   * Wheel left middle / in 6 wheels trailer, plane or jet first one on left
   */
  WheelLeftMiddle = 2,
  /**
   * Wheel right middle / in 6 wheels trailer, plane or jet first one on right
   */
  WheelRightMiddle = 3,
  /**
   * Wheel left rear / bike rear / in 6 wheels trailer, plane or jet last one on left
   */
  WheelLeftRear = 4,
  /**
   * Wheel right rear / in 6 wheels trailer, plane or jet last one on right
   */
  WheelRightRear = 5,
  /**
   * 6 wheels trailer mid wheel left
   */
  WheelTrailerMidLeft = 45,
  /**
   * 6 wheels trailer mid wheel right
   */
  WheelTrailerMidRight = 47,
}
