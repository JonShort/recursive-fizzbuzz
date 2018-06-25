const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Random or Classic Array?\r\n'
});

rl.prompt();

rl.on('line', line => {
  switch (line.trim().toLowerCase()[0]) {
    case undefined:
      console.log('\r\nChoose random or classic 😀');
      break;

    case 'r':
      console.log('\r\nRandom it is! 🤩\r\n');
      break;

    case 'c':
      console.log('\r\nClassic coming right up 🤓');
      break;

    default:
      console.log(`Sorry, don't quite understand '${line.trim()}' 🤔 \r\n`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
