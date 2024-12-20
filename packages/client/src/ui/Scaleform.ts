import { Vector3 } from '@fivem-ts/shared';
import { PointF } from '..';

/**
 * Represents a Scaleform in FiveM.
 *
 * Scaleform's are graphical elements that can be used to render UI components, notifications, or other visual effects in the game.
 * This class provides methods to manage and render scaleform's in different contexts such as 2D, 3D, or screen-space.
 *
 * @example
 * ```ts
 * import { Scaleform } from '@fivem-ts/client';
 *
 * const scaleform = new Scaleform("MIDSIZED_MESSAGE");
 *
 * scaleform.callFunction("SHOW_MIDSIZED_MESSAGE", ["Title", "Message"]);
 *
 * setTick(async () => {
 *  await scaleform.render2D();
 * });
 * ```
 */
export class Scaleform {
    protected handle: number;
    protected name: string;
    protected loaded: boolean = false;

    /**
     * Creates a new Scaleform instance.
     *
     * @param name The name of the scaleform movie to be loaded.
     */
    constructor(name: string) {
        this.handle = RequestScaleformMovie(name);
        this.name = name;
    }

    /**
     * Gets the handle of the scaleform.
     *
     * @returns The handle of the scaleform.
     */
    public get Handle(): number {
        return this.handle;
    }

    /**
     * Checks if the scaleform handle is valid.
     *
     * @returns `true` if the handle is not zero, indicating a valid handle; otherwise `false`.
     */
    public get IsValid(): boolean {
        return this.handle !== 0;
    }

    /**
     * Checks if the scaleform is loaded.
     *
     * @returns `true` if the scaleform is loaded; otherwise `false`.
     */
    public get IsLoaded(): boolean {
        if (!this.loaded) {
            this.loaded = HasScaleformMovieLoaded(this.handle);
        }

        return this.loaded;
    }

    /**
     * Disposes of the scaleform, freeing associated memory.
     *
     * This method should be called when the scaleform is no longer needed.
     */
    public dispose(): void {
        if (this.IsLoaded) {
            SetScaleformMovieAsNoLongerNeeded(this.handle);
            this.loaded = false;
        }
    }

    /**
     * Sets a duration for which the scaleform should be displayed.
     *
     * This is useful for displaying temporary messages or notifications.
     *
     * @param duration Duration in milliseconds for which the scaleform should be displayed.
     */
    public setDuration(duration: number): void {
        if (duration <= 0) {
            return;
        }

        const start: number = GetGameTimer();
        const interval: CitizenTimer = setInterval(async (): Promise<void> => {
            if (GetGameTimer() - start < duration) {
                await this.render2D();
            } else {
                clearInterval(interval);
            }
        }, 0);
    }

    /**
     * Calls a function/method on the scaleform movie.
     *
     * @param name Name of the function to call.
     * @param args Additional arguments to pass to the function.
     */
    public callFunction(name: string, ...args: unknown[]): void {
        BeginScaleformMovieMethod(this.handle, name);
        args.forEach((arg: unknown): void => {
            switch (typeof arg) {
                case 'boolean':
                    PushScaleformMovieFunctionParameterBool(arg);
                    break;
                case 'number':
                    if (Number.isInteger(arg)) {
                        PushScaleformMovieFunctionParameterInt(arg);
                    } else {
                        PushScaleformMovieFunctionParameterFloat(arg);
                    }
                    break;
                case 'string':
                    PushScaleformMovieFunctionParameterString(arg);
                    break;
                default:
                    throw new Error(
                        `Unknown argument type [${typeof arg}] passed to scaleform with handle [${this.handle}]`,
                    );
            }
        });
        EndScaleformMovieMethod();
    }

    /**
     * Renders the scaleform as a fullscreen 2D element.
     *
     * This method should be called to draw the scaleform on the screen.
     *
     * @returns A promise that resolves when the rendering is complete.
     */
    public render2D(): Promise<void> {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                DrawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, 0);
            } else {
                this.load().then(() => {});
            }
            resolve();
        });
    }

    /**
     * Renders the scaleform in screen space with specified location and size.
     *
     * @param location The location on the screen where the scaleform should be rendered.
     * @param size The size of the scaleform on the screen.
     * @returns A promise that resolves when the rendering is complete.
     */
    public render2DScreenSpace(location: PointF, size: PointF): Promise<void> {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                const x: number = location.x;
                const y: number = location.y;
                const width: number = size.x;
                const height: number = size.y;

                DrawScaleformMovie(
                    this.handle,
                    x + width / 2,
                    y + height / 2,
                    width,
                    height,
                    255,
                    255,
                    255,
                    255,
                    0,
                );
            } else {
                this.load().then(() => {});
            }
            resolve();
        });
    }

    /**
     * Renders the scaleform in a 3D space.
     *
     * @param position The position in 3D space where the scaleform should be rendered.
     * @param rotation The rotation of the scaleform in 3D space.
     * @param scale The scale of the scaleform in 3D space.
     * @returns A promise that resolves when the rendering is complete.
     */
    public render3D(position: Vector3, rotation: Vector3, scale: Vector3): Promise<void> {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                DrawScaleformMovie_3dNonAdditive(
                    this.handle,
                    position.x,
                    position.y,
                    position.z,
                    rotation.x,
                    rotation.y,
                    rotation.z,
                    2,
                    2,
                    1,
                    scale.x,
                    scale.y,
                    scale.z,
                    2,
                );
            } else {
                this.load().then(() => {});
            }
            resolve();
        });
    }

    /**
     * Renders the scaleform in a 3D space with additive blending.
     *
     * @param position The position in 3D space where the scaleform should be rendered.
     * @param rotation The rotation of the scaleform in 3D space.
     * @param scale The scale of the scaleform in 3D space.
     * @returns A promise that resolves when the rendering is complete.
     */
    public render3DAdditive(position: Vector3, rotation: Vector3, scale: Vector3): Promise<void> {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                DrawScaleformMovie_3d(
                    this.handle,
                    position.x,
                    position.y,
                    position.z,
                    rotation.x,
                    rotation.y,
                    rotation.z,
                    2,
                    2,
                    1,
                    scale.x,
                    scale.y,
                    scale.z,
                    2,
                );
            } else {
                this.load().then(() => {});
            }
            resolve();
        });
    }

    /**
     * Loads the scaleform and waits until it is ready to be rendered.
     *
     * @returns A promise that resolves with `true` if the scaleform is successfully loaded; otherwise `false` after 5 seconds.
     */
    public load(): Promise<boolean> {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                resolve(true);
            } else {
                const start: number = GetGameTimer();
                const interval: CitizenTimer = setInterval((): void => {
                    if (this.IsLoaded) {
                        clearInterval(interval);
                        resolve(true);
                    } else if (GetGameTimer() - start > 5000) {
                        clearInterval(interval);
                        console.debug(`^1[fivem-ts] Could not load scaleform ${this.name}!^7`);
                        resolve(false);
                    }
                }, 0);
            }
        });
    }
}
