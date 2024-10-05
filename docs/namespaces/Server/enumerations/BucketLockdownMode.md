[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Server](../README.md) / BucketLockdownMode

# Enumeration: BucketLockdownMode

Enum representing the Lockdown Modes for a specific routing bucket.

One of the aforementioned modes.
Sets the entity lockdown mode for a specific routing bucket.

Lockdown modes are:

- `strict`: No entities can be created by clients at all.
- `relaxed`: Only script-owned entities created by clients are blocked.
- `inactive`: Clients can create any entity they want.

## Enumeration Members

### Inactive

> **Inactive**: `"inactive"`

Clients can create any entity they want.

#### Defined in

[server/enums/BucketLockdownMode.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/enums/BucketLockdownMode.ts#L27)

***

### Relaxed

> **Relaxed**: `"relaxed"`

Only script-owned entities created by clients are blocked.

#### Defined in

[server/enums/BucketLockdownMode.ts:23](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/enums/BucketLockdownMode.ts#L23)

***

### Strict

> **Strict**: `"strict"`

No entities can be created by clients at all.

#### Defined in

[server/enums/BucketLockdownMode.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/enums/BucketLockdownMode.ts#L19)
