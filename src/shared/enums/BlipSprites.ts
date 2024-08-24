/**
 * Enum representing different sprite types for blips on a radar or map.
 *
 * This enum defines various sprite types that can be used to represent different kinds of blips or
 * markers on a radar or map interface. Each value corresponds to a specific type of blip, allowing for
 * customization of how different elements are displayed.
 *
 * Example usage:
 * ```ts
 * const policeBlipSprite = BlipSprites.RadarPolicePed;
 * const getBlip22Sprite = GetBlipSprite(22);
 *
 * if (getBlip22Sprite === BlipSprites.RadarPolicePed) {
 *   console.log("The blip 22 is Police Ped blip.");
 * }
 * ```
 */
export enum BlipSprites {
    RadarHigher = 0,
    RadarLevel = 1,
    RadarLower = 2,
    RadarPolicePed = 3,
    RadarWantedRadius = 4,
    RadarAreaBlip = 5,
    RadarCentre = 6,
    RadarNorth = 7,
    RadarWaypoint = 8,
    RadarRadiusBlip = 9,
    RadarRadiusOutlineBlip = 10,
    RadarWeaponHigher = 11,
    RadarWeaponLower = 12,
    RadarHigherAi = 13,
    RadarLowerAi = 14,
    RadarPoliceHeliSpin = 15,
    RadarPolicePlaneMove = 16,
    RadarMpCrew = 27,
    RadarMpFriendlies = 28,
    RadarCableCar = 36,
    RadarActivities = 37,
    RadarRaceflag = 38,
    RadarSafehouse = 40,
    RadarPolice = 41,
    RadarPoliceChase = 42,
    RadarPoliceHeli = 43,
    RadarBombA = 44,
    RadarSnitch = 47,
    RadarPlanningLocations = 48,
    RadarCrimCarsteal = 50,
    RadarCrimDrugs = 51,
    RadarCrimHoldups = 52,
    RadarCrimPlayer = 54,
    RadarCopPatrol = 56,
    RadarCopPlayer = 57,
    RadarCrimWanted = 58,
    RadarHeist = 59,
    RadarPoliceStation = 60,
    RadarHospital = 61,
    RadarAssassinsMark = 62,
    RadarElevator = 63,
    RadarHelicopter = 64,
    RadarRandomCharacter = 66,
    RadarSecurityVan = 67,
    RadarTowTruck = 68,
    RadarIllegalParking = 70,
    RadarBarber = 71,
    RadarCarModShop = 72,
    RadarClothesStore = 73,
    RadarTattoo = 75,
    RadarArmenianFamily = 76,
    RadarLesterFamily = 77,
    RadarMichaelFamily = 78,
    RadarTrevorFamily = 79,
    RadarJewelryHeist = 80,
    RadarDragRaceFinish = 82,
    RadarRampage = 84,
    RadarVinewoodTours = 85,
    RadarLamarFamily = 86,
    RadarFranklinFamily = 88,
    RadarChineseStrand = 89,
    RadarFlightSchool = 90,
    RadarEyeSky = 91,
    RadarAirHockey = 92,
    RadarBar = 93,
    RadarBaseJump = 94,
    RadarBasketball = 95,
    RadarBiolabHeist = 96,
    RadarCabaretClub = 99,
    RadarCarWash = 100,
    RadarComedyClub = 102,
    RadarDarts = 103,
    RadarDocksHeist = 104,
    RadarFbiHeist = 105,
    RadarFbiOfficersStrand = 106,
    RadarFinaleBankHeist = 107,
    RadarFinancierStrand = 108,
    RadarGolf = 109,
    RadarGunShop = 110,
    RadarInternetCafe = 111,
    RadarMichaelFamilyExile = 112,
    RadarNiceHouseHeist = 113,
    RadarRandomFemale = 114,
    RadarRandomMale = 115,
    RadarRuralBankHeist = 118,
    RadarShootingRange = 119,
    RadarSolomonStrand = 120,
    RadarStripClub = 121,
    RadarTennis = 122,
    RadarTrevorFamilyExile = 123,
    RadarMichaelTrevorFamily = 124,
    RadarTriathlon = 126,
    RadarOffRoadRacing = 127,
    RadarGangCops = 128,
    RadarGangMexicans = 129,
    RadarGangBikers = 130,
    RadarSnitchRed = 133,
    RadarCrimCuffKeys = 134,
    RadarCinema = 135,
    RadarMusicVenue = 136,
    RadarPoliceStationBlue = 137,
    RadarAirport = 138,
    RadarCrimSavedVehicle = 139,
    RadarWeedStash = 140,
    RadarHunting = 141,
    RadarPool = 142,
    RadarObjectiveBlue = 143,
    RadarObjectiveGreen = 144,
    RadarObjectiveRed = 145,
    RadarObjectiveYellow = 146,
    RadarArmsDealing = 147,
    RadarMpFriend = 148,
    RadarCelebrityTheft = 149,
    RadarWeaponAssaultRifle = 150,
    RadarWeaponBat = 151,
    RadarWeaponGrenade = 152,
    RadarWeaponHealth = 153,
    RadarWeaponKnife = 154,
    RadarWeaponMolotov = 155,
    RadarWeaponPistol = 156,
    RadarWeaponRocket = 157,
    RadarWeaponShotgun = 158,
    RadarWeaponSmg = 159,
    RadarWeaponSniper = 160,
    RadarMpNoise = 161,
    RadarPoi = 162,
    RadarPassive = 163,
    RadarUsingmenu = 164,
    RadarGangCopsPartner = 171,
    RadarWeaponMinigun = 173,
    RadarWeaponArmour = 175,
    RadarPropertyTakeover = 176,
    RadarGangMexicansHighlight = 177,
    RadarGangBikersHighlight = 178,
    RadarTriathlonCycling = 179,
    RadarTriathlonSwimming = 180,
    RadarPropertyTakeoverBikers = 181,
    RadarPropertyTakeoverCops = 182,
    RadarPropertyTakeoverVagos = 183,
    RadarCamera = 184,
    RadarCentreRed = 185,
    RadarHandcuffKeysBikers = 186,
    RadarHandcuffKeysVagos = 187,
    RadarHandcuffsClosedBikers = 188,
    RadarHandcuffsClosedVagos = 189,
    RadarCameraBadger = 192,
    RadarCameraFacade = 193,
    RadarCameraIfruit = 194,
    RadarYoga = 197,
    RadarTaxi = 198,
    RadarShrink = 205,
    RadarEpsilon = 206,
    RadarFinancierStrandGrey = 207,
    RadarTrevorFamilyGrey = 208,
    RadarTrevorFamilyRed = 209,
    RadarFranklinFamilyGrey = 210,
    RadarFranklinFamilyBlue = 211,
    RadarFranklinA = 212,
    RadarFranklinB = 213,
    RadarFranklinC = 214,
    RadarGangVehicle = 225,
    RadarGangVehicleBikers = 226,
    RadarGangVehicleCops = 227,
    RadarGangVehicleVagos = 228,
    RadarGuncar = 229,
    RadarDrivingBikers = 230,
    RadarDrivingCops = 231,
    RadarDrivingVagos = 232,
    RadarGangCopsHighlight = 233,
    RadarShieldBikers = 234,
    RadarShieldCops = 235,
    RadarShieldVagos = 236,
    RadarCustodyBikers = 237,
    RadarCustodyVagos = 238,
    RadarArmsDealingAir = 251,
    RadarPlayerstateArrested = 252,
    RadarPlayerstateCustody = 253,
    RadarPlayerstateDriving = 254,
    RadarPlayerstateKeyholder = 255,
    RadarPlayerstatePartner = 256,
    RadarZtype = 262,
    RadarStinger = 263,
    RadarPacker = 264,
    RadarMonroe = 265,
    RadarFairground = 266,
    RadarProperty = 267,
    RadarGangHighlight = 268,
    RadarAltruist = 269,
    RadarAi = 270,
    RadarOnMission = 271,
    RadarCashPickup = 272,
    RadarChop = 273,
    RadarDead = 274,
    RadarTerritoryLocked = 275,
    RadarCashLost = 276,
    RadarCashVagos = 277,
    RadarCashCops = 278,
    RadarHooker = 279,
    RadarFriend = 280,
    RadarMission2to4 = 281,
    RadarMission2to8 = 282,
    RadarMission2to12 = 283,
    RadarMission2to16 = 284,
    RadarCustodyDropoff = 285,
    RadarOnmissionCops = 286,
    RadarOnmissionLost = 287,
    RadarOnmissionVagos = 288,
    RadarCrimCarstealCops = 289,
    RadarCrimCarstealBikers = 290,
    RadarCrimCarstealVagos = 291,
    RadarBandStrand = 292,
    RadarSimeonFamily = 293,
    RadarMission1 = 294,
    RadarMission2 = 295,
    RadarFriendDarts = 296,
    RadarFriendComedyclub = 297,
    RadarFriendCinema = 298,
    RadarFriendTennis = 299,
    RadarFriendStripclub = 300,
    RadarFriendLivemusic = 301,
    RadarFriendGolf = 302,
    RadarBountyHit = 303,
    RadarUgcMission = 304,
    RadarHorde = 305,
    RadarCratedrop = 306,
    RadarPlaneDrop = 307,
    RadarSub = 308,
    RadarRace = 309,
    RadarDeathmatch = 310,
    RadarArmWrestling = 311,
    RadarMission1to2 = 312,
    RadarShootingrangeGunshop = 313,
    RadarRaceAir = 314,
    RadarRaceLand = 315,
    RadarRaceSea = 316,
    RadarTow = 317,
    RadarGarbage = 318,
    RadarDrill = 319,
    RadarSpikes = 320,
    RadarFiretruck = 321,
    RadarMinigun2 = 322,
    RadarBugstar = 323,
    RadarSubmarine = 324,
    RadarChinook = 325,
    RadarGetawayCar = 326,
    RadarMissionBikers1 = 327,
    RadarMissionBikers1to2 = 328,
    RadarMissionBikers2 = 329,
    RadarMissionBikers2to4 = 330,
    RadarMissionBikers2to8 = 331,
    RadarMissionBikers2to12 = 332,
    RadarMissionBikers2to16 = 333,
    RadarMissionCops1 = 334,
    RadarMissionCops1to2 = 335,
    RadarMissionCops2 = 336,
    RadarMissionCops2to4 = 337,
    RadarMissionCops2to8 = 338,
    RadarMissionCops2to12 = 339,
    RadarMissionCops2to16 = 340,
    RadarMissionVagos1 = 341,
    RadarMissionVagos1to2 = 342,
    RadarMissionVagos2 = 343,
    RadarMissionVagos2to4 = 344,
    RadarMissionVagos2to8 = 345,
    RadarMissionVagos2to12 = 346,
    RadarMissionVagos2to16 = 347,
    RadarGangBike = 348,
    RadarGasGrenade = 349,
    RadarPropertyForSale = 350,
    RadarGangAttackPackage = 351,
    RadarMartinMadrazzo = 352,
    RadarEnemyHeliSpin = 353,
    RadarBoost = 354,
    RadarDevin = 355,
    RadarDock = 356,
    RadarGarage = 357,
    RadarGolfFlag = 358,
    RadarHangar = 359,
    RadarHelipad = 360,
    RadarJerryCan = 361,
    RadarMask = 362,
    RadarHeistPrep = 363,
    RadarIncapacitated = 364,
    RadarSpawnPointPickup = 365,
    RadarBoilersuit = 366,
    RadarCompleted = 367,
    RadarRockets = 368,
    RadarGarageForSale = 369,
    RadarHelipadForSale = 370,
    RadarDockForSale = 371,
    RadarHangarForSale = 372,
    RadarPlaceholder6 = 373,
    RadarBusiness = 374,
    RadarBusinessForSale = 375,
    RadarRaceBike = 376,
    RadarParachute = 377,
    RadarTeamDeathmatch = 378,
    RadarRaceFoot = 379,
    RadarVehicleDeathmatch = 380,
    RadarBarry = 381,
    RadarDom = 382,
    RadarMaryann = 383,
    RadarCletus = 384,
    RadarJosh = 385,
    RadarMinute = 386,
    RadarOmega = 387,
    RadarTonya = 388,
    RadarPaparazzo = 389,
    RadarAim = 390,
    RadarCratedropBackground = 391,
    RadarGreenAndNetPlayer1 = 392,
    RadarGreenAndNetPlayer2 = 393,
    RadarGreenAndNetPlayer3 = 394,
    RadarGreenAndFriendly = 395,
    RadarNetPlayer1AndNetPlayer2 = 396,
    RadarNetPlayer1AndNetPlayer3 = 397,
    RadarCreator = 398,
    RadarCreatorDirection = 399,
    RadarAbigail = 400,
    RadarBlimp = 401,
    RadarRepair = 402,
    RadarTestosterone = 403,
    RadarDinghy = 404,
    RadarFanatic = 405,
    RadarInfoIcon = 407,
    RadarCaptureTheFlag = 408,
    RadarLastTeamStanding = 409,
    RadarBoat = 410,
    RadarCaptureTheFlagBase = 411,
    RadarMpCrew2 = 412,
    RadarCaptureTheFlagOutline = 413,
    RadarCaptureTheFlagBaseNobag = 414,
    RadarWeaponJerrycan = 415,
    RadarRp = 416,
    RadarLevelInside = 417,
    RadarBountyHitInside = 418,
    RadarCaptureTheUsaflag = 419,
    RadarCaptureTheUsaflagOutline = 420,
    RadarTank = 421,
    RadarPlayerHeli = 422,
    RadarPlayerPlane = 423,
    RadarPlayerJet = 424,
    RadarCentreStroke = 425,
    RadarPlayerGuncar = 426,
    RadarPlayerBoat = 427,
    RadarMpHeist = 428,
    RadarTemp1 = 429,
    RadarTemp2 = 430,
    RadarTemp3 = 431,
    RadarTemp4 = 432,
    RadarTemp5 = 433,
    RadarTemp6 = 434,
    RadarRaceStunt = 435,
    RadarHotProperty = 436,
    RadarUrbanwarfareVersus = 437,
    RadarKingOfTheCastle = 438,
    RadarPlayerKing = 439,
    RadarDeadDrop = 440,
    RadarPennedIn = 441,
    RadarBeast = 442,
    RadarEdgePointer = 443,
    RadarEdgeCrosstheline = 444,
    RadarMpLamar = 445,
    RadarBennys = 446,
    RadarCornerNumber1 = 447,
    RadarCornerNumber2 = 448,
    RadarCornerNumber3 = 449,
    RadarCornerNumber4 = 450,
    RadarCornerNumber5 = 451,
    RadarCornerNumber6 = 452,
    RadarCornerNumber7 = 453,
    RadarCornerNumber8 = 454,
    RadarYacht = 455,
    RadarFindersKeepers = 456,
    RadarAssaultPackage = 457,
    RadarHuntTheBoss = 458,
    RadarSightseer = 459,
    RadarTurretedLimo = 460,
    RadarBellyOfTheBeast = 461,
    RadarYachtLocation = 462,
    RadarPickupBeast = 463,
    RadarPickupZoned = 464,
    RadarPickupRandom = 465,
    RadarPickupSlowTime = 466,
    RadarPickupSwap = 467,
    RadarPickupThermal = 468,
    RadarPickupWeed = 469,
    RadarWeaponRailgun = 470,
    RadarSeashark = 471,
    RadarPickupHidden = 472,
    RadarWarehouse = 473,
    RadarWarehouseForSale = 474,
    RadarOffice = 475,
    RadarOfficeForSale = 476,
    RadarTruck = 477,
    RadarContraband = 478,
    RadarTrailer = 479,
    RadarVip = 480,
    RadarCargobob = 481,
    RadarAreaOutlineBlip = 482,
    RadarPickupAccelerator = 483,
    RadarPickupGhost = 484,
    RadarPickupDetonator = 485,
    RadarPickupBomb = 486,
    RadarPickupArmoured = 487,
    RadarStunt = 488,
    RadarWeaponLives = 489,
    RadarStuntPremium = 490,
    RadarAdversary = 491,
    RadarBikerClubhouse = 492,
    RadarBikerCagedIn = 493,
    RadarBikerTurfWar = 494,
    RadarBikerJoust = 495,
    RadarProductionWeed = 496,
    RadarProductionCrack = 497,
    RadarProductionFakeId = 498,
    RadarProductionMeth = 499,
    RadarProductionMoney = 500,
    RadarPackage = 501,
    RadarCapture1 = 502,
    RadarCapture2 = 503,
    RadarCapture3 = 504,
    RadarCapture4 = 505,
    RadarCapture5 = 506,
    RadarCapture6 = 507,
    RadarCapture7 = 508,
    RadarCapture8 = 509,
    RadarCapture9 = 510,
    RadarCapture10 = 511,
    RadarQuad = 512,
    RadarBus = 513,
    RadarDrugsPackage = 514,
    RadarPickupJump = 515,
    RadarAdversary4 = 516,
    RadarAdversary8 = 517,
    RadarAdversary10 = 518,
    RadarAdversary12 = 519,
    RadarAdversary16 = 520,
    RadarLaptop = 521,
    RadarPickupDeadline = 522,
    RadarSportsCar = 523,
    RadarWarehouseVehicle = 524,
    RadarRegPapers = 525,
    RadarPoliceStationDropoff = 526,
    RadarJunkyard = 527,
    RadarExVech1 = 528,
    RadarExVech2 = 529,
    RadarExVech3 = 530,
    RadarExVech4 = 531,
    RadarExVech5 = 532,
    RadarExVech6 = 533,
    RadarExVech7 = 534,
    RadarTargetA = 535,
    RadarTargetB = 536,
    RadarTargetC = 537,
    RadarTargetD = 538,
    RadarTargetE = 539,
    RadarTargetF = 540,
    RadarTargetG = 541,
    RadarTargetH = 542,
    RadarJugg = 543,
    RadarPickupRepair = 544,
    RadarSteeringwheel = 545,
    RadarTrophy = 546,
    RadarPickupRocketBoost = 547,
    RadarPickupHomingRocket = 548,
    RadarPickupMachinegun = 549,
    RadarPickupParachute = 550,
    RadarPickupTime5 = 551,
    RadarPickupTime10 = 552,
    RadarPickupTime15 = 553,
    RadarPickupTime20 = 554,
    RadarPickupTime30 = 555,
    RadarSupplies = 556,
    RadarPropertyBunker = 557,
    RadarGrWvm1 = 558,
    RadarGrWvm2 = 559,
    RadarGrWvm3 = 560,
    RadarGrWvm4 = 561,
    RadarGrWvm5 = 562,
    RadarGrWvm6 = 563,
    RadarGrCovertOps = 564,
    RadarAdversaryBunker = 565,
    RadarGrMocUpgrade = 566,
    RadarGrWUpgrade = 567,
    RadarSmCargo = 568,
    RadarSmHangar = 569,
    RadarTfCheckpoint = 570,
    RadarRaceTf = 571,
    RadarSmWp1 = 572,
    RadarSmWp2 = 573,
    RadarSmWp3 = 574,
    RadarSmWp4 = 575,
    RadarSmWp5 = 576,
    RadarSmWp6 = 577,
    RadarSmWp7 = 578,
    RadarSmWp8 = 579,
    RadarSmWp9 = 580,
    RadarSmWp10 = 581,
    RadarSmWp11 = 582,
    RadarSmWp12 = 583,
    RadarSmWp13 = 584,
    RadarSmWp14 = 585,
    RadarNhpBag = 586,
    RadarNhpChest = 587,
    RadarNhpOrbit = 588,
    RadarNhpVeh1 = 589,
    RadarNhpBase = 590,
    RadarNhpOverlay = 591,
    RadarNhpTurret = 592,
    RadarNhpMgFirewall = 593,
    RadarNhpMgNode = 594,
    RadarNhpWp1 = 595,
    RadarNhpWp2 = 596,
    RadarNhpWp3 = 597,
    RadarNhpWp4 = 598,
    RadarNhpWp5 = 599,
    RadarNhpWp6 = 600,
    RadarNhpWp7 = 601,
    RadarNhpWp8 = 602,
    RadarNhpWp9 = 603,
    RadarNhpCctv = 604,
    RadarNhpStarterpack = 605,
    RadarNhpTurretConsole = 606,
    RadarNhpMgMirRotate = 607,
    RadarNhpMgMirStatic = 608,
    RadarNhpMgProxy = 609,
    RadarAcsrRaceTarget = 610,
    RadarAcsrRaceHotring = 611,
    RadarAcsrWp1 = 612,
    RadarAcsrWp2 = 613,
    RadarBatClubProperty = 614,
    RadarBatCargo = 615,
    RadarBatTruck = 616,
    RadarBatHackJewel = 617,
    RadarBatHackGold = 618,
    RadarBatKeypad = 619,
    RadarBatHackTarget = 620,
    RadarPickupDtbHealth = 621,
    RadarPickupDtbBlastIncrease = 622,
    RadarPickupDtbBlastDecrease = 623,
    RadarPickupDtbBombIncrease = 624,
    RadarPickupDtbBombDecrease = 625,
    RadarBatRivalClub = 626,
    RadarBatDrone = 627,
    RadarBatCashReg = 628,
    RadarCctv = 629,
    RadarBatAssassinate = 630,
    RadarBatPbus = 631,
    RadarBatWp1 = 632,
    RadarBatWp2 = 633,
    RadarBatWp3 = 634,
    RadarBatWp4 = 635,
    RadarBatWp5 = 636,
    RadarBatWp6 = 637,
    RadarBlimp2 = 638,
    RadarOppressor2 = 639,
    RadarBatWp7 = 640,
    RadarArenaSeries = 641,
    RadarArenaPremium = 642,
    RadarArenaWorkshop = 643,
    RadarRaceWars = 644,
    RadarArenaTurret = 645,
    RadarArenaRcCar = 646,
    RadarArenaRcWorkshop = 647,
    RadarArenaTrapFire = 648,
    RadarArenaTrapFlip = 649,
    RadarArenaTrapSea = 650,
    RadarArenaTrapTurn = 651,
    RadarArenaTrapPit = 652,
    RadarArenaTrapMine = 653,
    RadarArenaTrapBomb = 654,
    RadarArenaTrapWall = 655,
    RadarArenaTrapBrd = 656,
    RadarArenaTrapSbrd = 657,
    RadarArenaBruiser = 658,
    RadarArenaBrutus = 659,
    RadarArenaCerberus = 660,
    RadarArenaDeathbike = 661,
    RadarArenaDominator = 662,
    RadarArenaImpaler = 663,
    RadarArenaImperator = 664,
    RadarArenaIssi = 665,
    RadarArenaSasquatch = 666,
    RadarArenaScarab = 667,
    RadarArenaSlamvan = 668,
    RadarArenaZr380 = 669,
    RadarAp = 670,
    RadarComicStore = 671,
    RadarCopCar = 672,
    RadarRcTimeTrials = 673,
    RadarKingOfTheHill = 674,
    RadarKingOfTheHillTeams = 675,
    RadarRucksack = 676,
    RadarShippingContainer = 677,
    RadarAgatha = 678,
    RadarCasino = 679,
    RadarCasinoTableGames = 680,
    RadarCasinoWheel = 681,
    RadarCasinoConcierge = 682,
    RadarCasinoChips = 683,
    RadarCasinoHorseRacing = 684,
    RadarAdversaryFeatured = 685,
    RadarRoulette1 = 686,
    RadarRoulette2 = 687,
    RadarRoulette3 = 688,
    RadarRoulette4 = 689,
    RadarRoulette5 = 690,
    RadarRoulette6 = 691,
    RadarRoulette7 = 692,
    RadarRoulette8 = 693,
    RadarRoulette9 = 694,
    RadarRoulette10 = 695,
    RadarRoulette11 = 696,
    RadarRoulette12 = 697,
    RadarRoulette13 = 698,
    RadarRoulette14 = 699,
    RadarRoulette15 = 700,
    RadarRoulette16 = 701,
    RadarRoulette17 = 702,
    RadarRoulette18 = 703,
    RadarRoulette19 = 704,
    RadarRoulette20 = 705,
    RadarRoulette21 = 706,
    RadarRoulette22 = 707,
    RadarRoulette23 = 708,
    RadarRoulette24 = 709,
    RadarRoulette25 = 710,
    RadarRoulette26 = 711,
    RadarRoulette27 = 712,
    RadarRoulette28 = 713,
    RadarRoulette29 = 714,
    RadarRoulette30 = 715,
    RadarRoulette31 = 716,
    RadarRoulette32 = 717,
    RadarRoulette33 = 718,
    RadarRoulette34 = 719,
    RadarRoulette35 = 720,
    RadarRoulette36 = 721,
    RadarRoulette0 = 722,
    RadarRoulette00 = 723,
    RadarLimo = 724,
    RadarWeaponAlien = 725,
    RadarRaceOpenWheel = 726,
    RadarRappel = 727,
    RadarSwapCar = 728,
    RadarScubaGear = 729,
    RadarCpanel1 = 730,
    RadarCpanel2 = 731,
    RadarCpanel3 = 732,
    RadarCpanel4 = 733,
    RadarSnowTruck = 734,
    RadarBuggy1 = 735,
    RadarBuggy2 = 736,
    RadarZhaba = 737,
    RadarGerald = 738,
    RadarRon = 739,
    RadarArcade = 740,
    RadarDroneControls = 741,
    RadarRcTank = 742,
    RadarStairs = 743,
    RadarCamera2 = 744,
    RadarWinky = 745,
    RadarMiniSub = 746,
    RadarKartRetro = 747,
    RadarKartModern = 748,
    RadarMilitaryQuad = 749,
    RadarMilitaryTruck = 750,
    RadarShipWheel = 751,
    RadarUfo = 752,
    RadarSeasparrow2 = 753,
    RadarDinghy2 = 754,
    RadarPatrolBoat = 755,
    RadarRetroSportsCar = 756,
    RadarSquadee = 757,
    RadarFoldingWingJet = 758,
    RadarValkyrie2 = 759,
    RadarSub2 = 760,
    RadarBoltCutters = 761,
    RadarRappelGear = 762,
    RadarKeycard = 763,
    RadarPassword = 764,
    RadarIslandHeistPrep = 765,
    RadarIslandParty = 766,
    RadarControlTower = 767,
    RadarUnderwaterGate = 768,
    RadarPowerSwitch = 769,
    RadarCompoundGate = 770,
    RadarRappelPoint = 771,
    RadarKeypad = 772,
    RadarSubControls = 773,
    RadarSubPeriscope = 774,
    RadarSubMissile = 775,
    RadarPainting = 776,
    RadarCarMeet = 777,
    RadarCarTestArea = 778,
    RadarAutoShopProperty = 779,
    RadarDocksExport = 780,
    RadarPrizeCar = 781,
    RadarTestCar = 782,
    RadarCarRobberyBoard = 783,
    RadarCarRobberyPrep = 784,
    RadarStreetRaceSeries = 785,
    RadarPursuitSeries = 786,
    RadarCarMeetOrganiser = 787,
    RadarSecuroserv = 788,
    RadarBountyCollectibles = 789,
    RadarMovieCollectibles = 790,
    RadarTrailerRamp = 791,
    RadarRaceOrganiser = 792,
    RadarChalkboardList = 793,
    RadarExportVehicle = 794,
    RadarTrain = 795,
    RadarHeistDiamond = 796,
    RadarHeistDoomsday = 797,
    RadarHeistIsland = 798,
    RadarSlamvan2 = 799,
    RadarCrusader = 800,
    RadarConstructionOutfit = 801,
    RadarOverlayJammed = 802,
    RadarHeistIslandUnavailable = 803,
    RadarHeistDiamondUnavailable = 804,
    RadarHeistDoomsdayUnavailable = 805,
    RadarPlaceholder7 = 806,
    RadarPlaceholder8 = 807,
    RadarPlaceholder9 = 808,
    RadarFeaturedSeries = 809,
    RadarVehicleForSale = 810,
    RadarVanKeys = 811,
    RadarSuvService = 812,
    RadarSecurityContract = 813,
    RadarSafe = 814,
    RadarPedR = 815,
    RadarPedE = 816,
    RadarPayphone = 817,
    RadarPatriot3 = 818,
    RadarMusicStudio = 819,
    RadarJubilee = 820,
    RadarGranger2 = 821,
    RadarExplosiveCharge = 822,
    RadarDeity = 823,
    RadarDChampion = 824,
    RadarBuffalo4 = 825,
    RadarAgency = 826,
    RadarBikerBar = 827,
    RadarSimeonOverlay = 828,
    RadarJunkSkydive = 829,
    RadarLuxuryCarShowroom = 830,
    RadarCarShowroom = 831,
    RadarCarShowroomSimeon = 832,
    RadarFlamingSkull = 833,
    RadarWeaponAmmo = 834,
    RadarCommunitySeries = 835,
    RadarCayoSeries = 836,
    RadarClubhouseContract = 837,
    RadarAgentUlp = 838,
    RadarAcid = 839,
    RadarAcidLab = 840,
    RadarDaxOverlay = 841,
    RadarDeadDropPackage = 842,
    RadarDowntownCab = 843,
    RadarGunVan = 844,
    RadarStashHouse = 845,
    RadarTractor = 846,
    RadarWarehouseJuggalo = 847,
    RadarWarehouseJuggaloDax = 848,
    RadarWeaponCrowbar = 849,
    RadarDuffelBag = 850,
    RadarOilTanker = 851,
    RadarAcidLabTent = 852,
    RadarVanBurrito = 853,
    RadarAcidBoost = 854,
    RadarPedGangLeader = 855,
    RadarMultistoreyGarage = 856,
    RadarSeizedAssetSales = 857,
    RadarCayoAttrition = 858,
    RadarBicycle = 859,
    RadarBicycleTrial = 860,
    RadarRaiju = 861,
    RadarConada2 = 862,
    RadarOverlayReadyForSell = 863,
    RadarOverlayMissingSupplies = 864,
    RadarStreamer216 = 865,
    RadarSignalJammer = 866,
    RadarSalvageYard = 867,
    RadarRobberyPrepEquipment = 868,
    RadarRobberyPrepOverlay = 869,
    RadarYusuf = 870,
    RadarVincent = 871,
    RadarVinewoodGarage = 872,
    RadarLstb = 873,
    RadarCctvWorkstation = 874,
    RadarHackingDevice = 875,
    RadarRaceDrag = 876,
    RadarRaceDrift = 877,
    RadarCasinoPrep = 878,
    RadarPlanningWall = 879,
    RadarWeaponCrate = 880,
    RadarWeaponSnowball = 881,
    RadarTrainSignalsGreen = 882,
    RadarTrainSignalsRed = 883,
}
