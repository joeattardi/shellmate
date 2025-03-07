import ollama from 'ollama';
import { commandMessages } from './messages.js';

export async function generateCommandOllama(description, config) {
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
}
