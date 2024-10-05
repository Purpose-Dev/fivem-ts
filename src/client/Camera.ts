import { Vector3 } from '../shared';
import { CameraShake } from './enums';
import { Entity, PedBone } from './models';

/**
 * The Camera class provides methods to manipulate and control camera.
 */
export class Camera {
    constructor(private handle: number) {}

    /**
     * Retrieves the handle associated with this object.
     *
     * @return {number}
     */
    public get Handle(): number {
        return this.handle;
    }

    /**
     * Sets the handle value.
     *
     * @param {number} value
     */
    public set Handle(value: number) {
        this.handle = value;
    }

    /**
     * Checks if the camera associated with the current handle is active.
     *
     * @return {boolean} true if the camera is active, false otherwise.
     */
    public get IsActive(): boolean {
        return IsCamActive(this.Handle);
    }

    /**
     * Sets the active state of the camera.
     *
     * @param {boolean} value - The desired active state of the camera. True to activate, false to deactivate.
     */
    public set IsActive(value: boolean) {
        SetCamActive(this.Handle, value);
    }

    /**
     * Gets the current position of the camera as a Vector3 object.
     *
     * @return {Vector3} The position of the camera.
     */
    public get Position(): Vector3 {
        const camPosition: number[] = GetCamCoord(this.Handle);
        return new Vector3(camPosition[0], camPosition[1], camPosition[2]);
    }

    /**
     * Sets the camera's position in the 3D space.
     *
     * @param {Vector3} pos - The position vector containing the x, y, and z coordinates to set the camera's position.
     */
    public set Position(pos: Vector3) {
        SetCamCoord(this.Handle, pos.x, pos.y, pos.z);
    }

    /**
     * Retrieves the current rotation of the camera as a Vector3 object.
     *
     * @return {Vector3} A Vector3 instance containing the rotation values (pitch, roll, yaw) of the camera.
     */
    public get Rotation(): Vector3 {
        const camRotation: number[] = GetCamRot(this.Handle, 2);
        return new Vector3(camRotation[0], camRotation[1], camRotation[2]);
    }

    /**
     * Sets the rotation of the camera using a Vector3 object.
     *
     * @param {Vector3} rot - A Vector3 object containing the rotation values for x, y, and z axes.
     */
    public set Rotation(rot: Vector3) {
        SetCamRot(this.Handle, rot.x, rot.y, rot.z, 2);
    }

    /**
     * Calculates and returns the forward vector of an entity based on its current rotation.
     * The forward vector represents the direction in which the entity is facing.
     *
     * @return {Vector3} The normalized forward vector computed from the entity's rotation.
     */
    public get ForwardVector(): Vector3 {
        const rotation = Vector3.multiply(this.Rotation, Math.PI / 180);
        const normalized = Vector3.normalize(
            new Vector3(
                -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
                Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
                Math.sin(rotation.x),
            ),
        );

        return new Vector3(normalized.x, normalized.y, normalized.z);
    }

    /**
     * Gets the direction vector.
     *
     * @return {Vector3} The forward direction vector.
     */
    public get Direction(): Vector3 {
        return this.ForwardVector;
    }

    /**
     * Sets the direction vector and adjusts the rotation angles accordingly.
     *
     * @param {Vector3} direction - The input vector representing the direction.
     */
    public set Direction(direction: Vector3) {
        const dir: Vector3 = direction.normalize;
        const vec1: Vector3 = new Vector3(dir.x, dir.y, 0);
        const vec2: Vector3 = new Vector3(dir.z, vec1.distanceSquared(vec1), 0);
        const vec3: Vector3 = vec2.normalize;

        this.Rotation = new Vector3(
            Math.atan2(vec3.x, vec3.y) * 57.295779513082323,
            this.Rotation.y,
            Math.atan2(dir.x, dir.y) * -57.295779513082323,
        );
    }

    /**
     * Retrieves the field of view of the camera associated with the given handle.
     *
     * @return {number} The field of view of the camera.
     */
    public get FieldOfView(): number {
        return GetCamFov(this.Handle);
    }

    /**
     * Sets the camera's field of view.
     *
     * @param {number} fieldOfView - A number representing the new field of view to be set for the camera.
     */
    public set FieldOfView(fieldOfView: number) {
        SetCamFov(this.Handle, fieldOfView);
    }

    /**
     * Retrieves the near clipping distance of the camera.
     *
     * @return {number} The near clipping distance of the camera.
     */
    public get NearClip(): number {
        return GetCamNearClip(this.Handle);
    }

    /**
     * Sets the near clipping plane distance for the camera.
     *
     * @param {number} nearClip - The distance to the near clipping plane. Objects closer than this distance to the camera will not be rendered.
     */
    public set NearClip(nearClip: number) {
        SetCamNearClip(this.Handle, nearClip);
    }

    /**
     * Retrieves the far clipping distance for the camera.
     *
     * @return {number} The far clipping distance.
     */
    public get FarClip(): number {
        return GetCamFarClip(this.Handle);
    }

    /**
     * Sets the far clipping distance for the camera.
     *
     * @param {number} farClip - The distance at which the camera will stop rendering objects.
     */
    public set FarClip(farClip: number) {
        SetCamFarClip(this.Handle, farClip);
    }

    /**
     * Retrieves the near depth of field value for the camera.
     *
     * @return {number} The near depth of field value.
     */
    public get NearDepthOfField(): number {
        return GetCamNearDof(this.Handle);
    }

    /**
     * Sets the near depth of field value for the camera.
     *
     * @param {number} nearDepthOfField - The new near depth of field value to be applied.
     */
    public set NearDepthOfField(nearDepthOfField: number) {
        SetCamNearDof(this.Handle, nearDepthOfField);
    }

    /**
     * Retrieves the far depth of field value for the current camera handle.
     *
     * @return {number} The far depth of field value.
     */
    public get FarDepthOfField(): number {
        return GetCamFarDof(this.Handle);
    }

    /**
     * Sets the far depth of field value for the camera.
     *
     * @param {number} farDepthOfField - The distance from the camera lens to the farthest object in focus.
     */
    public set FarDepthOfField(farDepthOfField: number) {
        SetCamFarDof(this.Handle, farDepthOfField);
    }

    /**
     * Gets the strength of the depth of field effect for the current camera.
     *
     * @return {number} The strength of the depth of field effect.
     */
    public get DepthOfFieldStrength(): number {
        return GetCamDofStrength(this.Handle);
    }

    /**
     * Sets the strength of the depth of field effect for the camera.
     *
     * @param {number} strength The desired strength of the depth of field effect. This should be a numerical value that determines the intensity of the effect.
     */
    public set DepthOfFieldStrength(strength: number) {
        SetCamDofStrength(this.Handle, strength);
    }

    /**
     * Sets the motion blur strength for the camera.
     *
     * @param {number} strength - A value representing the new strength of the motion blur effect.
     *
     * @return {void}
     */
    public setMotionBlurStrength(strength: number): void {
        SetCamMotionBlurStrength(this.Handle, strength);
    }

    /**
     * Checks if the camera is currently shaking.
     *
     * @return {boolean} True if the camera is shaking, false otherwise.
     */
    public get IsShaking(): boolean {
        return IsCamShaking(this.Handle);
    }

    /**
     * Sets the shake amplitude for the camera.
     *
     * @param {number} amplitude - The amplitude to set for the camera shake.
     *
     * @return {void}
     */
    public setShakeAmplitude(amplitude: number): void {
        SetCamShakeAmplitude(this.Handle, amplitude);
    }

    /**
     * Applies a shaking effect to the camera.
     *
     * @param {CameraShake} type - The type of camera shake to apply.
     * @param {number} amplitude - The intensity of the shake effect.
     *
     * @return {void}
     */
    public shake(type: CameraShake, amplitude: number): void {
        ShakeCam(this.Handle, type, amplitude);
    }

    /**
     * Stops the camera from shaking.
     *
     * This method stops any ongoing camera shake effect associated with the current handle.
     *
     * @return {void}
     */
    public stopShaking(): void {
        StopCamShaking(this.Handle, true);
    }

    /**
     * Points the camera at a specified target with an optional offset.
     *
     * @param {Entity | PedBone | Vector3} target - The target to point the camera at.
     * This can be an entity, a ped bone, or a specific coordinate.
     * @param {Vector3} [offset=new Vector3(0, 0, 0)] - The optional offset to apply when pointing the camera. Defaults to (0, 0, 0).
     *
     * @return {void}
     */
    public pointAt(
        target: Entity | PedBone | Vector3,
        offset: Vector3 = new Vector3(0, 0, 0),
    ): void {
        if (target instanceof Entity) {
            PointCamAtEntity(this.Handle, target.Handle, offset.x, offset.y, offset.z, true);
        } else if (target instanceof PedBone) {
            PointCamAtPedBone(
                this.Handle,
                target.Owner.Handle,
                target.Index,
                offset.x,
                offset.y,
                offset.z,
                true,
            );
        } else {
            PointCamAtCoord(this.Handle, target.x, target.y, target.z);
        }
    }

    /**
     * Stops the camera from pointing at its current target.
     *
     * @return {void}
     */
    public stopPointing(): void {
        StopCamPointing(this.Handle);
    }

    /**
     * Indicates whether the current object is in an interpolating state.
     *
     * @return {boolean} True if the object is currently interpolating; otherwise, false.
     */
    public get IsInterpolating(): boolean {
        return IsCamInterpolating(this.Handle);
    }

    /**
     * Interpolates the current camera to another camera over a specified duration with options for easing position and rotation.
     *
     * @param {Camera} camTo - The target camera to interpolate to.
     * @param {number} duration - The time in milliseconds over which the interpolation will occur.
     * @param {boolean} easePosition - Determines whether the interpolation should ease the position.
     * @param {boolean} easeRotation - Determines whether the interpolation should ease the rotation.
     *
     * @return {void}
     */
    public interpTo(
        camTo: Camera,
        duration: number,
        easePosition: boolean,
        easeRotation: boolean,
    ): void {
        SetCamActiveWithInterp(
            camTo.Handle,
            this.Handle,
            duration,
            Number(easePosition),
            Number(easeRotation),
        );
    }

    /**
     * Attach the camera to an Entity or a PedBone with a specified offset.
     *
     * @param {Entity|PedBone} object The object to which the camera will be attached. This can either be an Entity or a PedBone.
     * @param {Vector3} offset The offset from the object where the camera will be positioned.
     *
     * @return {void}
     */
    public attachTo(object: Entity | PedBone, offset: Vector3): void {
        if (object instanceof Entity) {
            AttachCamToEntity(this.Handle, object.Handle, offset.x, offset.y, offset.z, true);
        } else if (object instanceof PedBone) {
            AttachCamToPedBone(
                this.Handle,
                object.Owner.Handle,
                object.Index,
                offset.x,
                offset.y,
                offset.z,
                true,
            );
        }
    }

    /**
     * Detaches the camera associated with the current instance.
     *
     * @return {void}
     */
    public detach(): void {
        DetachCam(this.Handle);
    }

    /**
     * Deletes the camera associated with the current instance by calling
     * the DestroyCam function and passing the handle of the camera.
     *
     * @return {void}
     */
    public delete(): void {
        DestroyCam(this.Handle, false);
    }

    /**
     * Checks if a camera exists based on its handle.
     *
     * @return {boolean} True if the camera exists, otherwise false.
     */
    public exists(): boolean {
        return DoesCamExist(this.Handle);
    }
}
