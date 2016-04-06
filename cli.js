#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const logSymbols = require('log-symbols');
const chalk = require('chalk');
const awsSwaggerImport = require('aws-swagger-import');

const cli = meow(`
	Usage
	  $ aws-swagger [action] [file]

	Options
	  --name          The name of the API Gateway
	  --aws-profile   The local AWS profile
	  --aws-region    The AWS region [Default: us-west-1]
		--aws-filename  The credentials filename [Default: ~/.aws/credentials]

	Examples
	  $ aws-swagger import swagger.json --name=gateway-name --aws-profile=local-aws-profile
`);

if (cli.input.length !== 2) {
	console.error(`  ${logSymbols.error}  invalid number of arguments provided`);
	process.exit(1);
}

if (['import'].indexOf(cli.input[0]) === -1) {
	console.error(`  ${logSymbols.error}  invalid action '${cli.input[0]}'`);
	process.exit(1);
}

const filePath = path.resolve(process.cwd(), cli.input[1]);

awsSwaggerImport(filePath, cli.flags)
	.then(result => {
		console.log(`  ${logSymbols.success}  ${chalk.cyan(result.name)} imported successfully ${chalk.gray('(' + result.id + ')')}`);
	})
	.catch(err => {
		console.error(`  ${logSymbols.error}  ${err.message}`);

		if (!err.friendly) {
			console.error(err.stack);
		}
	});
