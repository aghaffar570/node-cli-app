const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

// welcome screen
module.exports = () => {
  clear();
  console.log(
    chalk.yellow(figlet.textSync('Welcome', { horizontalLayout: 'full' })),
    chalk.blue('solution by Abdul Ghaffar')
  );
}
