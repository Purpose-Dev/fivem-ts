import { Nullable } from '@fivem-ts/shared';
import {
    Entity,
    Model,
    VehicleClass,
    VehicleDoorCollection,
    VehicleModCollection,
    VehicleWheelCollection,
    VehicleWindowCollection,
} from '..';

export class Vehicle extends Entity {
    private doors: Nullable<VehicleDoorCollection> = null;
    private mods: Nullable<VehicleModCollection> = null;
    private wheels: Nullable<VehicleWheelCollection> = null;
    private windows: Nullable<VehicleWindowCollection> = null;

    constructor(id: number) {
        if (!(GetEntityType(id) !== 2)) {
            throw new Error(
                'Vehicle: Attempted to create an instance with an invalid entity type.',
            );
        }

        super(id);
    }

    public get Doors(): VehicleDoorCollection {
        if (this.doors === null) {
            this.doors = new VehicleDoorCollection(this);
        }

        return this.doors;
    }

    public get Mods(): VehicleModCollection {
        if (this.mods === null) {
            this.mods = new VehicleModCollection(this);
        }

        return this.mods;
    }

    public get Wheels(): VehicleWheelCollection {
        if (this.wheels === null) {
            this.wheels = new VehicleWheelCollection(this);
        }

        return this.wheels;
    }

    public get Windows(): VehicleWindowCollection {
        if (this.windows === null) {
            this.windows = new VehicleWindowCollection(this);
        }

        return this.windows;
    }

    public get ClassDisplayName(): string {
        return Vehicle.getClassDisplayName(this.ClassType);
    }

    public get ClassType(): VehicleClass {
        return GetVehicleClass(this.handle);
    }

    // Static Methods
    /**
     * Returns a formatted string representing the display name of the vehicle class.
     *
     * @param {VehicleClass} vehicleClass - The enumeration value representing the class of the vehicle.
     *
     * @returns {string} The formatted display name of the vehicle class.
     */
    public static getClassDisplayName(vehicleClass: VehicleClass): string {
        return `VEH_CLASS_${vehicleClass}`;
    }

    /**
     * Retrieves the vehicle class associated with a given vehicle model.
     *
     * @param {Model} vehicleModel - The model of the vehicle for which to retrieve the class.
     *
     * @returns {VehicleClass} The class of the specified vehicle model.
     */
    public static getModelClass(vehicleModel: Model): VehicleClass {
        return GetVehicleClassFromName(vehicleModel.Hash);
    }

    /**
     * Retrieves the display name for a given vehicle model.
     *
     * @param {Model} vehicleModel - The model of the vehicle for which the display name is to be retrieved.
     *
     * @returns {string} The display name of the vehicle model.
     */
    public static getModelDisplayName(vehicleModel: Model): string {
        return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
    }
}
