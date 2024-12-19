import { Vector3 } from '@fivem-ts/shared';

/**
 * The current rendering gameplay camera
 */
export abstract class GameplayCamera {
    /**
     * Get the world position of gameplay camera.
     */
    public static get Position(): Vector3 {
        const coords: number[] = GetGameplayCamCoords();
        return new Vector3(coords[0], coords[1], coords[2]);
    }

    /**
     * Get the rotation of gameplay camera.
     */
    public static get Rotation(): Vector3 {
        const rot: number[] = GetGameplayCamRot(2);
        return new Vector3(rot[0], rot[1], rot[2]);
    }

    /**
     * Get the forward vector of gameplay camera.
     */
    public static get ForwardVector(): Vector3 {
        const rotation: Vector3 = this.Rotation.multiply(Math.PI / 180);
        const normalized: Vector3 = Vector3.normalize(
            new Vector3(
                -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
                Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
                Math.sin(rotation.x),
            ),
        );


        return new Vector3(normalized.x, normalized.y, normalized.z);
    }

    /**
     * Get the pitch of the gameplay camera relative to player.
     */
    public static get RelativePitch(): number {
        return GetGameplayCamRelativePitch();
    }

    /**
     * Set gameplay camera pitch relative to player.
     */
    public static set RelativePitch(pitch: number) {
        SetGameplayCamRelativePitch(pitch, 1);
    }

    /**
     * Get heading of gameplay camera.
     */
    public static get RelativeHeading(): number {
        return GetGameplayCamRelativeHeading();
    }

    /**
     * Get heading of gameplay camera.
     */
    public static set RelativeHeading(heading: number) {
        SetGameplayCamRelativeHeading(heading);
    }
}
