'use strict';

const h2 = require('http2');

const server = h2.createServer();

server.on('stream', (stream) => {
  stream.respondWithFile('./alice.html');
});

server.listen(8888);
