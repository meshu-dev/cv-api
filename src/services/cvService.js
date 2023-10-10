const cv = require('../models/Cv');

const getCv = async () => {
  const result = await cv.findOne();

  console.log('R', result);

  return result ? result : null;
}

module.exports = {
  getCv
}
