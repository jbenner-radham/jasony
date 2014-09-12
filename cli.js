#! /usr/bin/env node

'use strict';

var log = console.log;

var jasony = require('./lib/jasony');

console.log(Object.getOwnPropertyNames(jasony));

var j = { "hello": "world", "and": { "stuff": "is-cool" } };

console.log(jasony.stringify(j));
console.log('-----');
console.log(jasony.beautify(j));

// console.log(jasony.awesome());

/*
var userArgs = process.argv;
var searchParam = userArgs[2];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
    return console.log('cli help');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('./package').version);
}
*/
