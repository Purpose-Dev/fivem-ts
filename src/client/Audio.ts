import { Vector3 } from '../shared';
import { AudioFlag } from './enums';

/**
 * The `Audio` namespace provides utility functions for managing and controlling audio in game environment.
 */
export namespace Audio {
    /**
     * A cached music file currently being played or controlled.
     */
    export let cachedMusicFile: string;

    /**
     * Plays a sound at a specific 3D position.
     *
     * @param position - The 3D position where the sound should be played.
     * @param sound - The name of the sound to play.
     * @param audioRef - An optional audio reference for the sound.
     * @param networked - Specifies if the sound should be networked across clients. Default is `false`.
     * @returns The ID of the sound that was played.
     */
    export function playSoundAt(
        position: Vector3,
        sound: string,
        audioRef?: string,
        networked?: boolean,
    ): number {
        PlaySoundFromCoord(
            -1,
            sound,
            position.x,
            position.y,
            position.z,
            audioRef ?? null,
            networked ?? false,
            0,
            false,
        );

        return GetSoundId();
    }

    /**
     * Plays a sound in the front-end audio context.
     *
     * @param sound - The name of the sound to play.
     * @param audioRef - An optional audio reference for the sound.
     * @returns The ID of the sound that was played.
     */
    export function playSoundFrontEnd(sound: string, audioRef?: string): number {
        PlaySoundFrontend(-1, sound, audioRef ?? null, false);
        return GetSoundId();
    }

    /**
     * Stops a sound by its ID.
     *
     * @param soundId - The ID of the sound to stop.
     */
    export function stopSound(soundId: number): void {
        StopSound(soundId);
    }

    /**
     * Releases a sound ID, freeing the associated resources.
     *
     * @param soundId - The ID of the sound to release.
     */
    export function releaseSound(soundId: number): void {
        ReleaseSoundId(soundId);
    }

    /**
     * Checks if a sound has finished playing.
     *
     * @param soundId - The ID of the sound to check.
     * @returns `true` if the sound has finished playing, otherwise `false`.
     */
    export function hasSoundFinished(soundId: number): boolean {
        return HasSoundFinished(soundId);
    }

    /**
     * Sets an audio flag, which controls various audio-related behaviors.
     *
     * @param flag - The audio flag to set.
     * @param toggle - `true` to enable the flag, `false` to disable it.
     */
    export function setAudioFlag(flag: AudioFlag, toggle: boolean): void {
        SetAudioFlag(flag.valueOf(), toggle);
    }

    /**
     * Plays a sound in the front-end audio context and immediately releases its ID.
     *
     * @param soundFile - The name of the sound file to play.
     * @param audioRef - An optional audio reference for the sound.
     */
    export function playSound(soundFile: string, audioRef?: string): void {
        releaseSound(playSoundFrontEnd(soundFile, audioRef));
    }

    /**
     * Plays a music file, stopping any previously cached music.
     *
     * @param musicFile - The name of the music file to play.
     */
    export function playMusic(musicFile: string): void {
        if (cachedMusicFile !== null) {
            CancelMusicEvent(cachedMusicFile);
        }
        cachedMusicFile = musicFile;
        TriggerMusicEvent(musicFile);
    }

    /**
     * Stops playing the specified music file or the currently cached music if no file is specified.
     *
     * @param musicFile - The name of the music file to stop. If not provided, the cached music file will be stopped.
     */
    export function stopMusic(musicFile?: string): void {
        if (musicFile === null) {
            if (cachedMusicFile !== null) {
                CancelMusicEvent(cachedMusicFile);
                cachedMusicFile = null;
            }
        } else {
            CancelMusicEvent(musicFile);
        }
    }
}
