const fs = require('fs');
const path = require('path');
const { build } = require('esbuild');
const chokidar = require('chokidar');

const IS_PROD = process.env.IS_PRODUCTION === '1';
const IS_WATCH_MODE = process.env.IS_WATCH_MODE === '1';
const FOLDERS = ['../src/server', '../src/client'];

async function loadChalk() {
    return import("chalk");
}

async function buildEntrypoint(entryPoint, outDir, target, format, platform) {
    const chalk = await loadChalk();

    try {
        await build({
            entryPoints: [entryPoint],
            bundle: true,
            outdir: outDir,
            target,
            format,
            platform,
            minify: IS_PROD,
            minifyWhitespace: IS_PROD,
            sourcemap: IS_PROD ? false : 'inline',
            logLevel: IS_PROD ? 'silent' : 'verbose',
        });

        const folderName = entryPoint.includes('server') ? 'server' : 'client';
        console.log(chalk.default.green(`[${folderName}]: Built successfully!`));
    } catch (error) {
        console.error(chalk.default.red(`Error building ${entryPoint}: ${error.message}`));
        if (!IS_WATCH_MODE) process.exit(1);
    }
}

async function watchFolder(entryPoint, outDir, target, format, platform) {
    const chalk = await loadChalk();
    const folderName = entryPoint.includes('server') ? 'server' : 'client';
    console.log(chalk.default.yellow(`[${folderName}]: Watching for changes...`));

    chokidar
        .watch(path.dirname(entryPoint), {
            ignoreInitial: true,
        })
        .on('change', async (event) => {
            event = event.replace(__dirname, '');

            console.log(chalk.default.yellow(`[${folderName}]: File changed: ${event} - Rebuilding...`));
            await buildEntrypoint(entryPoint, outDir, target, format, platform);
        });
}

async function buildOrWatchAll() {
    const chalk = await loadChalk();

    console.log(chalk.default.yellow('Building...'));

    for (const folder of FOLDERS) {
        const folderPath = path.join(__dirname, folder);
        const outDir = path.join(__dirname, '..', 'dist', path.basename(folder));

        let entryPointFiles = fs.readdirSync(folderPath);

        if (!entryPointFiles.length) {
            console.log(chalk.default.red(`[${folder}]: No results returned from readdirSync. Please make sure the ${folder} folder contains an entrypoint file (index.ts).`));
            process.exit(1);
        }

        if (!entryPointFiles.includes('index.ts')) {
            console.log(chalk.default.red(`[${folder}]: No entrypoint found! Please create an entrypoint file index.ts in the ${folder} folder.`));
            process.exit(1);
        }

        const entryPoint = path.join(folderPath, 'index.ts');

        console.log(chalk.default.yellow(`[${folder}]: Building entrypoint: ${entryPoint}...`));

        await buildEntrypoint(
            entryPoint,
            outDir,
            folder === '../src/client' ? ['chrome58'] : undefined,
            folder === '../src/client' ? 'iife' : 'cjs',
            folder === '../src/server' ? 'node' : undefined,
        );

        if (IS_WATCH_MODE) {
            await watchFolder(
                entryPoint,
                outDir,
                folder === '../src/client' ? ['chrome58'] : undefined,
                folder === '../src/client' ? 'iife' : 'cjs',
                folder === '../src/server' ? 'node' : undefined,
            );
        }
    }

    if (!IS_WATCH_MODE) {
        console.log(chalk.default.green('Built all successfully!'));
    }
}

buildOrWatchAll();
