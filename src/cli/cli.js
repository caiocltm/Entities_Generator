// CLI Commander
import { Command } from 'commander';
// CLI UI
import chalk from 'chalk';
const { bgBlackBright, greenBright } = chalk;
import Banner from './ui/banner.js';
// CLI Commands
import GenerateEntityCommand from './commands/generate_entity.command.js';
import GenerateEntityConfigCommand from './commands/generate_entity_config.command.js';

export default class CLI {
	#CLI;
	#generateEntityCommand;
	#generateEntityConfigCommand;

	constructor() {
		this.#CLI = new Command();
		this.#generateEntityCommand = null;
		this.#generateEntityConfigCommand = null;
	}

	setUI() {
		this.#CLI.name(bgBlackBright('entgen'));
		this.#CLI.version('0.0.1');
		this.#CLI.description(greenBright(Banner));
		this.#CLI.usage(bgBlackBright('<command>'));

		return this;
	}

	enableGenerateEntityCommand() {
		this.#generateEntityCommand = new GenerateEntityCommand(this.#CLI);

		return this;
	}

	enableGenerateEntityConfigCommand() {
		this.#generateEntityConfigCommand = new GenerateEntityConfigCommand(this.#CLI);

		return this;
	}

	build() {
		this.#generateEntityConfigCommand && this.#generateEntityConfigCommand.execute();
		this.#generateEntityCommand && this.#generateEntityCommand.execute();
	}
}
