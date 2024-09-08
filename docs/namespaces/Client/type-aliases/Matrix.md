[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / Matrix

# Type Alias: Matrix

> **Matrix**: [[`number`, `number`, `number`], [`number`, `number`, `number`], [`number`, `number`, `number`], [`number`, `number`, `number`]]

A `Matrix` type represents a 4x3 matrix, where each row is a tuple of three numbers.

The matrix is typically used in 3D graphics to represent transformations like translation,
rotation, and scaling. Each tuple in the matrix corresponds to a vector in 3D space.

- `forwardVector`: Represents the forward direction.
- `rightVector`: Represents the right direction.
- `upVector`: Represents the upward direction.
- `position`: Represents the position in 3D space.

Example usage:
```ts
const matrix: Matrix = [
  [1, 0, 0],  // forwardVector
  [0, 1, 0],  // rightVector
  [0, 0, 1],  // upVector
  [0, 0, 0]   // position
];
```

## Defined in

[client/types/Matrix.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/types/Matrix.ts#L22)
