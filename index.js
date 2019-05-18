// utils
const { files, logic, parse, prompt, welcome } = require('./lib');
const chalk = require('chalk');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



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

  console.log(`Type "${chalk.redBright('exit')}" anytime to exit terminal`);

  while(true) { // prompt for selector

    const { selector } = await prompt.askQuestion();
    if(selector.toLowerCase().trim() === 'exit') break; // stop query
    const resultData = logic.getViewDataFromFile(parseData, selector);

    console.log(
      resultData,
      chalk.greenBright(`\n\n Total of ${ chalk.underline.magentaBright(resultData.length) } views \n\n`)
    );
  }


})()
