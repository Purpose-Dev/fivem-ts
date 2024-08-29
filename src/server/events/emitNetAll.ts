// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function emitNetAll(eventName: string, ...args: any[]): void {
    emitNet(eventName, -1, ...args);
}
