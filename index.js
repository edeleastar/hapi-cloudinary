'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: process.env.PORT || 3000
});

async function init() {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
