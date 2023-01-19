const { S3Client } = require("@aws-sdk/client-s3");

const awsAccessKey = process.env.AWS_ACCESS_KEY;
const awsAccessSecretKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsRegion = process.env.AWS_REGION;

const s3Client = new S3Client({
  region: awsRegion,
  credentials: {
    accessKeyId: awsAccessKey,
    secretAccessKey: awsAccessSecretKey
  }
});

module.exports = s3Client;
