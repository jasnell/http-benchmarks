'use strict';

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  fs.createReadStream('./alice.html').pipe(response)
});

server.listen(8889);
