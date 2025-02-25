import { stringToArray, Vector3 } from '@fivem-ts/shared';
import { Audio, Color, HudColors, Notification, NotificationType, PointF, Size } from '..';

/**
 * Module to manage Screen on Game Env
 */
export namespace Screen {
	/**
	 * Retrieves the screen resolution as a `Size` object.
	 *
	 * @returns The screen resolution.
	 */
	export function getResolution(): Size {
		const [width, height]: [number, number] = GetScreenActiveResolution();
		return new Size(width, height);
	}

	/**
	 * Retrieves the height of the screen.
	 *
	 * @returns The height of the screen.
	 */
	export function getHeight(): number {
		return getResolution().height;
	}

	/**
	 * Retrieves the width of the screen.
	 *
	 * @returns The width of the screen.
	 */
	export function getWidth(): number {
		return getResolution().width;
	}

	/**
	 * Retrieves the scaled width of the screen based on the aspect ratio.
	 *
	 * @returns The scaled width of the screen.
	 */
	export function getScaledWidth(): number {
		return getHeight() * getAspectRatio();
	}

	/**
	 * Retrieves the aspect ratio of the screen.
	 *
	 * @returns The aspect ratio of the screen.
	 */
	export function getAspectRatio(): number {
		return GetAspectRatio(false);
	}

	/**
	 * Retrieves the scaled resolution of the screen as a `Size` object.
	 *
	 * @returns {Size} The scaled resolution.
	 */
	export function getScaledResolution(): Size {
		const height: number = getHeight();
		return new Size(height * getAspectRatio(), height);
	}

	/**
	 * Converts a 3D world position to a 2D screen position.
	 * @param position - The 3D position in the world.
	 * @param scaleWidth - Whether to scale the width based on the aspect ratio.
	 * @returns The corresponding 2D screen position.
	 */
	export function worldToScreen(position: Vector3, scaleWidth: boolean): PointF {
		const coords: [boolean, number, number] = GetScreenCoordFromWorldCoord(
			position.x,
			position.y,
			position.z,
		);

		return new PointF(
			Number(coords[0]) * (scaleWidth ? getScaledWidth() : getWidth()),
			coords[1] * getHeight(),
			coords[2],
		);
	}

	/**
	 * Displays a subtitle on the screen for a specified duration.
	 * @param message - The message to display as a subtitle.
	 * @param duration - The duration to display the subtitle, in milliseconds.
	 */
	export function showSubtitle(message: string, duration: number): void {
		const strings: string[] = stringToArray(message);

		BeginTextCommandPrint('CELL_EMAIL_BCON');

		strings.forEach((element: string): void => {
			AddTextComponentSubstringPlayerName(element);
		});

		EndTextCommandPrint(duration ?? 2500, true);
	}

	/**
	 * Displays help text on the screen for the current frame.
	 * @param message - The message to display as help text.
	 */
	export function displayHelpTextThisFrame(message: string): void {
		const strings: string[] = stringToArray(message);

		BeginTextCommandDisplayHelp('CELL_EMAIL_BCON');

		strings.forEach((element: string): void => {
			AddTextComponentSubstringPlayerName(element);
		});

		EndTextCommandDisplayHelp(0, false, false, -1);
	}

	/**
	 * Displays a notification on the screen.
	 * @param message - The message to display in the notification.
	 * @param {boolean} [blinking] - Whether the notification should blink.
	 * @returns The created notification.
	 */
	export function showNotification(message: string, blinking?: boolean): Notification {
		const strings: string[] = stringToArray(message);

		SetNotificationTextEntry('CELL_EMAIL_BCON');

		strings.forEach((element: string): void => {
			AddTextComponentSubstringPlayerName(element);
		});

		return new Notification(DrawNotification(blinking ?? false, true));
	}

	/**
	 * Displays an advanced notification on the screen.
	 * @param {string} message - The message to display in the notification.
	 * @param {string} title - The title of the notification.
	 * @param {string} subtitle - The subtitle of the notification.
	 * @param {string} iconSet - The icon set to use for the notification.
	 * @param {string} icon - The icon to display in the notification.
	 * @param [bgColor=HudColors.HudColourPauseBg] - The background color of the notification.
	 * @param [flashColor=Color.empty] - The flash color of the notification.
	 * @param [blinking=false] - Whether the notification should blink.
	 * @param [type=NotificationType.Default] - The type of the notification.
	 * @param [showInBrief=true] - Whether the notification should be shown in the brief.
	 * @param [sound=true] - Whether a sound should play when the notification is shown.
	 * @returns {Notification} The created notification.
	 */
	export function showAdvancedNotification(
		message: string,
		title: string,
		subtitle: string,
		iconSet: string,
		icon: string,
		bgColor = HudColors.HudColourPauseBg,
		flashColor = Color.empty,
		blinking = false,
		type = NotificationType.Default,
		showInBrief = true,
		sound = true,
	): Notification {
		const strings: string[] = stringToArray(message);

		SetNotificationTextEntry('CELL_EMAIL_BCON');

		strings.forEach((element: string): void => {
			AddTextComponentSubstringPlayerName(element);
		});

		SetNotificationBackgroundColor(bgColor.valueOf());

		if (flashColor !== Color.empty && blinking) {
			SetNotificationFlashColor(flashColor.r, flashColor.g, flashColor.b, flashColor.a);
		}

		if (sound) {
			Audio.playSoundFrontEnd('DELETE', 'HUD_DEATHMATCH_SOUNDSET');
		}

		SetNotificationMessage(iconSet, icon, true, type, title, subtitle);
		return new Notification(DrawNotification(blinking, showInBrief));
	}
}
