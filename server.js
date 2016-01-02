// Require net module
var net = require ('net');

// Sets the port #
var PORT = 1337;
var HOST = '0.0.0.0';

// Create server
var server = net.createServer(connectionListener);

// Connection listener
function connectionListener (socket) {

  // Announces when client connects
  socket.on('data', function (data) {
    console.log('Connected: ' + socket.remoteAddress + ':' + socket.remotePort);
  });

  // Announces when client disconnects
  socket.on('end', function (data) {
    console.log('Closed: ' + socket.remoteAddress + ':' + socket.remotePort);
  });

  // Set encoding to utf8, because string!
  socket.setEncoding('utf8');

  // When there's data, print that to the screen!
  socket.on('data', function (data) {
    console.log(data);
  });
}

  // Opens up server for connections
  server.listen(PORT, HOST, function () {
    address = server.address();
    // console.log('opened server on %j', address);
    console.log('Server listening on: ' + address);
  });
