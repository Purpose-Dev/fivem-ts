import { Dirent, promises as fs, Stats } from 'fs';
import * as path from 'path';

async function directoryExists(dirPath: string): Promise<boolean> {
	try {
		await fs.access(dirPath);
		return true;
	} catch {
		return false;
	}
}

export async function deleteDirectories(basePath: string, globPattern: string): Promise<void> {
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

		console.log(`Finished processing all ${globPattern} directories.`);
	} catch (err) {
		console.error(`An error occurred while processing directories: ${err}`);
	}
}

export async function deleteDirectory(dirPath: string): Promise<void> {
	const baseDir: string = path.resolve(dirPath);

	try {
		const stat: Stats = await fs.lstat(baseDir);

		if (stat.isDirectory()) {
			if (await directoryExists(path.join(baseDir))) {
				console.info(`Deleting directory: ${baseDir}`);
				await fs.rm(baseDir, { recursive: true, force: true });
				console.log(`Successfully deleted directory: ${baseDir}`);
			}
		} else {
			console.log('Path exists but is not a directory.');
		}
	} catch (err: any) {
		if (err.code === 'ENOENT') {
			console.warn(`Directory does not exist: ${baseDir}`);
		} else {
			console.error(`An error occurred while deleting directory: ${err.message}`);
			throw err;
		}
	}
}
