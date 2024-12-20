/**
 * The `Notification` class represents a game notification that can be hidden.
 */
export class Notification {
    /**
     * Creates an instance of the `Notification` class.
     *
     * @param handle - Identifier for the notification.
     */
    constructor(private readonly handle: number) {
        this.handle = handle;
    }

    /**
     * Hides the notification.
     *
     * This method will remove the notification associated with the handle from the game's notification area.
     *
     * @returns {void}
     */
    public hide(): void {
        RemoveNotification(this.handle);
    }
}
