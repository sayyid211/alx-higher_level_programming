#!/usr/bin/node
const nums = process.argv.slice(2);
if (nums.length <= 1) {
  console.log('0');
} else {
  const ints = nums.map(x => parseInt(x));
  ints.sort((a, b) => b - a);
  console.log(ints[1]);
}
