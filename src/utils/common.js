const sendResponse = (reply, statusCode, response) => {
  reply.code(statusCode)
       .header('Content-Type', 'application/json; charset=utf-8')
       .send(response);
};

const getS3Bucket = () => {
  return process.env.AWS_S3_BUCKET;
};

const getS3Key = () => {
  return process.env.AWS_S3_KEY;
};

module.exports = {
  sendResponse,
  getS3Bucket,
  getS3Key
};
