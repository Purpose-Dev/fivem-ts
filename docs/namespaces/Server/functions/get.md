[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / get

# Function: get()

> **get**\<`T`\>(`url`, `headers`): `Promise`\<`T`\>

Makes a GET request.

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

[server/web/requests.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/server/web/requests.ts#L10)
