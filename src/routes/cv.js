const { getCV, setCV } = require("../controllers/cvController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', getCV);
  fastify.put('/', setCV);
  
  done();
};

module.exports = routes;
