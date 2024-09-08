[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / HttpRequest

# Interface: HttpRequest

## Properties

### address

> **address**: `string`

#### Defined in

[server/web/HttpRequest.ts:2](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L2)

***

### body?

> `optional` **body**: `unknown`

#### Defined in

[server/web/HttpRequest.ts:6](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L6)

***

### headers

> **headers**: `Record`\<`string`, `string`\>

#### Defined in

[server/web/HttpRequest.ts:3](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L3)

***

### method

> **method**: `string`

#### Defined in

[server/web/HttpRequest.ts:4](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L4)

***

### path

> **path**: `string`

#### Defined in

[server/web/HttpRequest.ts:5](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L5)

## Methods

### setCancelHandler()

> **setCancelHandler**(`handler`): `void`

#### Parameters

• **handler**

#### Returns

`void`

#### Defined in

[server/web/HttpRequest.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L9)

***

### setDataHandler()

#### setDataHandler(handler)

> **setDataHandler**(`handler`): `void`

##### Parameters

• **handler**

##### Returns

`void`

##### Defined in

[server/web/HttpRequest.ts:7](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L7)

#### setDataHandler(handler, binary)

> **setDataHandler**(`handler`, `binary`): `void`

##### Parameters

• **handler**

• **binary**: `"binary"`

##### Returns

`void`

##### Defined in

[server/web/HttpRequest.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/HttpRequest.ts#L8)
