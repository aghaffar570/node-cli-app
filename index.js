// utils
const { files, logic, parse, welcome } = require('./lib');
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

  const resultData = logic.getViewDataFromFile(parseData, 'StackView')
  // const resultData = logic.getViewDataFromFile(parseData, 'container')
  // const resultData = logic.getViewDataFromFile(parseData, 'videoMode')

  console.log(
    'search selector view >> \n\n\n',
    resultData,
    chalk.greenBright(`\n\n Total of ${ chalk.underline.magentaBright(resultData.length) } views \n\n`)
  )


})()
