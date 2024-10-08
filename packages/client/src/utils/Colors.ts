import { clamp } from '@shared';

/**
 * Represents a color with red, green, blue, and alpha (opacity) components.
 */
export class Color {
  /**
   * Metallic Black
   */
  public static metallicblack = new Color(13, 17, 22, 255);

  /**
   * Metallic Graphite Black
   */
  public static metallicgraphiteblack = new Color(28, 29, 33, 255);

  /**
   * Metallic Black Steal
   */
  public static metallicblacksteal = new Color(50, 56, 61, 255);

  /**
   * Metallic Dark Silver
   */
  public static metallicdarksilver = new Color(69, 75, 79, 255);

  /**
   * Metallic Silver
   */
  public static metallicsilver = new Color(153, 157, 160, 255);

  /**
   * Metallic Blue Silver
   */
  public static metallicbluesilver = new Color(194, 196, 198, 255);

  /**
   * Metallic Steel Gray
   */
  public static metallicsteelgray = new Color(151, 154, 151, 255);

  /**
   * Metallic Shadow Silver
   */
  public static metallicshadowsilver = new Color(99, 115, 128, 255);

  /**
   * Metallic Stone Silver
   */
  public static metallicstonesilver = new Color(99, 98, 92, 255);

  /**
   * Metallic Midnight Silver
   */
  public static metallicmidnightsilver = new Color(60, 63, 71, 255);

  /**
   * Metallic Gun Metal
   */
  public static metallicgunmetal = new Color(68, 78, 84, 255);

  /**
   * Metallic Anthracite Grey
   */
  public static metallicanthracitegrey = new Color(29, 33, 41, 255);

  /**
   * Matte Black
   */
  public static matteblack = new Color(19, 24, 31, 255);

  /**
   * Matte Gray
   */
  public static mattegray = new Color(38, 40, 42, 255);

  /**
   * Matte Light Grey
   */
  public static mattelightgrey = new Color(81, 85, 84, 255);

  /**
   * Util Black
   */
  public static utilblack = new Color(21, 25, 33, 255);

  /**
   * Util Black Poly
   */
  public static utilblackpoly = new Color(30, 36, 41, 255);

  /**
   * Util Dark Silver
   */
  public static utildarksilver = new Color(51, 58, 60, 255);

  /**
   * Util Silver
   */
  public static utilsilver = new Color(140, 144, 149, 255);

  /**
   * Util Gun Metal
   */
  public static utilgunmetal = new Color(57, 67, 77, 255);

  /**
   * Util Shadow Silver
   */
  public static utilshadowsilver = new Color(80, 98, 114, 255);

  /**
   * Worn Black
   */
  public static wornblack = new Color(30, 35, 47, 255);

  /**
   * Worn Graphite
   */
  public static worngraphite = new Color(54, 58, 63, 255);

  /**
   * Worn Silver Grey
   */
  public static wornsilvergrey = new Color(160, 161, 153, 255);

  /**
   * Worn Silver
   */
  public static wornsilver = new Color(211, 211, 211, 255);

  /**
   * Worn Blue Silver
   */
  public static wornbluesilver = new Color(183, 191, 202, 255);

  /**
   * Worn Shadow Silver
   */
  public static wornshadowsilver = new Color(119, 135, 148, 255);

  /**
   * Metallic Red
   */
  public static metallicred = new Color(192, 14, 26, 255);

  /**
   * Metallic Torino Red
   */
  public static metallictorinored = new Color(218, 25, 24, 255);

  /**
   * Metallic Formula Red
   */
  public static metallicformulared = new Color(182, 17, 27, 255);

  /**
   * Metallic Blaze Red
   */
  public static metallicblazered = new Color(165, 30, 35, 255);

  /**
   * Metallic Graceful Red
   */
  public static metallicgracefulred = new Color(123, 26, 34, 255);

  /**
   * Metallic Garnet Red
   */
  public static metallicgarnetred = new Color(142, 27, 31, 255);

  /**
   * Metallic Desert Red
   */
  public static metallicdesertred = new Color(111, 24, 24, 255);

  /**
   * Metallic Cabernet Red
   */
  public static metalliccabernetred = new Color(73, 17, 29, 255);

  /**
   * Metallic Candy Red
   */
  public static metalliccandyred = new Color(182, 15, 37, 255);

  /**
   * Metallic Sunrise Orange
   */
  public static metallicsunriseorange = new Color(212, 74, 23, 255);

  /**
   * Metallic Classic Gold
   */
  public static metallicclassicgold = new Color(194, 148, 79, 255);

  /**
   * Metallic Orange
   */
  public static metallicorange = new Color(247, 134, 22, 255);

  /**
   * Matte Red
   */
  public static mattered = new Color(207, 31, 33, 255);

  /**
   * Matte Dark Red
   */
  public static mattedarkred = new Color(115, 32, 33, 255);

  /**
   * Matte Orange
   */
  public static matteorange = new Color(242, 125, 32, 255);

  /**
   * Matte Yellow
   */
  public static matteyellow = new Color(255, 201, 31, 255);

  /**
   * Util Red
   */
  public static utilred = new Color(156, 16, 22, 255);

  /**
   * Util Bright Red
   */
  public static utilbrightred = new Color(222, 15, 24, 255);

  /**
   * Util Garnet Red
   */
  public static utilgarnetred = new Color(143, 30, 23, 255);

  /**
   * Worn Red
   */
  public static wornred = new Color(169, 71, 68, 255);

  /**
   * Worn Golden Red
   */
  public static worngoldenred = new Color(177, 108, 81, 255);

  /**
   * Worn Dark Red
   */
  public static worndarkred = new Color(55, 28, 37, 255);

  /**
   * Metallic Dark Green
   */
  public static metallicdarkgreen = new Color(19, 36, 40, 255);

  /**
   * Metallic Racing Green
   */
  public static metallicracinggreen = new Color(18, 46, 43, 255);

  /**
   * Metallic Sea Green
   */
  public static metallicseagreen = new Color(18, 56, 60, 255);

  /**
   * Metallic Olive Green
   */
  public static metallicolivegreen = new Color(49, 66, 63, 255);

  /**
   * Metallic Green
   */
  public static metallicgreen = new Color(21, 92, 45, 255);

  /**
   * Metallic Gasoline Blue Green
   */
  public static metallicgasolinebluegreen = new Color(27, 103, 112, 255);

  /**
   * Matte Lime Green
   */
  public static mattelimegreen = new Color(102, 184, 31, 255);

  /**
   * Util Dark Green
   */
  public static utildarkgreen = new Color(34, 56, 62, 255);

  /**
   * Util Green
   */
  public static utilgreen = new Color(29, 90, 63, 255);

  /**
   * Worn Dark Green
   */
  public static worndarkgreen = new Color(45, 66, 63, 255);

  /**
   * Worn Green
   */
  public static worngreen = new Color(69, 89, 75, 255);

  /**
   * Worn Sea Wash
   */
  public static wornseawash = new Color(101, 134, 127, 255);

  /**
   * Metallic Midnight Blue
   */
  public static metallicmidnightblue = new Color(34, 46, 70, 255);

  /**
   * Metallic Dark Blue
   */
  public static metallicdarkblue = new Color(35, 49, 85, 255);

  /**
   * Metallic Saxony Blue
   */
  public static metallicsaxonyblue = new Color(48, 76, 126, 255);

  /**
   * Metallic Blue
   */
  public static metallicblue = new Color(71, 87, 143, 255);

  /**
   * Metallic Mariner Blue
   */
  public static metallicmarinerblue = new Color(99, 123, 167, 255);

  /**
   * Metallic Harbor Blue
   */
  public static metallicharborblue = new Color(57, 71, 98, 255);

  /**
   * Metallic Diamond Blue
   */
  public static metallicdiamondblue = new Color(214, 231, 241, 255);

  /**
   * Metallic Surf Blue
   */
  public static metallicsurfblue = new Color(118, 175, 190, 255);

  /**
   * Metallic Nautical Blue
   */
  public static metallicnauticalblue = new Color(52, 94, 114, 255);

  /**
   * Metallic Bright Blue
   */
  public static metallicbrightblue = new Color(11, 156, 241, 255);

  /**
   * Metallic Purple Blue
   */
  public static metallicpurpleblue = new Color(47, 45, 82, 255);

  /**
   * Metallic Spinnaker Blue
   */
  public static metallicspinnakerblue = new Color(40, 44, 77, 255);

  /**
   * Metallic Ultra Blue
   */
  public static metallicultrablue = new Color(35, 84, 161, 255);

  /**
   * Util Dark Blue
   */
  public static utildarkblue = new Color(17, 37, 82, 255);

  /**
   * Util Midnight Blue
   */
  public static utilmidnightblue = new Color(27, 32, 62, 255);

  /**
   * Util Blue
   */
  public static utilblue = new Color(39, 81, 144, 255);

  /**
   * Util Sea Foam Blue
   */
  public static utilseafoamblue = new Color(96, 133, 146, 255);

  /**
   * Util Lightning Blue
   */
  public static utillightningblue = new Color(36, 70, 168, 255);

  /**
   * Util Maui Blue Poly
   */
  public static utilmauibluepoly = new Color(66, 113, 225, 255);

  /**
   * Util Bright Blue
   */
  public static utilbrightblue = new Color(59, 57, 224, 255);

  /**
   * Matte Dark Blue
   */
  public static mattedarkblue = new Color(31, 40, 82, 255);

  /**
   * Matte Blue
   */
  public static matteblue = new Color(37, 58, 167, 255);

  /**
   * Matte Midnight Blue
   */
  public static mattemidnightblue = new Color(28, 53, 81, 255);

  /**
   * Worn Dark Blue
   */
  public static worndarkblue = new Color(76, 95, 129, 255);

  /**
   * Worn Blue
   */
  public static wornblue = new Color(88, 104, 142, 255);

  /**
   * Worn Light Blue
   */
  public static wornlightblue = new Color(116, 181, 216, 255);

  /**
   * Metallic Taxi Yellow
   */
  public static metallictaxiyellow = new Color(255, 207, 32, 255);

  /**
   * Metallic Race Yellow
   */
  public static metallicraceyellow = new Color(251, 226, 18, 255);

  /**
   * Metallic Bronze
   */
  public static metallicbronze = new Color(145, 101, 50, 255);

  /**
   * Metallic Yellow Bird
   */
  public static metallicyellowbird = new Color(224, 225, 61, 255);

  /**
   * Metallic Lime
   */
  public static metalliclime = new Color(152, 210, 35, 255);

  /**
   * Metallic Champagne
   */
  public static metallicchampagne = new Color(155, 140, 120, 255);

  /**
   * Metallic Pueblo Beige
   */
  public static metallicpueblobeige = new Color(80, 50, 24, 255);

  /**
   * Metallic Dark Ivory
   */
  public static metallicdarkivory = new Color(71, 63, 43, 255);

  /**
   * Metallic Choco Brown
   */
  public static metallicchocobrown = new Color(34, 27, 25, 255);

  /**
   * Metallic Golden Brown
   */
  public static metallicgoldenbrown = new Color(101, 63, 35, 255);

  /**
   * Metallic Light Brown
   */
  public static metalliclightbrown = new Color(119, 92, 62, 255);

  /**
   * Metallic Straw Beige
   */
  public static metallicstrawbeige = new Color(172, 153, 117, 255);

  /**
   * Metallic Moss Brown
   */
  public static metallicmossbrown = new Color(108, 107, 75, 255);

  /**
   * Metallic Biston Brown
   */
  public static metallicbistonbrown = new Color(64, 46, 43, 255);

  /**
   * Metallic Beechwood
   */
  public static metallicbeechwood = new Color(164, 150, 95, 255);

  /**
   * Metallic Dark Beechwood
   */
  public static metallicdarkbeechwood = new Color(70, 35, 26, 255);

  /**
   * Metallic Choco Orange
   */
  public static metallicchocoorange = new Color(117, 43, 25, 255);

  /**
   * Metallic Beach Sand
   */
  public static metallicbeachsand = new Color(191, 174, 123, 255);

  /**
   * Metallic Sun Bleeched Sand
   */
  public static metallicsunbleechedsand = new Color(223, 213, 178, 255);

  /**
   * Metallic Cream
   */
  public static metalliccream = new Color(247, 237, 213, 255);

  /**
   * Util Brown
   */
  public static utilbrown = new Color(58, 42, 27, 255);

  /**
   * Util Medium Brown
   */
  public static utilmediumbrown = new Color(120, 95, 51, 255);

  /**
   * Util Light Brown
   */
  public static utillightbrown = new Color(181, 160, 121, 255);

  /**
   * Metallic White
   */
  public static metallicwhite = new Color(255, 255, 246, 255);

  /**
   * Metallic Frost White
   */
  public static metallicfrostwhite = new Color(234, 234, 234, 255);

  /**
   * Worn Honey Beige
   */
  public static wornhoneybeige = new Color(176, 171, 148, 255);

  /**
   * Worn Brown
   */
  public static wornbrown = new Color(69, 56, 49, 255);

  /**
   * Worn Dark Brown
   */
  public static worndarkbrown = new Color(42, 40, 43, 255);

  /**
   * Worn Straw Beige
   */
  public static wornstrawbeige = new Color(114, 108, 87, 255);

  /**
   * Brushed Steel
   */
  public static brushedsteel = new Color(106, 116, 124, 255);

  /**
   * Brushed Black Steel
   */
  public static brushedblacksteel = new Color(53, 65, 88, 255);

  /**
   * Brushed Aluminium
   */
  public static brushedaluminium = new Color(155, 160, 168, 255);

  /**
   * Chrome
   */
  public static chrome = new Color(88, 112, 161, 255);

  /**
   * Worn Off White
   */
  public static wornoffwhite = new Color(234, 230, 222, 255);

  /**
   * Util Off White
   */
  public static utiloffwhite = new Color(223, 221, 208, 255);

  /**
   * Worn Orange
   */
  public static wornorange = new Color(242, 173, 46, 255);

  /**
   * Worn Light Orange
   */
  public static wornlightorange = new Color(249, 164, 88, 255);

  /**
   * Metallic Securicor Green
   */
  public static metallicsecuricorgreen = new Color(131, 197, 102, 255);

  /**
   * Worn Taxi Yellow
   */
  public static worntaxiyellow = new Color(241, 204, 64, 255);

  /**
   * Police Car Blue
   */
  public static policecarblue = new Color(76, 195, 218, 255);

  /**
   * Matte Green
   */
  public static mattegreen = new Color(78, 100, 67, 255);

  /**
   * Matte Brown
   */
  public static mattebrown = new Color(188, 172, 143, 255);

  /**
   * Matte White
   */
  public static mattewhite = new Color(252, 249, 241, 255);

  /**
   * Worn White
   */
  public static wornwhite = new Color(255, 255, 251, 255);

  /**
   * Worn Olive Army Green
   */
  public static wornolivearmygreen = new Color(129, 132, 76, 255);

  /**
   * Pure White
   */
  public static purewhite = new Color(255, 255, 255, 255);

  /**
   * Hot Pink
   */
  public static hotpink = new Color(242, 31, 153, 255);

  /**
   * Salmon Pink
   */
  public static salmonpink = new Color(253, 214, 205, 255);

  /**
   * Metallic Vermillion Pink
   */
  public static metallicvermillionpink = new Color(223, 88, 145, 255);

  /**
   * Orange
   */
  public static orange = new Color(246, 174, 32, 255);

  /**
   * Green
   */
  public static green = new Color(176, 238, 110, 255);

  /**
   * Blue
   */
  public static blue = new Color(8, 233, 250, 255);

  /**
   * Mettalic Black Blue
   */
  public static mettalicblackblue = new Color(10, 12, 23, 255);

  /**
   * Metallic Black Purple
   */
  public static metallicblackpurple = new Color(12, 13, 24, 255);

  /**
   * Metallic Black Red
   */
  public static metallicblackred = new Color(14, 13, 20, 255);

  /**
   * Hunter Green
   */
  public static huntergreen = new Color(159, 158, 138, 255);

  /**
   * Metallic Purple
   */
  public static metallicpurple = new Color(98, 18, 118, 255);

  /**
   * Metaillic V Dark Blue
   */
  public static metaillicvdarkblue = new Color(11, 20, 33, 255);

  /**
   * Modshop Black
   */
  public static modshopblack = new Color(17, 20, 26, 255);

  /**
   * Matte Purple
   */
  public static mattepurple = new Color(107, 31, 123, 255);

  /**
   * Matte Dark Purple
   */
  public static mattedarkpurple = new Color(30, 29, 34, 255);

  /**
   * Metallic Lava Red
   */
  public static metalliclavared = new Color(188, 25, 23, 255);

  /**
   * Matte Forest Green
   */
  public static matteforestgreen = new Color(45, 54, 42, 255);

  /**
   * Matte Olive Drab
   */
  public static matteolivedrab = new Color(105, 103, 72, 255);

  /**
   * Matte Desert Brown
   */
  public static mattedesertbrown = new Color(122, 108, 85, 255);

  /**
   * Matte Desert Tan
   */
  public static mattedeserttan = new Color(195, 180, 146, 255);

  /**
   * Matte Foilage Green
   */
  public static mattefoilagegreen = new Color(90, 99, 82, 255);

  /**
   * Default Alloy
   */
  public static defaultalloy = new Color(129, 130, 127, 255);

  /**
   * Epsilon Blue
   */
  public static epsilonblue = new Color(175, 214, 228, 255);

  /**
   * Pure Gold
   */
  public static puregold = new Color(122, 100, 64, 255);

  /**
   * Brushed Gold
   */
  public static brushedgold = new Color(127, 106, 72, 255);
  /**
   * A transparent color (fully transparent).
   */
  public static empty: Color = new Color(0, 0, 0, 0);

  /**
   * A fully transparent color.
   */
  public static transparent: Color = new Color(0, 0, 0, 0);

  /**
   * The color black (RGB: 0, 0, 0).
   */
  public static black: Color = new Color(0, 0, 0, 255);

  /**
   * The color white (RGB: 255, 255, 255).
   */
  public static white: Color = new Color(255, 255, 255, 255);

  /**
   * The color white smoke (RGB: 245, 245, 245).
   */
  public static whiteSmoke: Color = new Color(245, 245, 245, 255);

  /**
   * The color gray (RGB: 128, 128, 128).
   */
  public static gray: Color = new Color(128, 128, 128, 255);

  /**
   * The color silver (RGB: 192, 192, 192).
   */
  public static silver: Color = new Color(192, 192, 192, 255);

  /**
   * The color maroon (RGB: 128, 0, 0).
   */
  public static maroon: Color = new Color(128, 0, 0, 255);

  /**
   * The color red (RGB: 255, 0, 0).
   */
  public static red: Color = new Color(255, 0, 0, 255);

  /**
   * The color purple (RGB: 128, 0, 128).
   */
  public static purple: Color = new Color(128, 0, 128, 255);

  /**
   * The color fuchsia (RGB: 255, 0, 255).
   */
  public static fuchsia: Color = new Color(255, 0, 255, 255);

  /**
   * The color lime (RGB: 0, 255, 0).
   */
  public static lime: Color = new Color(0, 255, 0, 255);

  /**
   * The color olive (RGB: 128, 128, 0).
   */
  public static olive: Color = new Color(128, 128, 0, 255);

  /**
   * The color yellow (RGB: 255, 255, 0).
   */
  public static yellow: Color = new Color(255, 255, 0, 255);

  /**
   * The color navy (RGB: 0, 0, 128).
   */
  public static navy: Color = new Color(0, 0, 128, 255);

  /**
   * The color teal (RGB: 0, 128, 128).
   */
  public static teal: Color = new Color(0, 128, 128, 255);

  /**
   * The color aqua (RGB: 0, 255, 255).
   */
  public static aqua: Color = new Color(0, 255, 255, 255);

  /**
   * The color pink (RGB: 255, 192, 203).
   */
  public static pink: Color = new Color(255, 192, 203, 255);

  /**
   * The color brown (RGB: 165, 42, 42).
   */
  public static brown: Color = new Color(165, 42, 42, 255);

  /**
   * The color light coral (RGB: 240, 128, 128).
   */
  public static lightCoral: Color = new Color(240, 128, 128, 255);

  /**
   * The color coral (RGB: 255, 127, 80).
   */
  public static coral: Color = new Color(255, 127, 80, 255);

  /**
   * The color gold (RGB: 255, 215, 0).
   */
  public static gold: Color = new Color(255, 215, 0, 255);

  /**
   * The color khaki (RGB: 240, 230, 140).
   */
  public static khaki: Color = new Color(240, 230, 140, 255);

  /**
   * The color salmon (RGB: 250, 128, 114).
   */
  public static salmon: Color = new Color(250, 128, 114, 255);

  /**
   * The color chocolate (RGB: 210, 105, 30).
   */
  public static chocolate: Color = new Color(210, 105, 30, 255);

  /**
   * Creates a new `Color` instance.
   * @param r - The red component of the color (0-255).
   * @param g - The green component of the color (0-255).
   * @param b - The blue component of the color (0-255).
   * @param a - The alpha (opacity) component of the color (0-255).
   */
  constructor(
    public r: number,
    public g: number,
    public b: number,
    public a = 255
  ) {}

  /**
   * Checks if this color is equal to another color.
   * @param other - The color to compare with.
   * @returns `true` if the colors are equal, `false` otherwise.
   */
  public equals(other: Color): boolean {
    return (
      this.a === other.a &&
      this.r === other.r &&
      this.g === other.g &&
      this.b === other.b
    );
  }

  /**
   * Converts the color to a JSON object.
   * @returns An object representing the color with `r`, `g`, `b`, and `a` properties.
   */
  public toJson(): { r: number; g: number; b: number; a: number } {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
    };
  }

  /**
   * Converts the color to an array.
   * @returns An array representing the color with `[r, g, b, a]` components.
   */
  public toArray(): [number, number, number, number] {
    return [this.r, this.g, this.b, this.a];
  }

  /**
   * Converts the color to an RGBA string.
   * @returns A string in the format `rgba(r, g, b, a)`.
   */
  public toRgbaString(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * Converts the color to a hexadecimal string (RGB format).
   * @returns A string in the format `#rrggbb`.
   */
  public toHex(): string {
    return `#${Color.componentToHex(this.r)}${Color.componentToHex(
      this.g
    )}${Color.componentToHex(this.b)}`;
  }

  /**
   * Converts the color to a hexadecimal string (ARGB format).
   * @returns A string in the format `#aarrggbb`.
   */
  public toArgbHex(): string {
    return `#${Color.componentToHex(this.a)}${Color.componentToHex(
      this.r
    )}${Color.componentToHex(this.g)}${Color.componentToHex(this.b)}`;
  }

  /**
   * Converts the color to HSL format.
   * @returns An object with `h` (hue), `s` (saturation), `l` (lightness), and `a` (alpha) properties.
   */
  public toHsl(): { h: number; s: number; l: number; a: number } {
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h: number, s: number;
    const l: number = (max + min) / 2;

    if (delta === 0) {
      h = s = 0;
    } else {
      s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

      switch (max) {
        case r:
          h = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / delta + 2;
          break;
        case b:
          h = (r - g) / delta + 4;
          break;
        default:
          h = 0;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
      a: this.a,
    };
  }

  /**
   * Adjusts the brightness of the color.
   * @param factor - The factor by which to adjust the brightness. Values less than 1 darken the color, values greater than 1 lighten the color.
   * @returns A new `Color` instance with adjusted brightness.
   */
  public adjustBrightness(factor: number) {
    return new Color(
      clamp(this.r * factor, 0, 255),
      clamp(this.g * factor, 0, 255),
      clamp(this.b * factor, 0, 255),
      255
    );
  }

  /**
   * Darkens the color by a percentage.
   * @param percentage - The percentage by which to darken the color.
   * @returns A new `Color` instance that is darker by the specified percentage.
   */
  public darken(percentage: number): Color {
    return this.adjustBrightness(1 - percentage / 100);
  }

  /**
   * Lightens the color by a percentage.
   * @param percentage - The percentage by which to lighten the color.
   * @returns A new `Color` instance that is lighter by the specified percentage.
   */
  public lighten(percentage: number): Color {
    return this.adjustBrightness(1 + percentage / 100);
  }

  /**
   * Blends this color with another color.
   * @param other - The color to blend with.
   * @param ratio - The ratio of blending between this color and the other color. `0` means full color, `1` means full `other` color.
   * @returns A new `Color` instance representing the blended color.
   */
  public blend(other: Color, ratio: number): Color {
    const clampedRatio: number = clamp(ratio, 0, 1);

    return new Color(
      clamp(this.r * (1 - clampedRatio) + other.r * clampedRatio, 0, 255),
      clamp(this.g * (1 - clampedRatio) + other.g * clampedRatio, 0, 255),
      clamp(this.b * (1 - clampedRatio) + other.b * clampedRatio, 0, 255),
      clamp(this.a * (1 - clampedRatio) + other.a * clampedRatio, 0, 255)
    );
  }

  /**
   * Inverts the color.
   * @returns A new `Color` instance representing the inverted color.
   */
  public invert(): Color {
    return new Color(255 - this.r, 255 - this.g, 255 - this.b, this.a);
  }

  // Static Methods
  /**
   * Converts a color component to a hexadecimal string.
   * @param c - The color component (0-255).
   * @returns A two-character hexadecimal string representing the color component.
   */
  private static componentToHex(c: number): string {
    return c.toString(16).padStart(2, '0');
  }

  /**
   * Creates a new `Color` instance from ARGB values.
   * @param a - The alpha (opacity) component (0-255).
   * @param r - The red component (0-255).
   * @param g - The green component (0-255).
   * @param b - The blue component (0-255).
   * @returns A new `Color` instance.
   */
  public static fromArgb(a: number, r: number, g: number, b: number): Color {
    return new Color(r, g, b, a);
  }

  /**
   * Creates a new `Color` instance from RGB values.
   * @param r - The red component (0-255).
   * @param g - The green component (0-255).
   * @param b - The blue component (0-255).
   * @returns A new `Color` instance with full opacity (alpha = 255).
   */
  public static fromRgb(r: number, g: number, b: number): Color {
    return new Color(255, r, g, b);
  }

  /**
   * Creates a new `Color` instance from a hexadecimal color string.
   * @param hex - The hexadecimal color string (e.g., `#RRGGBB`).
   * @returns A new `Color` instance.
   */
  public static fromHex(hex: string): Color {
    if (hex.startsWith('#')) {
      hex = hex.substring(1);
    }

    const bigInt: number = parseInt(hex, 16);
    const r = (bigInt >> 16) & 255;
    const g = (bigInt >> 8) & 255;
    const b = bigInt & 255;

    return new Color(r, g, b, 255);
  }

  /**
   * Creates a new `Color` instance from an RGBA string.
   * @param rgba - The RGBA color string (e.g., `rgba(255, 0, 0, 1)`).
   * @returns A new `Color` instance.
   * @throws Error if the RGBA string is invalid.
   */
  public static fromRgbaString(rgba: string): Color {
    const result =
      /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/.exec(
        rgba
      );

    if (result) {
      const r = parseInt(result[1], 10);
      const g = parseInt(result[2], 10);
      const b = parseInt(result[3], 10);
      const a = result[4] ? Math.round(parseFloat(result[4]) * 255) : 255;
      return new Color(r, g, b, a);
    }

    throw new Error('Invalid RGBA string');
  }

  /**
   * Creates a new `Color` instance from HSL values.
   * @param h - The hue (0-360 degrees).
   * @param s - The saturation (0-100).
   * @param l - The lightness (0-100).
   * @param a - The alpha (opacity) component (0-255).
   * @returns A new `Color` instance.
   */
  public static fromHsl(h: number, s: number, l: number, a = 255): Color {
    h = h % 360;
    s = clamp(s, 0, 100) / 100;
    l = clamp(l, 0, 100) / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r: number, g: number, b: number;
    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }

    return new Color(
      clamp((r + m) * 255, 0, 255),
      clamp((g + m) * 255, 0, 255),
      clamp((b + m) * 255, 0, 255),
      a
    );
  }
}
