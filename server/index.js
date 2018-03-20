var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
  socket.on('add board', function(...pops){
    io.emit('add board', ...pops);
  });
  socket.on('remove board', function( ...pops ){
    io.emit('remove board', ...pops);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});