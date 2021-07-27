import prompt from 'inquirer';
import { File } from '../../services/file.service.js';

export default class Prompt {
	getDomain(availableDomains) {
		return prompt([
			{
				type: 'list',
				name: 'domain',
				choices: availableDomains,
				message: 'Available domains',
				validate: (cron) => {
					if (!cron) process.exit(0);

					return true;
				}
			}
		]);
	}

	async getPath() {
		return prompt([
			{
				type: 'input',
				name: 'path',
				default: 'file.csv',
				message: 'Path to .csv file',
				validate: (path) => {
					if (!File.IsValidPath(path)) return 'Path must be valid';
					if (!File.IsFile(path)) return 'Path must be a valid file';
					if (!File.IsValidFile(path)) return 'File must be a valid .csv';
					if (!File.IsNotEmpty(path)) return 'File is empty';

					return true;
				}
			}
		]);
	}

	getEntity() {
		return prompt([
			{
				type: 'input',
				name: 'entity',
				default: '',
				message: 'Entity name'
			}
		]);
	}

	getOffset() {
		return prompt([
			{
				type: 'input',
				name: 'offset',
				default: '1000',
				message: 'Offset value of readable lines'
			}
		]);
	}

	getSeparator() {
		return prompt([
			{
				type: 'input',
				name: 'separator',
				default: ';',
				message: 'CSV file columns separator string'
			}
		]);
	}

	getCron(availableCrons) {
		return prompt([
			{
				type: 'list',
				name: 'cronName',
				choices: availableCrons,
				message: 'Run cron',
				validate: (cron) => {
					if (!cron) process.exit(0);

					return true;
				}
			}
		]);
	}
}
