import ora from 'ora';
import { generateCommandOllama } from './ollama.js';

export async function generateCommand(description) {
    const spinner = ora('Thinking...').start();
    const response = await generateCommandOllama(description);
    spinner.stop();
    
    return response.message.content;
}