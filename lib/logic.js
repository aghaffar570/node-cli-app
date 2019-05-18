module.exports = {
  sanitizeInput (inputSelector) {
    return inputSelector.replace(/\W/gi, '');
  },

  getViewDataFromFile (obj, inputSelector) {
    let resultView = [];
    for(let key in obj) {
      if(typeof obj[key] === 'object') {
        const innerValue = this.getViewDataFromFile(obj[key], inputSelector);
        resultView = resultView.concat(innerValue);
      }
      else if (obj[key] === inputSelector) {
        resultView.push(obj);
      }
    }
    return resultView;
  }
}
