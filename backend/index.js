const http = require('http').createServer(); 
const socketIo = require('socket.io')(http, {
  cors: {origin: '*'}
}); 

socketIo.on('connection', (socket) => {
  socket.on('message', (message) => {
    socketIo.emit('message', message); 
  }); 
});  

http.listen(8080, () => console.log('listening on http://localhost:8080')) 