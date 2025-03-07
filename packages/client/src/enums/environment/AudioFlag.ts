/**
 * Enum representing various audio flags that can be used to control audio behaviors.
 * These flags can be used to modify audio settings, enable or disable specific audio
 * features and control how different types of audio are handled.
 *
 * @enum{string}
 */
export enum AudioFlag {
	ActivateSwitchWheelAudio = 'ActivateSwitchWheelAudio',
	AllowAmbientSpeechInSlowMo = 'AllowAmbientSpeechInSlowMo',
	AllowCutsceneOverScreenFade = 'AllowCutsceneOverScreenFade',
	AllowForceRadioAfterRetune = 'AllowForceRadioAfterRetune',
	AllowPainAndAmbientSpeechToPlayDuringCutscene = 'AllowPainAndAmbientSpeechToPlayDuringCutscene',
	AllowPlayerAIOnMission = 'AllowPlayerAIOnMission',
	AllowPoliceScannerWhenPlayerHasNoControl = 'AllowPoliceScannerWhenPlayerHasNoControl',
	AllowRadioDuringSwitch = 'AllowRadioDuringSwitch',
	AllowRadioOverScreenFade = 'AllowRadioOverScreenFade',
	AllowScoreAndRadio = 'AllowScoreAndRadio',
	AllowScriptedSpeechInSlowMo = 'AllowScriptedSpeechInSlowMo',
	AvoidMissionCompleteDelay = 'AvoidMissionCompleteDelay',
	DisableAbortConversationForDeathAndInjury = 'DisableAbortConversationForDeathAndInjury',
	DisableAbortConversationForRagdoll = 'DisableAbortConversationForRagdoll',
	DisableBarks = 'DisableBarks',
	DisableFlightMusic = 'DisableFlightMusic',
	DisableReplayScriptStreamRecording = 'DisableReplayScriptStreamRecording',
	EnableHeadsetBeep = 'EnableHeadsetBeep',
	ForceConversationInterrupt = 'ForceConversationInterrupt',
	ForceSeamlessRadioSwitch = 'ForceSeamlessRadioSwitch',
	ForceSniperAudio = 'ForceSniperAudio',
	FrontendRadioDisabled = 'FrontendRadioDisabled',
	HoldMissionCompleteWhenPrepared = 'HoldMissionCompleteWhenPrepared',
	IsDirectorModeActive = 'IsDirectorModeActive',
	IsPlayerOnMissionForSpeech = 'IsPlayerOnMissionForSpeech',
	ListenerReverbDisabled = 'ListenerReverbDisabled',
	LoadMPData = 'LoadMPData',
	MobileRadioInGame = 'MobileRadioInGame',
	OnlyAllowScriptTriggerPoliceScanner = 'OnlyAllowScriptTriggerPoliceScanner',
	PlayMenuMusic = 'PlayMenuMusic',
	PoliceScannerDisabled = 'PoliceScannerDisabled',
	ScriptedConvListenerMaySpeak = 'ScriptedConvListenerMaySpeak',
	SpeechDucksScore = 'SpeechDucksScore',
	SuppressPlayerScubaBreathing = 'SuppressPlayerScubaBreathing',
	WantedMusicDisabled = 'WantedMusicDisabled',
	WantedMusicOnMission = 'WantedMusicOnMission',
}
