#!/usr/bin/env node
const App = require('../package.json');
const { name, version, description, usage } = require('commander');
const { bgBlue, blueBright } = require('chalk');
const { UIBanner } = require('./ui/index.js');
const { GenerateEntityCommand, GenerateEntityConfigCommand } = require('./commands/index.js');

name(bgBlue('nav'));
version(bgBlue(App.version));
description(blueBright(UIBanner));
usage(bgBlue('<command>'));

// CLI Commands initialization
GenerateEntityCommand();
GenerateEntityConfigCommand();
