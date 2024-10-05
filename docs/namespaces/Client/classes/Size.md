[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / Size

# Class: Size

Represents the size of a 2D object with width and height dimensions.

This class is used to define the dimensions of 2D elements, such as UI components
or screen areas, typically in the context of FiveM scripts. The `Size` class includes
`width` and `height` properties to specify these dimensions.

## Example

```ts
const size = new Size(1920, 1080);
console.log(size.width);  // Output: 1920
console.log(size.height); // Output: 1080
```

## Constructors

### new Size()

> **new Size**(`w`, `h`): [`Size`](Size.md)

Creates an instance of `Size` with specified width and height.

#### Parameters

• **w**: `number` = `0`

The width dimension of the size. Defaults to `0`.

• **h**: `number` = `0`

The height dimension of the size. Defaults to `0`.

#### Returns

[`Size`](Size.md)

#### Defined in

[client/utils/Size.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Size.ts#L26)

## Properties

### height

> **height**: `number`

#### Defined in

[client/utils/Size.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Size.ts#L18)

***

### width

> **width**: `number`

#### Defined in

[client/utils/Size.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Size.ts#L17)
