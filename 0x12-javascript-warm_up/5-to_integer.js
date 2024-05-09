#!/usr/bin/node
const res = parseInt(process.argv[2]);
console.log('My number: ' + (isNaN(res) ? 'Not a number' : res));
