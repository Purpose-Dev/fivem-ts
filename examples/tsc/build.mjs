import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);
const projects = ["client", "server"];

async function build() {
    for (const project of projects) {
        const tsconfigPath = `src/${project}/tsconfig.json`;
        console.info(`Building project: ${project} (TSConfig: ${tsconfigPath})`);

        try {
            const { stdout, stderr } = await execPromise(`tsc --project ${tsconfigPath}`);
            if (stdout) console.log(`[${project}] Output:\n${stdout}`);
            if (stderr) console.warn(`[${project}] Warnings:\n${stderr}`);

            console.log(`[${project}] Build completed successfully.`);
        } catch (error) {
            console.error(`[${project}] Build failed: ${error.message}`);
            process.exit(1);
        }
    }

    console.info("All projects built successfully!");
}

void build();
