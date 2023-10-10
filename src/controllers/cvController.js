const { getCv } = require("../services/cvService.js");
const { sendResponse } = require("../utils/common.js");

const getCvRequest = async (request, reply) => {
  const row = await getCv();

  const statusCode = 200;
  const response = row;

  sendResponse(reply, statusCode, response);
};

const setCV = async (request, reply) => {
  const body = request.body;
  const data = JSON.stringify(body);

  let statusCode = 500;
  let response = { success: false };

  const result = await putObject(s3Bucket, s3Key, data);

  if (result['$metadata']) {
    const metaData = result['$metadata'];
    const requestId = metaData['requestId'];

    if (requestId) {
      statusCode = metaData['httpStatusCode'];
      response['success'] = true;
    }
  }

  sendResponse(reply, statusCode, response);
};

module.exports = { getCvRequest, setCV };