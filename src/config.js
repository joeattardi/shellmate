import path from 'path';
import fs from 'fs/promises';
import os from 'os';

export let config;

export async function loadConfig() {
    const configPath = path.resolve(os.homedir(), 'shellmate.json');
    config = JSON.parse(
        await fs.readFile(configPath)
    );
}
