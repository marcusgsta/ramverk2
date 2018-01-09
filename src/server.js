const app = require('./index');
const { chatServer } = require('./chat/chat-server.js');
// get env variable DBWEBB_PORT
// var PORT;

var PORT;

PORT = process.env.PORT || process.env.DBWEBB_PORT || 1337;

// console.log(PORT);

// Start up Express server
var server;

server = app.listen(PORT);

chatServer(server);
