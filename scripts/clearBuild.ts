import { promises as fs } from 'fs';
import * as path from 'path';

async function deleteDistDirectories(basePath: string, globPattern: string) {
    try {
        const baseDir = path.resolve(basePath);
        const directories = await fs.readdir(baseDir, { withFileTypes: true });

        for (const dir of directories) {
            if (dir.isDirectory()) {
                const packageDir = path.join(baseDir, dir.name);
                const distDir = path.join(packageDir, globPattern);

                try {
                    await fs.access(distDir);
                    console.log(`Deleting: ${distDir}`);
                    await fs.rm(distDir, { recursive: true, force: true });
                } catch {
                    console.warn(`Directory not found: ${distDir}`);
                }
            }
        }

        console.log('Finished deleting dist directories.');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

void deleteDistDirectories('packages', 'dist');
