// utils
const { files, parse, welcome } = require('./lib');

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



  console.log('parsed data >> \n\n\n', parseData)
})()
