import { Game } from '.';
import { Vector3, VehiclesHash } from '../shared';

/**
 * Class to create and manage entity models.
 */
export class Model {
    private readonly hash: number;

    constructor(hash: number | string) {
        if (typeof hash === 'string') {
            this.hash = Game.generateHash(hash);
        } else {
            this.hash = hash;
        }
    }

    /**
     * Gets hash of the model
     *
     * @returns {number} The hash key
     */
    public get Hash(): number {
        return this.hash;
    }

    /**
     * Gets if the model is valid or not.
     *
     * @returns {boolean} Whether this model is valid.
     */
    public get IsValid(): boolean {
        return IsModelValid(this.hash);
    }

    /**
     * Gets if the model is in cd image or not.
     *
     * @returns {boolean} Whether this model is in cd image.
     */
    public get IsInCdImage(): boolean {
        return IsModelInCdimage(this.hash);
    }

    /**
     * Gets if the model is loaded or not.
     *
     * @returns {boolean} Whether this model is loaded.
     */
    public get IsLoaded(): boolean {
        return HasModelLoaded(this.hash);
    }

    /**
     * Gets if the model collision is loaded or not.
     *
     * @returns {boolean} Whether this model collision is loaded.
     */
    public get IsCollisionLoaded(): boolean {
        return HasCollisionForModelLoaded(this.hash);
    }

    /**
     * Gets if the model is a bicycle or not.
     *
     * @returns {boolean} Whether this model is a bicycle.
     */
    public get IsBicycle(): boolean {
        return IsThisModelABicycle(this.hash);
    }

    /**
     * Gets if the model is a motorbike or not.
     *
     * @returns {boolean} Whether this model is a motorbike.
     */
    public get IsBike(): boolean {
        return IsThisModelABike(this.hash);
    }

    /**
     * Gets if the model is a boat or not.
     *
     * @returns {boolean} Whether this model is a boat.
     */
    public get IsBoat(): boolean {
        return IsThisModelABoat(this.hash);
    }

    /**
     * Gets if the model is a car or not.
     *
     * @returns {boolean} Whether this model is a car.
     */
    public get IsCar(): boolean {
        return IsThisModelACar(this.hash);
    }

    /**
     * Gets if the model is a helicopter or not.
     *
     * @returns {boolean} Whether this model is a helicopter.
     */
    public get IsHelicopter(): boolean {
        return IsThisModelAHeli(this.hash);
    }

    /**
     * Gets if the model is a plane or not.
     *
     * @returns {boolean} Whether this model is a plane.
     */
    public get IsPlane(): boolean {
        return IsThisModelAPlane(this.hash);
    }

    /**
     * Gets if the model is a quadbike or not.
     *
     * @returns {boolean} Whether this model is a quadbike.
     */
    public get IsQuadbike(): boolean {
        return IsThisModelAQuadbike(this.hash);
    }

    /**
     * Gets if the model is a train or not.
     *
     * @returns {boolean} Whether this model is a train.
     */
    public get IsTrain(): boolean {
        return IsThisModelATrain(this.hash);
    }

    /**
     * Gets if the model is a Cargobob or not.
     *
     * @returns {boolean} Whether this model is a Cargobob.
     */
    public get IsVehicle(): boolean {
        return IsModelAVehicle(this.hash);
    }

    public get IsCargobob(): boolean {
        if (this.IsHelicopter) {
            return (
                this.hash === VehiclesHash.Cargobob ||
                this.hash === VehiclesHash.Cargobob ||
                this.hash === VehiclesHash.Cargobob3 ||
                this.hash === VehiclesHash.Cargobob4
            );
        }

        return false;
    }

    /**
     * Gets if the model is a Ped or not.
     *
     * @returns Whether this model is a Ped.
     */
    public get IsPed(): boolean {
        return IsModelAPed(this.hash);
    }

    /**
     * Gets if the model is a prop or not.
     *
     * @returns Whether this model is a prop.
     */
    public get IsProp(): boolean {
        return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
    }

    /**
     * Gets the model dimensions.
     *
     * @returns This model dimensions.
     */
    public get Dimensions(): Vector3 {
        const [min, max]: [number[], number[]] = GetModelDimensions(this.hash);
        const right = new Vector3(min[0], min[1], min[2]);
        const left = new Vector3(max[0], max[1], max[2]);
        return Vector3.subtract(left, right);
    }

    /**
     * Request and load the model with a specified timeout. Advised timeout - 1000.
     *
     * @param timeout {number} Maximum allowed time for model to load.
     *
     * @returns {Promise<boolean>}
     */
    public request(timeout: number): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
                resolve(false);
            }

            RequestModel(this.Hash);
            const start: number = GetGameTimer();
            const interval = setInterval(() => {
                if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                    clearInterval(interval);
                    this.markAsNoLongerNeeded();
                    resolve(this.IsLoaded);
                }
            }, 0);
        });
    }

    /**
     * Sets the model as no longer needed allowing the game engine to free memory.
     */
    public markAsNoLongerNeeded(): void {
        SetModelAsNoLongerNeeded(this.hash);
    }
}
