import { Nullable } from '@fivem-ts/shared';
import { Ped } from '.';

/**
 * Represents a player entity.
 */
export class Player {
    protected pvp = false;
    protected ped: Nullable<Ped> = null;

    constructor(private readonly owner: number) {
        this.PvpEnabled = true;
    }

    /**
     * Gets the owner identifier.
     *
     * @returns {number} The identifier of the owner.
     */
    public get Owner(): number {
        return this.owner;
    }

    /**
     * Determines whether PvP mode is enabled.
     *
     * @returns {boolean} Returns true if PvP is enabled, otherwise false.
     */
    public get PvpEnabled(): boolean {
        return this.pvp;
    }

    /**
     * Sets the PvP enabled status.
     *
     * @param {boolean} value - A boolean indicating whether PvP should be enabled (true) or disabled (false).
     */
    public set PvpEnabled(value: boolean) {
        this.pvp = value;
        NetworkSetFriendlyFireOption(value);
        SetCanAttackFriendly(this.Owner, value, value);
    }

    /**
     * Retrieves the Ped instance associated with the current PlayerPedId.
     * If the Ped handle has changed, a new Ped instance is created.
     *
     * @returns {Nullable<Ped>} The current Ped instance, or null if none exists.
     */
    public get Ped(): Nullable<Ped> {
        const pedId: number = PlayerPedId();

        if (this.ped === null || this.ped.Handle !== pedId) {
            this.ped = new Ped(pedId);
        }

        return this.ped;
    }

    /**
     * Retrieves the name of the player associated with the current owner.
     *
     * @returns {string} The name of the player.
     */
    public get Name(): string {
        return GetPlayerName(this.Owner);
    }
}
