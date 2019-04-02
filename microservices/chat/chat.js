module.exports = function(app) {
    let connectionCount = 0;
    const http = require('http').Server(app);
    const io = require('socket.io')(http);
    io.on('connection', socket => {
        connectionCount ++;
        console.log(`a user connected. total: ${connectionCount}`);
        socket.on('disconnect', function(){
            connectionCount --;
            console.log(`socket disconnected, total: ${connectionCount}`);
        });
        
        socket.on('message', newMessage => {
            console.log(newMessage)
            io.emit('message', newMessage)
        })
      });
}
