var jsonServer  = require('json-server');

var server      = jsonServer.create();
server.use(router);
server.listen(5000, function () {
  console.log('JSON Server is running');
});