export function emitNetAll(eventName: string, ...args: any[]): void {
    emitNet(eventName, -1, ...args);
}
