import { Maybe, VehicleWindowIndex } from '@fivem-ts/shared';
import { Vehicle, VehicleWindow } from '..';

/**
 * Represents a collection of windows for a specific vehicle.
 */
export class VehicleWindowCollection {
    private readonly _vehicleWindows: Map<VehicleWindowIndex, VehicleWindow> = new Map();

    constructor(private readonly owner: Vehicle) {
    }

    public get Owner(): Vehicle {
        return this.owner;
    }

    public get VehicleWindows(): Map<VehicleWindowIndex, VehicleWindow> {
        return this._vehicleWindows;
    }

    public get AreAllWindowsIntact(): boolean {
        return AreAllVehicleWindowsIntact(this.owner.Handle);
    }

    /**
     * Retrieves the window object associated with a specific index in the vehicle.
     *
     * @param {VehicleWindowIndex} index - The index of the window to retrieve.
     * @returns {VehicleWindow} The window object associated with the specified index.
     */
    public getWindow(index: VehicleWindowIndex): VehicleWindow | undefined {
        if (!this.VehicleWindows.has(index)) {
            this.VehicleWindows.set(index, new VehicleWindow(this.Owner, index));
        }

        return this.VehicleWindows.get(index);
    }

    /**
     * Retrieves all window objects in the vehicle.
     *
     * @returns {VehicleWindow[]} An array of VehicleWindow objects that exist in the vehicle.
     */
    public getAllWindows(): Maybe<VehicleWindow>[] {
        return Object.keys(VehicleWindowIndex)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
                const index = Number(key);
                if (this.hasWindow(index)) {
                    return this.getWindow(index);
                }
                return null;
            })
            .filter(window => window);
    }

    /**
     * Rolls down all the windows of the vehicle.
     *
     * @returns {void} No return value
     */
    public rollDownAllWindows(): void {
        this.getAllWindows().forEach((window: Maybe<VehicleWindow>) => {
            window?.rollDown();
        });
    }

    /**
     * Rolls up all windows in the vehicle.
     *
     * @returns {void}
     */
    public rollUpAllWindows(): void {
        this.getAllWindows().forEach((window: Maybe<VehicleWindow>) => {
            window?.rollUp();
        });
    }

    /**
     * Checks if a window of the vehicle exists based on the given window index.
     *
     * @param {VehicleWindowIndex} windowIndex - The index of the window to check.
     * @returns {boolean} True if the window exists, false otherwise.
     */
    public hasWindow(windowIndex: VehicleWindowIndex): boolean {
        switch (windowIndex) {
            case VehicleWindowIndex.FrontLeftWindow:
                return this.owner.Bones.hasBone('window_lf');
            case VehicleWindowIndex.FrontRightWindow:
                return this.owner.Bones.hasBone('window_rf');
            case VehicleWindowIndex.BackLeftWindow:
                return this.owner.Bones.hasBone('window_lf');
            case VehicleWindowIndex.BackRightWindow:
                return this.owner.Bones.hasBone('window_rr');
            case VehicleWindowIndex.ExtraWindow1:
                return this.owner.Bones.hasBone('window_lm');
            case VehicleWindowIndex.ExtraWindow2:
                return this.owner.Bones.hasBone('window_rm');
            case VehicleWindowIndex.ExtraWindow3:
                return this.owner.Bones.hasBone('windscreen');
            case VehicleWindowIndex.ExtraWindow4:
                return this.owner.Bones.hasBone('windscreen_r');
            default:
                return false;
        }
    }
}
