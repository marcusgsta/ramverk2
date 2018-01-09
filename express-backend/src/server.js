const app = require('./index');
const { chatServer } = require('./chat/chat-server.js');
// get env variable DBWEBB_PORT
// var PORT;

// if (typeof process.env.DBWEBB_PORT !== 'undefined') {
//     process.env.PORT = process.env.DBWEBB_PORT;
// } else {
//     process.env.PORT = 1337;
// }
// PORT = process.env.PORT;

var PORT;

PORT = process.env.PORT || process.env.DBWEBB_PORT || 1337;

// console.log(PORT);

// Start up Express server
console.log("Express is listening on port " + PORT);
var server;

server = app.listen(PORT);

chatServer(server);
