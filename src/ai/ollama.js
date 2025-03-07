import ollama from 'ollama';
import { commandMessages } from './messages.js';

export async function generateCommandOllama(description, config) {
    try {
        const response = await ollama.chat({
            model: config.model,
            messages: [
                {
                    role: 'system',
                    content: commandMessages.system,
                },
                {
                    role: 'user',
                    content: commandMessages.user(description)
                }
            ]
        });

        return response.message.content;
    } catch (error) {
        if (error.cause?.code === 'ECONNREFUSED') {
            throw new Error('Couldn\'t connect to the Ollama server. Is it running?');
        }
        
        throw new Error(`Ollama: ${error.message}`);
    }
}
