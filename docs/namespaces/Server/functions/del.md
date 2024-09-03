[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / del

# Function: del()

> **del**\<`T`\>(`url`, `headers`): `Promise`\<`T`\>

Makes a DELETE request.

## Type Parameters

• **T**

## Parameters

• **url**: `string`

The URL to which the request is sent.

• **headers**: [`RequestHeaders`](../interfaces/RequestHeaders.md) = `{}`

Optional headers to include in the request.

## Returns

`Promise`\<`T`\>

A promise that resolves to the response data of type T.

## Defined in

[server/web/requests.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/server/web/requests.ts#L53)
