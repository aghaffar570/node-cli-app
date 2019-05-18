// utils
const { files, logic, parse, prompt, welcome } = require('./lib');
const chalk = require('chalk');

module.exports = async () => {

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

    let { selector } = await prompt.makeQuery();
    if(selector.toLowerCase().trim() === 'exit') {
      console.log(chalk.blue('Goodbye'));
      break;
    }

    const selectorArr = logic.sanitizeInput(selector);
    for(let selector of selectorArr) {
      if(selector.length) {
        const resultData = logic.getViewDataFromFile(parseData, selector);
        prompt.printQueryResponse(resultData, selector);
      }
    }
  }


}
