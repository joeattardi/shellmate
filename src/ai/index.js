import ora from 'ora';
import { generateCommandOllama } from './ollama.js';
import { config } from '../config.js';

export async function generateCommand(description) {
    const spinner = ora('Thinking...').start();
    const { model = 'ollama' } = config;
    let response;

    if (model === 'ollama') {
        response = await generateCommandOllama(description, config.ollama);
    } else {
        console.log('OpenAI not yet supported');
    }

    spinner.stop();
    
    return response.message.content;
}