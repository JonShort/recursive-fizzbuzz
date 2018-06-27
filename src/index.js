const readline = require('readline');
const recursiveCheck = require('./fizzbuzz/recursiveCheck');
const classicArray = require('./fizzbuzz/classicArray');

const question = 'Random or Classic Array?\r\n';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: question
});

const continueQuestion = () => {
  new Promise(resolve => {
    rl.question('Continue? [Y/N]\r\n', answer => {
      if (answer.trim().toLowerCase() === 'n') {
        rl.close();
      }

      rl.prompt();
      resolve();
    });
  });
};

const arrayChoice = choice => {
  new Promise(async resolve => {
    switch (choice.trim().toLowerCase()[0]) {
      case undefined:
        console.log('\r\nPlease choose 😬');
        break;

      case 'r':
        console.log('\x1b[32m%s\x1b[0m', '\r\n🤩 Random 🤩\r\n');
        await continueQuestion();
        break;

      case 'c':
        console.log('\x1b[36m%s\x1b[0m', '\r\n🤓 Classic 🤓\r\n');
        recursiveCheck(classicArray())();
        await continueQuestion();
        break;

      default:
        console.log(`Sorry, don't quite understand '${choice.trim()}' 🤔 \r\n`);
        break;
    }

    resolve();
  });
};

rl.prompt();

rl.on('line', async line => {
  await arrayChoice(line);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
