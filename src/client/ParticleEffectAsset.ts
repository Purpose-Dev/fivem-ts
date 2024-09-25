import { Vector3 } from '../shared';
import { InvertAxisFlags } from './enums';
import { Entity } from './models';

export class ParticleEffectAsset {
    constructor(private readonly assetName: string) {}

    public get AssetName(): string {
        return this.assetName;
    }

    public get Asset(): string {
        return this.assetName;
    }

    public get IsLoaded(): boolean {
        return HasNamedPtfxAssetLoaded(this.assetName);
    }

    public toString(): string {
        return this.assetName;
    }

    public markAsNoLongerNeeded(): void {
        RemoveNamedPtfxAsset(this.assetName);
    }

    public request(timeout: number): Promise<boolean> {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                resolve(this.IsLoaded);
            } else {
                RequestNamedPtfxAsset(this.assetName);
                const start: number = GetGameTimer();
                const interval: CitizenTimer = setInterval(() => {
                    if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                        clearInterval(interval);
                        resolve(this.IsLoaded);
                    }
                }, 0);
            }
        });
    }

    private setNextCall(): boolean {
        if (!this.IsLoaded) {
            RequestNamedPtfxAsset(this.assetName);
        } else {
            UseParticleFxAsset(this.assetName);
            return true;
        }

        return false;
    }

    public startLoopedAtCoords(
        effectName: string,
        position: Vector3,
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return Boolean(
            StartParticleFxLoopedAtCoord(
                effectName,
                position.x,
                position.y,
                position.z,
                rotation.x,
                rotation.y,
                rotation.z,
                scale,
                Boolean(invertAxisFlags & InvertAxisFlags.X),
                Boolean(invertAxisFlags & InvertAxisFlags.Y),
                Boolean(invertAxisFlags & InvertAxisFlags.Z),
                false,
            ),
        );
    }

    public startNonLoopedAtCoords(
        effectName: string,
        position: Vector3,
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return Boolean(
            StartParticleFxNonLoopedAtCoord(
                effectName,
                position.x,
                position.y,
                position.z,
                rotation.x,
                rotation.y,
                rotation.z,
                scale,
                Boolean(invertAxisFlags & InvertAxisFlags.X),
                Boolean(invertAxisFlags & InvertAxisFlags.Y),
                Boolean(invertAxisFlags & InvertAxisFlags.Z),
            ),
        );
    }

    public startNetworkedNonLoopedAtCoords(
        effectName: string,
        position: Vector3,
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return StartNetworkedParticleFxNonLoopedAtCoord(
            effectName,
            position.x,
            position.y,
            position.z,
            rotation.x,
            rotation.y,
            rotation.z,
            scale,
            Boolean(invertAxisFlags & InvertAxisFlags.X),
            Boolean(invertAxisFlags & InvertAxisFlags.Y),
            Boolean(invertAxisFlags & InvertAxisFlags.Z),
        );
    }

    public startLoopedOnEntity(
        effectName: string,
        entity: Entity,
        offset = new Vector3(0, 0, 0),
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return Boolean(
            StartParticleFxLoopedOnEntity(
                effectName,
                entity.Handle,
                offset.x,
                offset.y,
                offset.z,
                rotation.x,
                rotation.y,
                rotation.z,
                scale,
                Boolean(invertAxisFlags & InvertAxisFlags.X),
                Boolean(invertAxisFlags & InvertAxisFlags.Y),
                Boolean(invertAxisFlags & InvertAxisFlags.Z),
            ),
        );
    }

    public startNonLoopedOnEntity(
        effectName: string,
        entity: Entity,
        offset = new Vector3(0, 0, 0),
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return StartParticleFxNonLoopedOnEntity(
            effectName,
            entity.Handle,
            offset.x,
            offset.y,
            offset.z,
            rotation.x,
            rotation.y,
            rotation.z,
            scale,
            Boolean(invertAxisFlags & InvertAxisFlags.X),
            Boolean(invertAxisFlags & InvertAxisFlags.Y),
            Boolean(invertAxisFlags & InvertAxisFlags.Z),
        );
    }

    public startNetworkedLoopedOnEntity(
        effectName: string,
        entity: Entity,
        offset = new Vector3(0, 0, 0),
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return Boolean(
            StartNetworkedParticleFxLoopedOnEntity(
                effectName,
                entity.Handle,
                offset.x,
                offset.y,
                offset.z,
                rotation.x,
                rotation.y,
                rotation.z,
                scale,
                Boolean(invertAxisFlags & InvertAxisFlags.X),
                Boolean(invertAxisFlags & InvertAxisFlags.Y),
                Boolean(invertAxisFlags & InvertAxisFlags.Z),
            ),
        );
    }

    public startNetworkedNonLoopedOnEntity(
        effectName: string,
        entity: Entity,
        offset = new Vector3(0, 0, 0),
        rotation = new Vector3(0, 0, 0),
        scale = 1.0,
        invertAxis = { flags: InvertAxisFlags.None },
    ): boolean {
        if (!this.setNextCall()) {
            return false;
        }

        const invertAxisFlags = invertAxis.flags;
        UseParticleFxAsset(this.assetName);
        return StartNetworkedParticleFxNonLoopedOnEntity(
            effectName,
            entity.Handle,
            offset.x,
            offset.y,
            offset.z,
            rotation.x,
            rotation.y,
            rotation.z,
            scale,
            Boolean(invertAxisFlags & InvertAxisFlags.X),
            Boolean(invertAxisFlags & InvertAxisFlags.Y),
            Boolean(invertAxisFlags & InvertAxisFlags.Z),
        );
    }
}
