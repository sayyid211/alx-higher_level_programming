#!/usr/bin/node
if (isNaN(parseInt(process.argv[2])) || !parseInt(process.argv[2])) {
  console.log('Missing size');
} else {
  const x = parseInt(process.argv[2]);
  for (let i = 0; i < x; i++) {
    let b = '';
    for (let j = 0; j < x; j++) {
      b = b + 'x';
    }
    console.log(b);
  }
}
