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


  rl.question('Enter (y/n) to begin query:', (start) => {
    rl.setPrompt('Enter a selector :')
    rl.prompt()
    rl.on('line', (selectorInput) => {

      const resultData = logic.getViewDataFromFile(parseData, selectorInput)
      console.log(
        resultData.length ? resultData : 'No such selector exist'
      )

      if(selectorInput.toLowerCase().trim() === 'n'
      || selectorInput.toLowerCase().trim() === 'no') {
        console.log('Goodbye')
        rl.close()
      }
      else {
        rl.setPrompt('Enter a selector :')
        rl.prompt()
      }
    })

  })









  // const resultData = logic.getViewDataFromFile(parseData, 'StackView')
  // const resultData = logic.getViewDataFromFile(parseData, 'container')
  // const resultData = logic.getViewDataFromFile(parseData, 'videoMode')

  // console.log(
  //   'search selector view >> \n\n\n',
  //   resultData,
  //   chalk.greenBright(`\n\n Total of ${ chalk.underline.magentaBright(resultData.length) } views \n\n`)
  // )


})()
