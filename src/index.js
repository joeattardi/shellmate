import ora from 'ora';
import chalk from "chalk";
import { generateCommand } from "./ai/index.js";
import { program } from "./cli.js";
import { loadConfig } from "./config.js";

export async function start() {
  const [description] = program.args;

  try {
    await loadConfig();
  } catch (error) {
    console.error('⚠️  ' + chalk.redBright(error.message));
    process.exit(1);
  }

  console.log("✨ Generating a command for you.\n");
  const spinner = ora('Thinking...');

  try {
    spinner.start();
    const command = await generateCommand(description);
    spinner.stop();
    console.log("\nHere's your command:\n");
    console.log(chalk.bold(command));
  } catch (error) {
    spinner.stop();
    console.error('⚠️  ' + chalk.redBright(error.message));
  }
}
