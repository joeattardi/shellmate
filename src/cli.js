import { Command } from "commander";
const program = new Command();

program
    .name("shellmate")
    .version('1.0.0')
    .description("Your smart AI companion for the command line")
    .argument("<description>", "Description of the command you want to run");

program.parse(process.argv);
export { program };
