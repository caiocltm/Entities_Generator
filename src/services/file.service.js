import { statSync, existsSync } from 'fs';
import { extname } from 'path';

export default class File {
	static IsValidPath(path) {
		const validPath = existsSync(path);

		if (!validPath) return false;

		return true;
	}

	static IsFile(path) {
		const fileStat = statSync(path);

		if (!fileStat.isFile()) return false;

		return true;
	}

	static IsValidFile(path, extension = '.csv') {
		const fileExtension = extname(path);

		if (fileExtension !== extension) return false;

		return true;
	}

	static IsNotEmpty(path) {
		const file = statSync(path);

		if (file.size <= 0) return false;

		return true;
	}
}
