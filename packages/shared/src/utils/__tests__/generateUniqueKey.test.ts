import { generateUniqueKey } from '../generateUniqueKey';

describe('generateUniqueKey', () => {
	it('should generate a key containing the event name and a random number', () => {
		const eventName = 'eventStart';
		const key = generateUniqueKey(eventName);
		expect(key).toMatch(new RegExp(`^${eventName}:[1-9][0-9]{0,4}$`));
	});

	it('should generate a key containing the event name, a random number, and the player ID if provided', () => {
		const eventName = 'eventStart';
		const playerId = 42;
		const key = generateUniqueKey(eventName, playerId);
		expect(key).toMatch(new RegExp(`^${eventName}:[1-9][0-9]{0,4}:${playerId}$`));
	});

	it('should generate unique keys for the same event name', () => {
		const eventName = 'eventStart';
		const key1 = generateUniqueKey(eventName);
		const key2 = generateUniqueKey(eventName);
		expect(key1).not.toBe(key2);
	});

	it('should generate unique keys for the same event name and player ID', () => {
		const eventName = 'eventStart';
		const playerId = 42;
		const key1 = generateUniqueKey(eventName, playerId);
		const key2 = generateUniqueKey(eventName, playerId);
		expect(key1).not.toBe(key2);
	});
});
