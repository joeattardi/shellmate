import OpenAI from 'openai';
import { commandMessages } from './messages.js';

export async function generateCommandOpenAI(description, config) {
    const client = new OpenAI({
        apiKey: config.apiKey
    });

    try {
        const response = await client.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: commandMessages.system
                },
                {
                    role: 'user',
                    content: commandMessages.user(description)
                }
            ],
            model: config.model
        });

        return response.choices[0].message.content;
    } catch (error) {
        throw new Error(`OpenAI: ${error.message}`);
    }
}
