module.exports = {
  getViewDataFromFile (obj, label) {
    let resultView = [];
    for(let key in obj) {
      if(typeof obj[key] === 'object') {
        const innerValue = this.getViewDataFromFile(obj[key], label);
        resultView = resultView.concat(innerValue);
      }
      else if (obj[key] === label) {
        resultView.push(obj);
      }
    }
    return resultView;
  }
}
