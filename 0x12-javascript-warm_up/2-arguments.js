#!/usr/bin/node
const argsCount = process.argv.length;

if (argsCount > 2) {
  console.log('Argument' + (argsCount > 3 ? 's' : '') + 'found');
} else {
  console.log('No argument');
}
