const inquirer   = require('inquirer');
const chalk = require('chalk');

module.exports = {
  makeQuery: () => {
    const question = [
      {
        name: 'selector',
        type: 'input',
        message: chalk.green('Enter a selector:'),
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a selector.';
          }
        }
      }
    ];
    return inquirer.prompt(question);
  },

  printQueryResponse: (resultData) => {
    if(!resultData.length) {
      console.log(chalk.yellowBright(`==== Sorry. Please try another Selector or type ${chalk.underline.red('exit')} to leave terminal ====`));
    }
    else {
      console.log(resultData);
      console.log(chalk.greenBright(`\n Total of ${ chalk.underline.magentaBright(`${resultData.length}`) } views \n`));
    }
  }
}
