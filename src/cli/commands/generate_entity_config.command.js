const { command } = require('commander');
const { Prompt } = require('../ui/index.js');

export default class GenerateEntityConfigCommand {
	constructor() {
		parse(process.argv);
	}

	execute() {
		command('generate_entity_config')
			.name('generate_entity_config')
			.description('Generate entity configuration file')
			.action(async () => {
				const initialCharge = new InitialCharge();
				const prompt = new Prompt();

				const { domain } = await prompt.getDomain(initialCharge.availableDomains());

				const { path } = await prompt.getPath();

				const { entity } = await prompt.getEntity();

				const { offset } = await prompt.getOffset();

				const { separator } = await prompt.getSeparator();

				await initialCharge.execute({ path, entity, offset, separator, domain });

				process.exit(0);
			});
	}
}
