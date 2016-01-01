var net = require('net');

// Sets the port #
var PORT = 1337;

// Create socket
var socket = new net.Socket();

socket.on('connect', function () {
  console.log('Connected to server on port ' + PORT);
  socket.write('Hello!');
});

// Connect to server
socket.connect(PORT);

