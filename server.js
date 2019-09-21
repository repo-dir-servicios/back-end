var jsonServer  = require('json-server');

var router      = jsonServer.router(require('./db.js')())
var server      = jsonServer.create();

server.use(router);

server.listen(4000, function () {
  console.log('JSON Server is running');
});