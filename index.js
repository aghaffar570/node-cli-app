// utils
const { files, logic, parse, prompt, welcome } = require('./lib');
const chalk = require('chalk');

(async () => {

  // markup
  welcome()

  // fetch dataView
  const data = await parse.fetchAndParseData();
  const parseData = JSON.parse(data);

  // store data into a file
  if(!files.doesFileExist('data.json')) {
    files.createAndSaveNewFile('data.json', data);
  }

  console.log(chalk.yellow(`Type ${chalk.underline.red('exit')} anytime to leave terminal`));

  while(true) { // prompt for selector

    let { selector } = await prompt.askQuestion();
    if(selector.toLowerCase().trim() === 'exit') {
      console.log(chalk.blue('Goodbye'));
      break;
    }

    selector = logic.sanitizeInput(selector)
    const resultData = logic.getViewDataFromFile(parseData, selector);
    if(!resultData.length) {
      console.log(chalk.yellowBright(`==== Sorry. Please try another Selector or type ${chalk.underline.red('exit')} to leave terminal ====`))
    }
    else {
      console.log(resultData, emoji.get('goodbye'));
      console.log(chalk.greenBright(`\n Total of ${ chalk.underline.magentaBright(`${resultData.length}`) } views \n`));
    }
  }


})()
