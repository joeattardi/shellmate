import { program } from './cli.js';
import { generateCommand } from './ai/index.js';

export async function start() {
    const [description] = program.args;

    const command = await generateCommand(description);
    console.log(command);
}