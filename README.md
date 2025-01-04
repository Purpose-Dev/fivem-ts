<h1 style="text-align: center;">fivem-ts</h1>

<p style="text-align: center; font-style: italic;">
  <i>🔥 A JavaScript/TypeScript wrapper for the FiveM natives 🎮</i>
</p>

---

<p style="text-align: center;">
  <a href="https://github.com/Purpose-Dev/fivem-ts/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://app.deepsource.com/gh/Purpose-Dev/fivem-ts/" target="_blank">
    <img alt="DeepSource" title="DeepSource" src="https://app.deepsource.com/gh/Purpose-Dev/fivem-ts.svg/?label=code+coverage&show_trend=true&token=2hNgZBbR-38Suxh234Im3_ck"/>
  </a>
  <a href="https://github.com/Purpose-Dev/fivem-ts/commits/main">
    <img src="https://img.shields.io/github/last-commit/Purpose-Dev/fivem-ts.svg?style=flat" alt="Last commit">
  </a>
  <a href="https://discord.gg/Rah7Bt4TeJ">
    <img src="https://img.shields.io/discord/1273215892238372895?label=Discord" alt="Discord">
  </a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Download and Install](#download-and-install)
    - [Client Package](#client-package)
    - [Server Package](#server-package)
    - [Shared Package](#shared-package)
- [Usage](#usage)
- [Community](#community)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

<p style="text-align: center;">
  <a href="https://purpose-dev.github.io/fivem-ts/">Documentation</a> -
  <a href="https://discord.gg/Rah7Bt4TeJ">Join our Discord</a>
</p>

<p style="text-align: center;">
  This wrapper is <strong>based on the FiveM C# wrapper</strong> - 
  <a href="https://github.com/citizenfx/fivem/tree/master/code/client/clrcore/External">link</a>.
  <br><br>
  It offers a comprehensive set of helper classes, objects, and functions designed to accelerate your project development.
  <br><br>
  Originally forked from Fivem-js by d0p3t (<a href="https://github.com/d0p3t/fivem-js">link</a>), 
  this project has since evolved. A big thank you to d0p3t for the initial inspiration and contributions! ❤️
</p>

---

## Features

- **Dependencies**:

    - [@citizenfx/client](https://www.npmjs.com/package/@citizenfx/client)
    - [@citizenfx/server](https://www.npmjs.com/package/@citizenfx/server)
    - [cross-fetch](https://www.npmjs.com/package/cross-fetch)
    - [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)

- **Abstraction of common FiveM practices**: Simplifies development tasks.

- **Entity management**: Includes class objects for `Vehicle`, `Ped`, and more.

- **UI Elements**: Supports `scaleforms`, loading `prompts`, and other UI components.

- **Additional Functionality**: Handles Audio, Blips, Cameras, and more.

- **Web Wrapper**: Support for making requests and using `HttpHandlers` in resources.

- **Upcoming Features**:
    - Groups Management
    - Buckets Management
    - **IoC (Inversion of Control)**: Full support with TypeScript Decorators.

In essence, this package encompasses all the capabilities of the FiveM C# wrapper and offers even more!

---

## Download and Install

### Client Package

Easily integrate the client package into your project.

- **View on npm**: [@fivem-ts/client](https://www.npmjs.com/package/@fivem-ts/client)
- **Install**:

    ```bash
    # Using npm
    npm install @fivem-ts/client

    # Using pnpm
    pnpm add @fivem-ts/client

    # Using yarn
    yarn add @fivem-ts/client
    ```

### Server Package

Easily integrate the server package into your project.

- **View on npm**: [@fivem-ts/server](https://www.npmjs.com/package/@fivem-ts/server)
- **Install**:

    ```bash
    # Using npm
    npm install @fivem-ts/server

    # Using pnpm
    pnpm add @fivem-ts/server

    # Using yarn
    yarn add @fivem-ts/server
    ```

### Shared Package

Easily integrate the shared package into your project.

- **View on npm**: [@fivem-ts/shared](https://www.npmjs.com/package/@fivem-ts/shared)
- **Install**:

    ```bash
    # Using npm
    npm install @fivem-ts/shared

    # Using pnpm
    pnpm add @fivem-ts/shared

    # Using yarn
    yarn add @fivem-ts/shared
    ```

---

## Usage

Explore [example projects](./examples/README.md) to get started.

---

## Community

Connect with us on our [public discord server](https://discord.gg/Rah7Bt4TeJ) for **help and discussions**.

---

## Contributing

We welcome contributions! You can assist by submitting pull requests or reporting issues.

For contribution guidelines, please refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## License

**MIT** (Custom license details coming soon). See the [LICENSE](./LICENSE) file for more information's.

---
