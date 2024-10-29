const eventTimers: Record<string, number> = {};

export function eventTimer(eventName: string, delay: number): boolean {
    if (delay && delay > 0) {
        const currentTime: number = GetGameTimer();

        if ((eventTimers[eventName] || 0) > currentTime) {
            return false;
        }

        eventTimers[eventName] = currentTime + delay;
    }

    return true;
}
