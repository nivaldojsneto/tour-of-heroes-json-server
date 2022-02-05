const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(cors());

server.use(router);

server.listen(3001, () => console.log('JSON Server is running'));
