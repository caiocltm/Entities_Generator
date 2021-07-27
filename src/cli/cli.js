#!/usr/bin/env node
import App from '../package.json';
import { name, version, description, usage } from 'commander';
import { bgBlue, blueBright } from 'chalk';
import { UIBanner } from './ui/index.js';
import { GenerateEntityCommand, GenerateEntityConfigCommand } from './commands/index.js';

export default class CLI {
	#generateEntityCommand;
	#generateEntityConfigCommand;

	constructor() {
		name(bgBlue('eg'));
		version(bgBlue(App.version));
		description(blueBright(UIBanner));
		usage(bgBlue('<command>'));

		// CLI Commands initialization
		this.#generateEntityCommand = new GenerateEntityCommand();
		this.#generateEntityConfigCommand = new GenerateEntityConfigCommand();
	}

	execute() {
		this.#generateEntityCommand.execute();
		this.#generateEntityConfigCommand.execute();
	}
}
