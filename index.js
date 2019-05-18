// utils
const { welcome, parse } = require('./lib');

(async () => {

  // markup
  welcome()

  // fetch dataView
  const data = await parse.fetchAndParsedData()
  console.log('parsed data >> \n\n\n', data)
})()
