import { ParticleEffectAsset } from '.';
import { Vector3 } from '../shared';
import { Color } from './utils';
import { InvertAxis } from './enums';

/**
 *
 * An abstract class representing a particle effect.
 *
 * This class provides methods and properties to manage and control
 * various aspects of a particle effect such as its asset, effect name,
 * offset, rotation, color, scale, range, and axis inversion.
 */
export abstract class ParticleEffect {
    private _handle: number;
    protected readonly _asset: ParticleEffectAsset;
    protected readonly _effectName: string;
    protected offset: Vector3;
    protected rotation: Vector3;
    protected color: Color;
    protected scale: number;
    protected range: number;
    protected invertAxis: InvertAxis;

    protected constructor(asset: ParticleEffectAsset, effectName: string) {
        this.Handle = -1;
        this._asset = asset;
        this._effectName = effectName;
    }

    public abstract start(): boolean;

    public get Handle(): number {
        return this._handle;
    }

    public set Handle(handle: number) {
        this._handle = handle;
    }

    public get AssetName(): string {
        return this._asset.AssetName;
    }

    public get Asset(): string {
        return this._asset.Asset;
    }

    public get EffectName(): string {
        return this._effectName;
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
            const offset = this.Offset;
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

    /**
     * Stops the particle effect if it is currently active.
     * This method will remove the particle effect associated with the current handle.
     *
     * @return {void}
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
     * @return {void}
     */
    public setParameter(parameterName: string, value: number): void {
        if (this.IsActive) {
            SetParticleFxLoopedEvolution(this.Handle, parameterName, value, false);
        }
    }

    /**
     * Returns a string representation of the asset and effect names.
     *
     * @return {string} A string combining the asset name and effect name separated by a backslash.
     */
    public toString(): string {
        return `${this.AssetName}\\${this.EffectName}`;
    }
}
