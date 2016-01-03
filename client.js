var net = require('net');

// Sets the port #
var PORT = 1337;

// Create socket
var socket = new net.Socket();

socket.on('connect', function () {
  console.log('Connected to: ' + socket.remoteAddress + ':' + socket.remotePort);
  socket.write('Hello!');
});

socket.on('data', function (data) {
  console.log(data);
});

socket.setEncoding('utf8');

// socket.write('data', function (data) {
//   console.log(data);
// });

process.stdin.on('data', function (data) {
  socket.write(data);
});

// process.stdout.on('data', function (data) {
//   socket.write(data);
// });

// Connect to server
socket.connect(PORT);

