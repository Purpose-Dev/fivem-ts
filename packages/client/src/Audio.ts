import { Nullable, Vector3 } from '@fivem-ts/shared';
import { AudioFlag } from '.';

/**
 * The `Audio` module provides utility functions for managing and controlling audio in game environment.
 */
export namespace Audio {
    /**
     * A cached music file currently being played or controlled.
     */
    export let cachedMusicFile: Nullable<string> = null;

    /**
     * Plays a sound at a specific 3D position.
     *
     * @param position {Vector3} - The 3D position where the sound should be played.
     * @param sound {string} - The name of the sound to play.
     * @param audioRef {string} - An optional audio reference for the sound.
     * @param networked {boolean} - Specifies if the sound should be networked across clients. Default is `false`.
     * @param range {number} - Range of audio
     *
     * @returns {number} The ID of the sound that was played.
     */
    export function playSoundAt(
        position: Vector3,
        sound: string,
        audioRef?: string,
        networked?: boolean,
        range?: number,
    ): number {
        PlaySoundFromCoord(
            -1,
            sound,
            position.x,
            position.y,
            position.z,
            audioRef ?? '',
            networked ?? false,
            range ?? 0,
            false,
        );

        return GetSoundId();
    }

    /**
     * Plays a sound in the front-end audio context.
     *
     * @param sound {string} - The name of the sound to play.
     * @param audioRef {string} - An optional audio reference for the sound.
     *
     * @returns {number} The ID of the sound that was played.
     */
    export function playSoundFrontEnd(sound: string, audioRef?: string): number {
        PlaySoundFrontend(-1, sound, audioRef ?? '', false);
        return GetSoundId();
    }

    /**
     * Stops a sound by its ID.
     *
     * @param soundId {number} - The ID of the sound to stop.
     *
     * @returns {void}
     */
    export function stopSound(soundId: number): void {
        StopSound(soundId);
    }

    /**
     * Releases a sound ID, freeing the associated resources.
     *
     * @param soundId {number} - The ID of the sound to release.
     *
     * @returns {void}
     */
    export function releaseSound(soundId: number): void {
        ReleaseSoundId(soundId);
    }

    /**
     * Checks if a sound has finished playing.
     *
     * @param soundId {number} - The ID of the sound to check.
     *
     * @returns {boolean} `true` if the sound has finished playing, otherwise `false`.
     */
    export function hasSoundFinished(soundId: number): boolean {
        return HasSoundFinished(soundId);
    }

    /**
     * Sets an audio flag, which controls various audio-related behaviors.
     *
     * @param flag {AudioFlag} - The audio flag to set.
     * @param toggle {boolean} - `true` to enable the flag, `false` to disable it.
     *
     * @returns {void}
     */
    export function setAudioFlag(flag: AudioFlag, toggle: boolean): void {
        SetAudioFlag(flag.valueOf(), toggle);
    }

    /**
     * Plays a sound in the front-end audio context and immediately releases its ID.
     *
     * @param soundFile {string} - The name of the sound file to play.
     * @param audioRef {string} - An optional audio reference for the sound.
     *
     * @returns {void}
     */
    export function playSound(soundFile: string, audioRef?: string): void {
        releaseSound(playSoundFrontEnd(soundFile, audioRef));
    }

    /**
     * Plays a music file, stopping any previously cached music.
     *
     * @param musicFile {string} - The name of the music file to play.
     *
     * @returns {void}
     */
    export function playMusic(musicFile: string): void {
        stopMusic();
        cachedMusicFile = musicFile;
        TriggerMusicEvent(musicFile);
    }

    /**
     * Stops playing the specified music file or the currently cached music if no file is specified.
     *
     * @param musicFile {string} - The name of the music file to stop. If not provided, the cached music file will be stopped.
     *
     * @returns {void}
     */
    export function stopMusic(musicFile?: string): void {
        if (musicFile === undefined) {
            if (cachedMusicFile !== null) {
                CancelMusicEvent(cachedMusicFile);
                cachedMusicFile = null;
            }
        } else {
            CancelMusicEvent(musicFile);
        }
    }
}
