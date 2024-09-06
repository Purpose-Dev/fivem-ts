[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Server](../README.md) / post

# Function: post()

> **post**\<`T`\>(`url`, `data`, `headers`): `Promise`\<`T`\>

Makes a POST request.

## Type Parameters

• **T**

## Parameters

• **url**: `string`

The URL to which the request is sent.

• **data**: [`RequestData`](../interfaces/RequestData.md)

The request body data.

• **headers**: [`RequestHeaders`](../interfaces/RequestHeaders.md) = `{}`

Optional headers to include in the request.

## Returns

`Promise`\<`T`\>

A promise that resolves to the response data of type T.

## Defined in

[server/web/requests.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/requests.ts#L22)
