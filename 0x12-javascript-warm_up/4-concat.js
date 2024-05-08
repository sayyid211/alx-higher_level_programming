#!/usr/bin/node
const arg1 = process.argv[2];
const arg2 = process.argv[3];
if (arg1) {
  console.log(arg1 + ' is ' + (arg2 || 'undefined'));
} else {
  console.log('undefined is ' + (arg2 || 'undefined'));
}
