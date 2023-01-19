require("dotenv").config();

const fastify = require("fastify");

const indexRoutes = require("./routes/index.js");
const cvRoutes = require("./routes/cv.js");

const build = (opts = {}) => {
  const app = fastify(opts);
  
  app.register(indexRoutes);
  app.register(cvRoutes, { prefix: '/cv' });

  return app;
};

module.exports = { build };
