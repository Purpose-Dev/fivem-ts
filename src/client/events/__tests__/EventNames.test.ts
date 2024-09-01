import { ClientEventNames } from '../ClientEventNames';

describe('Client Event Names', () => {
    it('should contain all specified event names', () => {
        expect(ClientEventNames.CEventName).toBe('CEventName');
        expect(ClientEventNames.EntityDamaged).toBe('entityDamaged');
        expect(ClientEventNames.GameEventTriggered).toBe('gameEventTriggered');
        expect(ClientEventNames.MumbleConnected).toBe('mumbleConnected');
        expect(ClientEventNames.MumbleDisconnected).toBe('mumbleDisconnected');
        expect(ClientEventNames.OnClientResourceStart).toBe('onClientResourceStart');
        expect(ClientEventNames.OnClientResourceStop).toBe('onClientResourceStop');
        expect(ClientEventNames.OnResourceStart).toBe('onResourceStart');
        expect(ClientEventNames.OnResourceStarting).toBe('onResourceStarting');
        expect(ClientEventNames.OnResourceStop).toBe('onResourceStop');
        expect(ClientEventNames.PopulationPedCreating).toBe('populationPedCreating');
    });

    it('should execute correct case for each event name', () => {
        let result = '';
        switch (ClientEventNames.CEventName) {
            case ClientEventNames.CEventName:
                result = 'CEventName';
                break;
            default:
                result = 'Not implemented';
                break;
        }
        expect(result).toBe('CEventName');
    });

    it('should serialize enum to JSON', () => {
        const jsonEnum = JSON.stringify(ClientEventNames);
        expect(jsonEnum).toBe(
            '{"CEventName":"CEventName","EntityDamaged":"entityDamaged","GameEventTriggered":"gameEventTriggered","MumbleConnected":"mumbleConnected","MumbleDisconnected":"mumbleDisconnected","OnClientResourceStart":"onClientResourceStart","OnClientResourceStop":"onClientResourceStop","OnResourceStart":"onResourceStart","OnResourceStarting":"onResourceStarting","OnResourceStop":"onResourceStop","PopulationPedCreating":"populationPedCreating"}',
        );
    });

    it('should restore all enum keys and values from JSON', () => {
        const jsonEnum =
            '{"CEventName":"CEventName","EntityDamaged":"entityDamaged","GameEventTriggered":"gameEventTriggered","MumbleConnected":"mumbleConnected","MumbleDisconnected":"mumbleDisconnected","OnClientResourceStart":"onClientResourceStart","OnClientResourceStop":"onClientResourceStop","OnResourceStart":"onResourceStart","OnResourceStarting":"onResourceStarting","OnResourceStop":"onResourceStop","PopulationPedCreating":"populationPedCreating"}';
        const restoredEnum = JSON.parse(jsonEnum);
        expect(restoredEnum).toEqual(ClientEventNames);
    });
});
