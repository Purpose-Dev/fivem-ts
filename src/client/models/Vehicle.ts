import {
    Entity,
    VehicleDoorCollection,
    VehicleModCollection,
    VehicleWheelCollection,
    VehicleWindowCollection,
} from '.';
import { Model } from '../Model';
import { VehicleClass } from '../enums';

export class Vehicle extends Entity {
    private doors: VehicleDoorCollection;
    private mods: VehicleModCollection;
    private wheels: VehicleWheelCollection;
    private windows: VehicleWindowCollection;

    constructor(id: number) {
        if (!(GetEntityType(id) !== 2)) {
            throw new Error(
                'Vehicle: Attempted to create an instance with an invalid entity type.',
            );
        }
        super(id);
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
     * @return {string} The formatted display name of the vehicle class.
     */
    public static getClassDisplayName(vehicleClass: VehicleClass): string {
        return `VEH_CLASS_${vehicleClass}`;
    }

    /**
     * Retrieves the vehicle class associated with a given vehicle model.
     *
     * @param {Model} vehicleModel - The model of the vehicle for which to retrieve the class.
     * @return {VehicleClass} The class of the specified vehicle model.
     */
    public static getModelClass(vehicleModel: Model): VehicleClass {
        return GetVehicleClassFromName(vehicleModel.Hash);
    }

    /**
     * Retrieves the display name for a given vehicle model.
     *
     * @param {Model} vehicleModel - The model of the vehicle for which the display name is to be retrieved.
     * @return {string} The display name of the vehicle model.
     */
    public static getModelDisplayName(vehicleModel: Model): string {
        return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
    }
}
