import OpenAI from 'openai';

export async function generateCommandOpenAI(description, config) {
    const client = new OpenAI({
        apiKey: config.apiKey
    });

    const response = await client.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: `
                    You are an AI assistant that generates valid CLI commands from a
                    description of the user wants to do. When generating a CLI command,
                    respond with just the full CLI command with any parameters or arguments.
                    Do NOT surround the command with backticks. The output should be able to be
                    copied and pasted directly into a terminal. No other characters or markup should
                    be included in the response. Whenever possible, generate a single command.
                `
            },
            {
                role: 'user',
                content: `Please generate a CLI command that performs the following task: ${description}`
            }
        ],
        model: config.model
    });

    return response.choices[0].message.content;
}