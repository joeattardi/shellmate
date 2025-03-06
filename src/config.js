import path from 'path';
import fs from 'fs/promises';
import os from 'os';

export let config;

const supportedProviders = [
    'ollama',
    'openai'
];

export async function loadConfig() {
    const configPath = path.resolve(os.homedir(), 'shellmate.json');
    config = JSON.parse(
        await fs.readFile(configPath)
    );

    if (!supportedProviders.includes(config.provider)) {
        throw new Error(`Invalid provider: ${config.provider}`);
    }
}
