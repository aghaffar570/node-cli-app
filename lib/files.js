const fs = require('fs');

module.exports = {
  createAndSaveNewFile : (fileName, inputData) => {
    try {
      fs.writeFileSync(fileName, inputData)
    } catch (error) {
      throw err;
    }
  },

  doesFileExist : (fileName) => {
    try {
      fs.accessSync(fileName, fs.constants.F_OK);
      console.log('File already exist.')
      return true;
    } catch (error) {
      return false;
    }
  }
};
