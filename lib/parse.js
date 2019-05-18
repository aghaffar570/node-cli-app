const rp = require('request-promise');
const cheerio = require('cheerio');

var options = {
  uri: 'https://github.com/jdolan/quetoo/blob/master/src/cgame/default/ui/settings/SystemViewController.json',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  transform: function(body) {
      return cheerio.load(body);
  },
  json: true
};

module.exports = {
  async fetchAndParseData () {
    try {
      const $ = await rp(options);
      const body = $('body').children()
      const data = body.find('table').find('td.blob-code').text()
      return data
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}
