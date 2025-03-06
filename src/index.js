import { program } from "./cli.js";
import { generateCommand } from "./ai/index.js";
import { loadConfig } from "./config.js";
import chalk from "chalk";

export async function start() {
  const [description] = program.args;

  try {
    await loadConfig();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log("Generating a command for you:\n");
  console.log(chalk.bold(description));
  const command = await generateCommand(description);
  console.log("\nHere's your command:\n");
  console.log(chalk.bold(command));
}
