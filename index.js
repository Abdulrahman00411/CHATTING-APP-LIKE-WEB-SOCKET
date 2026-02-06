const express = require('express');
const app = express();

// Create the HTTP server
const http = require('http');
const server = http.createServer(app);

// Attach Socket.IO to the server
const { Server } = require("socket.io");
const io = new Server(server);

// Serve index.html for the chat page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// When a socket connects
io.on('connection', (socket) => {
  console.log('a user connected');

  // Listen for "chat message" from clients
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg); // Send to all clients
  });

  // When a user disconnects
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('listening on PORT:3000');
});
