function readInput() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (name) => {
    console.log(`Your name is: ${name.trim()}`);
  });
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
}

readInput();
