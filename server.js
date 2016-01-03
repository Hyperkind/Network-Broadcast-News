// Require net module
var net = require ('net');

// Sets the port #
var PORT = 1337;
var HOST = '0.0.0.0';

var connectedClients = [];

// Create server
var server = net.createServer(connectionListener);

// Connection listener
function connectionListener (socket) {

  // Announces when client connects & pushes socket to connectedClients
  console.log('Connected: ' + socket.remoteAddress + ':' + socket.remotePort);
  connectedClients.push(socket);
  // console.log(connectedClients.length);

  // Announces when client disconnects & splices socket from connectedClients
  socket.on('end', function (data) {
    console.log('Closed: ' + socket.remoteAddress + ':' + socket.remotePort);
    // Sets var target to the indexOf the socket that disconnects
    var target = connectedClients.indexOf(socket);
    // Splices the socket from the connectedClients array
    connectedClients.splice(target, 1);
    // console.log(connectedClients.length);
  });

  // Set encoding to utf8, because string!
  socket.setEncoding('utf8');

  // When there's data, print that to the screen!
  socket.on('data', function (data) {
    console.log(socket.remoteAddress + ':' + socket.remotePort + ': ' + data);

    // Loops over the connectedClients array
    for (var i = 0; i < connectedClients.length; i++) {
      var curClient = connectedClients[i];
      // Broadcasts message to all connectedClients except to socket that sent the message
      if (curClient !== socket) {
        curClient.write(socket.remoteAddress + ':' + socket.remotePort + ': ' + data);
      }
    }
  });
}

// Opens up server for connections
server.listen(PORT, HOST, function () {
  address = server.address();
  console.log('Server listening on: %j', server.address());
  // console.log('Server listening on: ' + address);
});
