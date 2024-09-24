import { Ped } from '.';

export class Player {
    protected pvp: boolean;
    protected ped: Ped;

    constructor(protected readonly owner: number) {
        this.PvpEnabled = true;
    }

    public get Owner(): number {
        return this.owner;
    }

    public get PvpEnabled(): boolean {
        return this.pvp;
    }

    public set PvpEnabled(enabled: boolean) {
        this.pvp = enabled;
        NetworkSetFriendlyFireOption(enabled);
        SetCanAttackFriendly(this.Owner, enabled, enabled);
    }

    public get Ped(): Ped {
        const pedId: number = PlayerPedId();

        if (typeof this.ped === 'undefined' || this.ped.Handle !== pedId) {
            this.ped = new Ped(pedId);
        }

        return this.ped;
    }

    public get Name(): string {
        return GetPlayerName(this.Owner);
    }
}
