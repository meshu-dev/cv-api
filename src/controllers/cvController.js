const { getObject, putObject } = require("../services/s3Service.js");
const { sendResponse, getS3Bucket, getS3Key } = require("../utils/common.js");

const s3Bucket = getS3Bucket();
const s3Key = getS3Key();

const getCV = async (request, reply) => {
  let statusCode = 500;
  let response = { success: false };

  const result = await getObject(s3Bucket, s3Key);

  const bodyStream = result.Body;
  response = await bodyStream.transformToString();

  if (response) {
    statusCode = 200;
  }

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

module.exports = { getCV, setCV };