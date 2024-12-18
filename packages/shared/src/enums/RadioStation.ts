/**
 * The `RadioStation` enum represents radio stations available.
 * Each radio station corresponds to a unique identifier string.
 * This enum can be utilized to manage or select radio stations.
 *
 * Enum members:
 * - `LosSantosRockRadio`: Represents the Los Santos Rock Radio station.
 * - `NonStopPopFM`: Represents the Non-Stop Pop FM station.
 * - `RadioLosSantos`: Represents the Radio Los Santos station.
 * - `ChannelX`: Represents the Channel X Punk Rock station.
 * - `WestCoastTalkRadio`: Represents the West Coast Talk Radio talk show station.
 * - `RebelRadio`: Represents the Rebel Radio Country station.
 * - `SoulwaxFM`: Represents the Soulwax FM Dance station.
 * - `EastLosFM`: Represents the East Los FM Mexican station.
 * - `WestCoastClassics`: Represents the West Coast Classics Hip-Hop station.
 * - `BlueArk`: Represents the Blue Ark Reggae station.
 * - `WorldwideFM`: Represents the Worldwide FM Jazz station.
 * - `FlyLoFM`: Represents the FlyLo FM Dance station.
 * - `TheLowdown`: Represents The Lowdown Motown station.
 * - `TheLab`: Represents The Lab Radio station.
 * - `RadioMirrorPark`: Represents the Radio Mirror Park Indie Music station.
 * - `Space`: Represents the Space Funk station.
 * - `VinewoodBoulevardRadio`: Represents the Vinewood Boulevard Radio 90's Rock station.
 * - `BlondedLosSantos`: Represents the Blonded Los Santos station.
 * - `BlaineCountyRadio`: Represents the Blaine County Radio talk show station.
 * - `LosSantosUndergroundRadio`: Represents the Los Santos Underground Radio station.
 * - `Off`: Represents a state where the radio is turned off.
 *
 * @enum{string}
 */
export enum RadioStation {
    LosSantosRockRadio = 'RADIO_01_CLASS_ROCK',
    NonStopPopFM = 'RADIO_02_POP',
    RadioLosSantos = 'RADIO_03_HIPHOP_NEW',
    ChannelX = 'RADIO_04_PUNK',
    WestCoastTalkRadio = 'RADIO_05_TALK_01',
    RebelRadio = 'RADIO_06_COUNTRY',
    SoulwaxFM = 'RADIO_07_DANCE_01',
    EastLosFM = 'RADIO_08_MEXICAN',
    WestCoastClassics = 'RADIO_09_HIPHOP_OLD',
    BlueArk = 'RADIO_12_REGGAE',
    WorldwideFM = 'RADIO_13_JAZZ',
    FlyLoFM = 'RADIO_14_DANCE_02',
    TheLowdown = 'RADIO_15_MOTOWN',
    TheLab = 'RADIO_20_THELAB',
    RadioMirrorPark = 'RADIO_16_SILVERLAKE',
    Space = 'RADIO_17_FUNK',
    VinewoodBoulevardRadio = 'RADIO_18_90S_ROCK',
    BlondedLosSantos = 'RADIO_21_DLC_XM17',
    BlaineCountyRadio = 'RADIO_11_TALK_02',
    LosSantosUndergroundRadio = 'RADIO_22_DLC_BATTLE_MIX1_RADIO',
    Off = 'OFF',
}
