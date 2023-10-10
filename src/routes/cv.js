const { getCvRequest, setCV } = require("../controllers/cvController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', getCvRequest);
  //fastify.put('/', setCV);
  
  done();
};

module.exports = routes;
