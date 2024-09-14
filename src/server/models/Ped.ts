import { Entity, Vehicle } from '.';

/**
 * The `Ped` class represents a pedestrian entity.
 *
 * This class extends the `Entity` class and provides an interface for interacting with pedestrian entities.
 * The constructor takes the entity ID as a parameter and ensures the entity type is a pedestrian.
 *
 * @extends {Entity}
 */
export class Ped extends Entity {
    constructor(id: number) {
        if (!(GetEntityType(id) === 1)) {
            throw new Error('Entity type is not a ped');
        }
        super(id);
    }

    public get CurrentVehicle(): Vehicle {
        const vehicle: Vehicle = new Vehicle(GetVehiclePedIsIn(this.Id, false));
        return vehicle.exists() ? vehicle : null;
    }

    public get LastVehicle(): Vehicle {
        const vehicle: Vehicle = new Vehicle(GetVehiclePedIsIn(this.Id, true));
        return vehicle.exists() ? vehicle : null;
    }

    public get IsInVehicle(): boolean {
        return this.CurrentVehicle !== null;
    }

    public get IsAPlayer(): boolean {
        return IsPedAPlayer(this.Id);
    }

    public get IsHandcuffed(): boolean {
        return IsPedHandcuffed(this.Id);
    }

    public get IsRagdoll(): boolean {
        return IsPedRagdoll(this.Id);
    }

    public get IsStrafing(): boolean {
        return IsPedStrafing(this.Id);
    }

    public get IsUsingActionMode(): boolean {
        return IsPedUsingActionMode(this.Id);
    }

    // @todo: Add Methods related to Ped
}
