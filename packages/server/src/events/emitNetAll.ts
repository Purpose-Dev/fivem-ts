export function emitNetAll(eventName: string, ...args: unknown[]): void {
	emitNet(eventName, -1, ...args);
}
