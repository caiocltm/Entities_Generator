#!/usr/bin/env node
import CLI from './src/cli/cli.js';

const cli = new CLI();

cli.setUI().enableGenerateEntityCommand().enableGenerateEntityConfigCommand().build();
