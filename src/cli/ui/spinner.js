const Ora = require('ora');

export class Spinner {
	#spinner;

	constructor() {
		this.#spinner = Ora({ spinner: 'arrow3', color: 'blue', interval: 30, prefixText: '\n' });
	}

	start() {
		this.#spinner.start();
	}

	succeed(text) {
		this.#spinner.succeed(text);
	}

	setText(text) {
		this.#spinner.text = text;
	}
}
