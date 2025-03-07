import { config } from '../config.js';
import { generateCommandOllama } from './ollama.js';
import { generateCommandOpenAI } from './openai.js';

export async function generateCommand(description) {
    const { provider = 'ollama' } = config;
    let response;

    if (provider === 'ollama') {
        response = await generateCommandOllama(description, config.ollama);
    } else if (provider === 'openai') {
        response = await generateCommandOpenAI(description, config.openai);
    }
    
    return response;
}