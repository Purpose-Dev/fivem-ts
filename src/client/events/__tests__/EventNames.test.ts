import { EventNames } from '../EventNames';

describe('Client Event Names', () => {
    it('should contain all specified event names', () => {
        expect(EventNames.CEventName).toBe('CEventName');
        expect(EventNames.EntityDamaged).toBe('entityDamaged');
        expect(EventNames.GameEventTriggered).toBe('gameEventTriggered');
        expect(EventNames.MumbleConnected).toBe('mumbleConnected');
        expect(EventNames.MumbleDisconnected).toBe('mumbleDisconnected');
        expect(EventNames.OnClientResourceStart).toBe('onClientResourceStart');
        expect(EventNames.OnClientResourceStop).toBe('onClientResourceStop');
        expect(EventNames.OnResourceStart).toBe('onResourceStart');
        expect(EventNames.OnResourceStarting).toBe('onResourceStarting');
        expect(EventNames.OnResourceStop).toBe('onResourceStop');
        expect(EventNames.PopulationPedCreating).toBe('populationPedCreating');
    });

    it('should execute correct case for each event name', () => {
        let result = '';
        switch (EventNames.CEventName) {
            case EventNames.CEventName:
                result = 'CEventName';
                break;
            default:
                result = 'Not implemented';
                break;
        }
        expect(result).toBe('CEventName');
    });

    it('should serialize enum to JSON', () => {
        const jsonEnum = JSON.stringify(EventNames);
        expect(jsonEnum).toBe(
            '{"CEventName":"CEventName","EntityDamaged":"entityDamaged","GameEventTriggered":"gameEventTriggered","MumbleConnected":"mumbleConnected","MumbleDisconnected":"mumbleDisconnected","OnClientResourceStart":"onClientResourceStart","OnClientResourceStop":"onClientResourceStop","OnResourceStart":"onResourceStart","OnResourceStarting":"onResourceStarting","OnResourceStop":"onResourceStop","PopulationPedCreating":"populationPedCreating"}',
        );
    });

    it('should restore all enum keys and values from JSON', () => {
        const jsonEnum =
            '{"CEventName":"CEventName","EntityDamaged":"entityDamaged","GameEventTriggered":"gameEventTriggered","MumbleConnected":"mumbleConnected","MumbleDisconnected":"mumbleDisconnected","OnClientResourceStart":"onClientResourceStart","OnClientResourceStop":"onClientResourceStop","OnResourceStart":"onResourceStart","OnResourceStarting":"onResourceStarting","OnResourceStop":"onResourceStop","PopulationPedCreating":"populationPedCreating"}';
        const restoredEnum = JSON.parse(jsonEnum);
        expect(restoredEnum).toEqual(EventNames);
    });
});
