import * as esbuild from "esbuild";
import { BuildOptions, SameShape } from "esbuild";

const buildOptions: SameShape<BuildOptions, BuildOptions>[] = [
    {
        entryPoints: ["src/client/index.ts"],
        bundle: true,
        minify: true,
        outfile: "dist/client/index.js",
        platform: "browser",
        format: "iife",
        tsconfig: "src/client/tsconfig.json",
    },
    {
        entryPoints: ["src/server/index.ts"],
        bundle: true,
        minify: true,
        outfile: "dist/server/index.js",
        platform: "node",
        format: "cjs",
        target: "node16",
        tsconfig: "src/server/tsconfig.json",
    },
];

async function build(): Promise<void> {
    for (const options of buildOptions) {
        await esbuild.build(options);
    }
}

void build();
