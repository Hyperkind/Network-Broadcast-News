// Require net module
var net = require ('net');

// Sets the port #
var PORT = 1337;
var HOST = '0.0.0.0';

// Create server
var server = net.createServer(connectionListener);

// Connection listener
function connectionListener (socket) {
  // Visualize client connecting to server
  console.log('Client connected!');

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
  console.log('opened server on %j', address);
  // console.log('Server listening on ' + PORT + HOST);
});