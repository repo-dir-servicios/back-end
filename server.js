var jsonServer  = require('json-server');

var server      = jsonServer.create();
var router      = jsonServer.router(require('./db.js')())


const middlewares = jsonServer.defaults({ noCors: true })



server.use(middlewares);


server.use(router);

server.listen(4000, function () {
  console.log('JSON Server is running: port 4000');
});