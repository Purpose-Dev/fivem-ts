export function RateLimitPerPlayer(calls: number, interval: number) {
    return function (_target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const playerCallCounts = new Map<number, { count: number; timestamp: number }>();

        descriptor.value = function (playerId: number, ...args: unknown[]) {
            const now = Date.now();
            const playerData = playerCallCounts.get(playerId) || { count: 0, timestamp: now };

            if (now - playerData.timestamp > interval) {
                playerData.count = 0;
                playerData.timestamp = now;
            }

            if (playerData.count < calls) {
                playerData.count++;
                playerCallCounts.set(playerId, playerData);
                return originalMethod.apply(this, [playerId, ...args]);
            } else {
                console.warn(
                    `Rate limit exceeded for player ${playerId} on function: ${propertyKey}`,
                );
            }
        };

        console.log(`Registered rate limiter per player for function: ${propertyKey}`);
    };
}
