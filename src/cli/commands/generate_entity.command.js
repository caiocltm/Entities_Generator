const { command } = require('commander');
const { Prompt } = require('../ui/index.js');

export const GenerateEntityCommand = () =>
	command('generate_entity')
		.name('generate_entity')
		.description('Generate JSON file(s) given choosen entity')
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

parse(process.argv);