const inquirer   = require('inquirer');
const chalk = require('chalk');

module.exports = {
  askQuestion: () => {
    const question = [
      {
        name: 'selector',
        type: 'input',
        message: chalk.greenBright('Enter a selector:'),
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
}
