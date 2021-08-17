export default class GenerateEntityConfigCommand {
	#CLI;

	constructor(CLI) {
		this.#CLI = CLI;
	}

	execute() {
		this.#CLI
			.command('generate_entity_config')
			.name('generate_entity_config')
			.description('Generate entity configuration file')
			.action(() => {
				console.log('AAAAAAAAAAAAAAAAA generate_entity_config');
			});

		this.#parse();
	}

	#parse() {
		this.#CLI.parse(process.argv);
	}
}
