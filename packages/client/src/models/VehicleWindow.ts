import { VehicleWindowIndex } from '@fivem-ts/shared';
import { Vehicle } from '.';

/**
 * Represents a vehicle window with various functionalities to manipulate and check the state of the window.
 */
export class VehicleWindow {
    /**
     * Creates an instance of the class.
     *
     * @param {Vehicle} owner - The vehicle to which the window belongs.
     * @param {VehicleWindowIndex} index - The index position of the window in the vehicle.
     */
    constructor(
        private owner: Vehicle,
        private index: VehicleWindowIndex,
    ) {}

    /**
     * Gets the owner of the vehicle.
     *
     * @return {Vehicle} The owner of the vehicle.
     */
    public get Owner(): Vehicle {
        return this.owner;
    }

    /**
     * Retrieves the current index of the vehicle window.
     *
     * @return {VehicleWindowIndex} The index of the vehicle window.
     */
    public get Index(): VehicleWindowIndex {
        return this.index;
    }

    /**
     * Sets the index of the vehicle window.
     * @param {VehicleWindowIndex} index - The index to set for the vehicle window.
     */
    public set Index(index: VehicleWindowIndex) {
        this.index = index;
    }

    /**
     * Checks whether the window of a vehicle is intact.
     *
     * @return {boolean} True if the vehicle window is intact, otherwise false.
     */
    public isIntact(): boolean {
        return IsVehicleWindowIntact(this.owner.Handle, this.index);
    }

    /**
     * Rolls up the current window.
     *
     * This method collapses the window associated with the
     * owner and index properties into a roll-up state.
     */
    public rollUp(): void {
        RollUpWindow(this.owner.Handle, this.index);
    }

    /**
     * Rolls down the window of the specified car.
     */
    public rollDown(): void {
        RollDownWindow(this.owner.Handle, this.index);
    }

    /**
     * Breaks the vehicle window associated with the specified owner and index.
     *
     * This method triggers the game native to smash the vehicle window based on the provided owner's handle and the window index.
     *
     */
    public break(): void {
        SmashVehicleWindow(this.owner.Handle, this.index);
    }

    /**
     * Smashes the vehicle window associated with this object.
     *
     * This method is responsible for invoking the command to smash the window
     * of the vehicle that is identified by the owner and index properties.
     *
     */
    public smash(): void {
        SmashVehicleWindow(this.owner.Handle, this.index);
    }

    /**
     * Repair a vehicle window
     *
     * @remarks
     * This method use a native coded to not work on vehicles of type: `CBike`, `Bmx`, `CBoat`, `CTrain` and `CSubmarine`.
     */
    public repair(): void {
        FixVehicleWindow(this.owner.Handle, this.index);
    }

    /**
     * Removes a vehicle window based on the owner's handle and window index.
     */
    public remove(): void {
        RemoveVehicleWindow(this.owner.Handle, this.index);
    }
}
