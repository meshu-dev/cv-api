const { index, getData } = require("./actions.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', index);
  fastify.get('/data', getData);

  done();
};

module.exports = { routes };
