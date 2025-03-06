import ora from 'ora';
import { generateCommandOllama } from './ollama.js';
import { config } from '../config.js';
import { generateCommandOpenAI } from './openai.js';

export async function generateCommand(description) {
    const spinner = ora('Thinking...').start();
    const { provider = 'ollama' } = config;
    let response;

    if (provider === 'ollama') {
        response = await generateCommandOllama(description, config.ollama);
    } else if (provider === 'openai') {
        response = await generateCommandOpenAI(description, config.openai);
    }

    spinner.stop();
    
    return response;
}