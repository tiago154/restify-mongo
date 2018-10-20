const restify = require('restify');
const restifyPlugins = require('restify').plugins;
const config = require('./config');
const mongodb = require('./repositories/mongodb/mongoose-connect');
const validator = require('restify-joi-middleware');
const registerRoutes = require('./helper/register-routes');
const path = require('path');

// Create Server
const server = restify.createServer();

// Middleware
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(validator());

// Routes
registerRoutes(server, path.join(__dirname, './routes'));

// Mongodb
mongodb.createConnection();

server.listen(config.api.port,
    () => console.log(`Running server port ${config.api.port}`)
);