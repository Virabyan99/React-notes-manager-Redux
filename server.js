const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./react-notes-manager-002-router-setup/db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3200;
server.listen(port, () => {
  console.log('JSON Server is running on port:', port);
});
