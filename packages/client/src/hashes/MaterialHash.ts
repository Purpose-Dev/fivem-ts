/**
 * You can use this enum containing all material hashes (in signed int format) for the materials in materials.dat file
 */
export enum MaterialHash {
    None = 0,
    Unk = 0x962c3f7b,
    Default = -455129387,

    // HARD TERRAIN
    Concrete = -1673584099,
    ConcretePothole = -11371905,
    ConcreteDusty = 1407425269,
    Tarmac = 232261786,
    TarmacPainted = -816999363,
    TarmacPothole = -1822634025,
    RumbleStrip = 20944909,
    BreezeBlock = -607609061,
    Rock = -1647618612,
    RockMossy = 195581065,
    Stone = 9888005,
    CobbleStone = 70934787,
    Brick = -374979325,
    Marble = 567833614,
    PavingSlab = 589867211,
    SandstoneSolid = 193446431,
    SandstoneBrittle = -2124424959,

    // LOOSE TERRAIN
    SandLoose = -1745057350,
    SandCompact = -1897236771,
    SandWet = 1064898850,
    SandTrack = -1229953970,
    SandUnderwater = -623531264,
    SandDryDeep = 354088502,
    SandWetDeep = -445671519,
    Ice = -1307898020,
    IceTarmac = -160990235,
    SnowLoose = -538126415,
    SnowCompact = -1589472794,
    SnowDeep = -109549194,
    SnowTarmac = -734133080,
    GravelSmall = 2043065859,
    GravelLarge = 1934029709,
    GravelDeep = 1955691117,
    GravelTrainTrack = -1979640025,
    DirtTrack = 155339423,
    MudHard = -705033333,
    MudPothole = -1862576477,
    MudSoft = 210889329,
    MudUnderwater = -735343858,
    MudDeep = 1288550235,
    Marsh = -603788611,
    MarshDeep = -251596610,
    Soil = -1102433149,
    ClayHard = 619150134,
    ClaySoft = -731777307,

    // Vegetation
    GrassLong = -134193993,
    Grass = 1919038356,
    GrassShort = 1200682253,
    Hay = -796927348,
    Bushes = 1304227765,
    Twigs = -2029520121,
    Leaves = -776202687,
    WoodChips = 809009487,
    TreeBark = -1274932715,

    // Metals
    MetalSolidSmall = -434716837,
    MetalSolidMedium = 1256153821,
    MetalSolidLarge = -1408862604,
    MetalHollowSmall = 718214483,
    MetalHollowMedium = -469749166,
    MetalHollowLarge = 1848707473,
    MetalChainlinkSmall = 1392055141,
    MetalChainlinkLarge = -1747679752,
    MetalCorrugatedIron = 182293316,
    MetalGrille = 522945604,
    MetalRailing = 850138930,
    MetalDuct = -1000566989,
    MetalGarageDoor = -1417980680,
    MetalManhole = 540970151,

    // Woods
    WoodSolidSmall = 1072200648,
    WoodSolidMedium = -1079264366,
    WoodSolidLarge = -111935482,
    WoodSolidPolished = 750232100,
    WoodFloorDusty = 785830680,
    WoodHollowSmall = -797932331,
    WoodHollowMedium = -386468839,
    WoodHollowLarge = -1429232288,
    WoodChipboard = -730845117,
    WoodOldCreaky = -806892855,
    WoodHighDensity = 1910229858,
    WoodLattice = 264019868,

    // ManMade
    Ceramic = 232583525,
    RoofTile = 1434291438,
    RoofFelt = -1220955424,
    FibreGlass = -1203246861,
    Tarpaulin = -539785323,
    Plastic = 300671897,
    PlasticHollow = 1832582953,
    PlasticHighDensity = 1853107853,
    PlasticClear = 1675913102,
    PlasticHollowClear = 1493744649,
    PlasticHighDensityClear = 1050575891,
    FibreglassHollow = -483629364,
    Rubber = 1117312005,
    RubberHollow = -606103955,
    Linoleum = -721294761,
    Laminate = -1873528243,
    CarpetSolid = 630331906,
    CarpetSolidDusty = -166397363,
    CarpetFloorboard = 369382465,
    Cloth = 424802636,
    PlasterSolid = 1905698915,
    PlasterBrittle = 742703099,
    CardboardSheet = 371872850,
    CardboardBox = 324383113,
    Paper = -1335449298,
    Foam = -578172261,
    FeatherPillow = -1400922764,
    Polystyrene = 1949589969,
    Leather = -952252043,
    TvScreen = 933845022,
    SlattedBlinds = 258155434,

    // Glass
    GlassShootThrough = 1698109250,
    GlassBulletproof = 2117158864,
    GlassOpaque = -589564126,
    Perspex = -2027599590,

    // Vehicles
    CarMetal = 138384487,
    CarPlastic = -2073076037,
    CarSoftTop = 1787289462,
    CarSoftTopClear = -1856842160,
    CarGlassWeak = 1680539104,
    CarGlassMedium = -205896901,
    CarGlassStrong = -1834415583,
    CarGlassBulletproof = -1436317704,
    CarGlassOpaque = -927353103,

    // Liquids
    Water = -891447690,
    Blood = -904046344,
    Oil = -1904667272,
    Petrol = -667393415,

    // Misc
    FreshMeat = -988496832,
    DriedMeat = -459185760,

    // Projtex
    EmissiveGlass = -1714863620,
    EmissivePlastic = -924214584,

    // VFX Specific Particles
    VFXMetalElectrified = 1675677355,
    VFXMetalWaterTower = 478403024,

    // VFX Specific Explosions
    VFXMetalSteam = 1782324438,
    VFXMetalFlame = -884102577,

    // Physics
    PhysNoFriction = 1150052753,
    PhysGolfBall = -1927735534,
    PhysTennisBall = 550785174,
    PhysCaster = -1515509674,
    PhysCasterRusty = 1566374666,
    PhysCarVoid = -371498773,
    PhysPedCapsule = 1506378226,
    PhysElectricFence = 1725206929,
    PhysElectricMetal = 1155886418,
    PhysBarbedWire = -854321121,
    PhysPoolTableSurface = -1452232522,
    PhysPoolTableCushion = 265605838,
    PhysPoolTableBall = 406575268,

    // Natural Motion
    Buttocks = 953623857,
    ThighLeft = 522251307,
    ShinLeft = 398545038,
    FootLeft = -634232984,
    ThighRight = -1205845529,
    ShinRight = 445417436,
    FootRight = -1259754598,
    Spine0 = 942000321,
    Spine1 = 1308882045,
    Spine2 = 347210202,
    Spine3 = 702622776,
    ClavicleLeft = 1613282097,
    UpperArmLeft = -1224308584,
    LowerArmLeft = -921769571,
    HandLeft = 1071134407,
    ClavicleRight = -1679497686,
    UpperArmRight = 1802634564,
    LowerArmRight = 1923746457,
    HandRight = 1455567330,
    Neck = 996632005,
    Head = -2074919087,
    AnimalDefault = -786534799,

    // New Materials
    CarEngine = 1483730186,
    Puddle = 1611494654,
    ConcretePavement = 2117460440,
    BrickPavement = -1507251424,

    // Special Materials used to identify frag bounds
    PhysDynamicCoverBound = 918779453,
    VFXWoodBeerBarrel = -1438394694,
    WoodHighFriction = -690627310,

    // Special Versions of these material
    RockNoInst = -1614886729,
    BushesNoInst = -936256185,
    MetalSolidRoadSurface = -1180062454,
    StuntRampSurface = -396497420,

    // Temp Materials - IN USE
    Temp01 = 886740499,
    Temp02 = 1604578213,
    Temp03 = 1951405297,
    Temp04 = -1635030681,
    Temp05 = 1496997574,
    Temp06 = -2097106350,

    // Temp Materials - FREE TO USE
    Temp07 = -1378514945,
    Temp08 = -678110339,
    Temp09 = -1976549199,
    Temp10 = 942153294,
    Temp11 = -1839672658,
    Temp12 = -1047744231,
    Temp13 = 1809614262,
    Temp14 = -1659115468,
    Temp15 = 469296620,
    Temp16 = 221497442,
    Temp17 = -680076055,
    Temp18 = -322861186,
    Temp19 = 1705081128,
    Temp20 = 5319349,
    Temp21 = 363812209,
    Temp22 = 602730988,
    Temp23 = 1191065626,
    Temp24 = -1781475906,
    Temp25 = 1323616231,
    Temp26 = 1554932602,
    Temp27 = 178765750,
    Temp28 = -127263941,
    Temp29 = 184696939,
    Temp30 = 685243690,
}
