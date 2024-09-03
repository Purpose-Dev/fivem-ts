[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / put

# Function: put()

> **put**\<`T`\>(`url`, `data`, `headers`): `Promise`\<`T`\>

Makes a PUT request.

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

[server/web/requests.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/requests.ts#L38)