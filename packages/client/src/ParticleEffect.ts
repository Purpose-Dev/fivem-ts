import { Vector3 } from '@fivem-ts/shared';
import { Color, InvertAxis, InvertAxisFlags, ParticleEffectAsset } from '.';

/**
 *
 * An abstract class representing a particle effect.
 *
 * This class provides methods and properties to manage and control
 * various aspects of a particle effect such as its asset, effect name,
 * offset, rotation, color, scale, range, and axis inversion.
 */
export abstract class ParticleEffect {
    private handle: number;
    protected readonly asset: ParticleEffectAsset;
    protected readonly effectName: string;
    protected offset: Vector3 = new Vector3(0, 0, 0);
    protected rotation: Vector3 = new Vector3(0, 0, 0);
    protected color: Color = Color.empty;
    protected scale = 1.0;
    protected range = 0.0;
    protected invertAxis: InvertAxis = {
        flags: InvertAxisFlags.None,
    };

    protected constructor(asset: ParticleEffectAsset, effectName: string) {
        this.handle = -1;
        this.asset = asset;
        this.effectName = effectName;
    }

    public get Handle(): number {
        return this.handle;
    }

    public set Handle(value: number) {
        this.handle = value;
    }

    public get AssetName(): string {
        return this.asset.AssetName;
    }

    public get EffectName(): string {
        return this.effectName;
    }

    public get Offset(): Vector3 {
        return this.offset;
    }

    public set Offset(offset: Vector3) {
        this.offset = offset;
    }

    public get Rotation(): Vector3 {
        return this.rotation;
    }

    public set Rotation(rotation: Vector3) {
        this.rotation = rotation;
        if (this.IsActive) {
            const offset: Vector3 = this.Offset;
            SetParticleFxLoopedOffsets(
                this.Handle,
                offset.x,
                offset.y,
                offset.z,
                rotation.x,
                rotation.y,
                rotation.z,
            );
        }
    }

    public get Color(): Color {
        return this.color;
    }

    public set Color(color: Color) {
        this.color = color;
    }

    public get Scale(): number {
        return this.scale;
    }

    public set Scale(scale: number) {
        this.scale = scale;
    }

    public get Range(): number {
        return this.range;
    }

    public set Range(range: number) {
        this.range = range;
        SetParticleFxLoopedRange(this.Handle, range);
    }

    public get InvertAxis(): InvertAxis {
        return this.invertAxis;
    }

    public set InvertAxis(invertAxis: InvertAxis) {
        this.invertAxis = invertAxis;
        if (this.IsActive) {
            this.stop();
            this.start();
        }
    }

    public get IsActive(): boolean {
        return this.Handle !== -1 && DoesParticleFxLoopedExist(this.Handle);
    }

    public abstract start(): boolean;

    /**
     * Stops the particle effect if it is currently active.
     * This method will remove the particle effect associated with the current handle.
     *
     * @returns {void}
     */
    public stop(): void {
        if (this.IsActive) {
            RemoveParticleFx(this.Handle, false);
        }
        this.Handle = -1;
    }

    /**
     * Sets the value of a specific parameter for the particle effect.
     *
     * @param {string} parameterName - The name of the parameter to set.
     * @param {number} value - The value to set for the specified parameter.
     *
     * @returns {void}
     */
    public setParameter(parameterName: string, value: number): void {
        if (this.IsActive) {
            SetParticleFxLoopedEvolution(this.Handle, parameterName, value, false);
        }
    }

    /**
     * Returns a string representation of the asset and effect names.
     *
     * @returns {string} A string combining the asset name and effect name separated by a backslash.
     */
    public toString(): string {
        return `${this.AssetName}\\${this.EffectName}`;
    }
}
