/**
 * A decorator to enforce a rate limit on a method, restricting the number of times it can be called by each player
 * within a specified time interval.
 *
 * @example
 * ```ts
 * class Game {
 *   // Allow each player to call the `performAction` method a maximum of 5 times per minute.
 *   @RateLimitPerPlayer(5, 60000)
 *   performAction(playerId: number, action: string) {
 *     console.log(`Action ${action} performed for player ${playerId}`)
 *   }
 * }
 *
 * const game = new Game();
 * game.performAction(1, 'test') // Action test performed for player 1
 * game.performAction(1, 'test') // Action test performed for player 1
 * game.performAction(1, 'test') // Action test performed for player 1
 * game.performAction(1, 'test') // Action test performed for player 1
 * game.performAction(1, 'test') // Action test performed for player 1
 * game.performAction(1, 'test') // Rate limit exceeded for player 1 on function: performAction
 * ```
 *
 * @param calls - The maximum number of allowed calls per player within the specified interval.
 * @param interval - The time window (in milliseconds) within which the call limit is enforced.
 *
 * @returns A method decorator that enforces the rate limit per player.
 *
 * @remarks
 * - The rate limit is enforced per player. If a player exceeds the allowed number of calls within the interval,
 *   subsequent calls will be ignored and a warning will be logged.
 * - The `playerId` is expected to be the first argument of the decorated method.
 */
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
