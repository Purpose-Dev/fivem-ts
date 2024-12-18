import { Dirent, promises as fs } from 'fs';
import * as path from 'path';

async function directoryExists(dirPath: string): Promise<boolean> {
    try {
        await fs.access(dirPath);
        return true;
    } catch {
        return false;
    }
}

async function deleteDistDirectories(basePath: string, globPattern: string): Promise<void> {
    const baseDir: string = path.resolve(basePath);

    try {
        const directories: Dirent[] = await fs.readdir(baseDir, { withFileTypes: true });

        for (const dir of directories) {
            if (dir.isDirectory()) {
                const distDir: string = path.join(baseDir, dir.name, globPattern);

                if (await directoryExists(distDir)) {
                    console.info(`Deleting: ${distDir}`);
                    await fs.rm(distDir, { recursive: true, force: true });
                }
            }
        }

        console.log('Finished processing all dist directories.');
    } catch (err) {
        console.error(`An error occurred while processing directories: ${err}`);
    }
}

void deleteDistDirectories('packages', 'dist');
