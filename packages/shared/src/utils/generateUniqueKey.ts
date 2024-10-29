export function generateUniqueKey(eventName: string, playerId?: number): string {
    const randomSuffix: number = Math.floor(Math.random() * 100000 + 1);
    return playerId ? `${eventName}:${randomSuffix}:${playerId}` : `${eventName}:${randomSuffix}`;
}
