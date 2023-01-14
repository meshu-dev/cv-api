const fs = require('fs');

const index = async (request, reply) => {
  return { message: 'API is running' };
};

const getData = async (request, reply) => {
  try {
    let data = fs.readFileSync(`${__dirname}/../data/cv.json`, 'utf8');
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { index, getData };