/**
 * Enum representing different font styles.
 *
 * The Font enum provides a set of predefined font styles that can be used to customize text appearance.
 *
 * Enum Members:
 *
 * - `ChaletLondon`: Represents the 'Chalet London' font style.
 * - `HouseScript`: Represents the 'House Script' font style.
 * - `Monospace`: Represents the 'Monospace' font style.
 * - `ChaletComprimeCologne`: Represents the 'Chalet Comprime Cologne' font style, with an explicit value of 4.
 * - `Pricedown`: Represents the 'Pricedown' font style, with an explicit value of 7.
 *
 * @enum{number}
 */
export enum Font {
    ChaletLondon,
    HouseScript,
    Monospace,
    ChaletComprimeCologne = 4,
    Pricedown = 7,
}
