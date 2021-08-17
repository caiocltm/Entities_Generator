export default class GenerateEntityCommand {
	#CLI;

	constructor(CLI) {
		this.#CLI = CLI;
	}

	execute() {
		this.#CLI
			.command('generate_entity')
			.name('generate_entity')
			.description('Generate a new entity based on provided configuration file')
			.action(() => {
				console.log('AAAAAAAAAAAAAAAAA generate_entity');
			});

		this.#parse();
	}

	#parse() {
		this.#CLI.parse(process.argv);
	}
}
