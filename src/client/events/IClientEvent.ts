export interface IClientEvent {
    CEventName: (entities: number[], eventEntity: number, data: any[]) => void;
    entityDamaged: (victim: number, culprit: number, weapon: number, baseDamage: number) => void;
    gameEventTriggered: (name: string, data: number[]) => void;
    mumbleConnected: (address: string, reconnecting: boolean) => void;
    mumbleDisconnected: (address: string) => void;
    onClientResourceStart: (resource: string) => void;
    onClientResourceStop: (resource: string) => void;
    onResourceStart: (resource: string) => void;
    onResourceStarting: (resource: string) => void;
    onResourceStop: (resource: string) => void;
    populationPedCreating: (
        x: number,
        y: number,
        z: number,
        model: number,
        overrideCalls: {
            setModel: any;
            setPosition: any;
        },
    ) => void;
}
