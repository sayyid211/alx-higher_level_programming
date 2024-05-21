#!/usr/bin/node
function fact(x) {
    return isNaN(x) || x === 0 ? 1 : x * fact(x - 1);
}
console.log(fact(Number(process.argv[2])));
