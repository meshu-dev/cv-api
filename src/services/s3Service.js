const { GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = require("../utils/s3Client.js");

const getObject = async (bucket, key) => {
  const params = {
    Bucket: bucket,
    Key: key
  };

  try {
    const response = await s3Client.send(
      new GetObjectCommand(params)
    );
    return response;
  } catch (err) {
    console.log("Error", err);
  }
};

const putObject = async (bucket, key, body) => {
  const params = {
    Bucket: bucket,
    Key: key,
    Body: body
  };

  try {
    const response = await s3Client.send(
      new PutObjectCommand(params)
    );
    return response;
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = { getObject, putObject };