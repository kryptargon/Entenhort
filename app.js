const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

server.listen(2000);
console.log('Server started');

const SOCKET_LIST = {};

const io = require('socket.io') (server, {'pingTimeout': 10000, 'pingInterval': 3000});
io.sockets.on('connection', socket => {
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;
    console.log('socket connection: ' + socket.id);

    socket.on('pack_users', () => {
        const pack = [];
        for (const i in SOCKET_LIST) {
            pack.push({id: i});
        }
        socket.emit('user_list', pack);
    });

    console.log(`${socket.request.connection.remoteAddress} ${socket.request.connection.remotePort}`);

    socket.on('disconnect', () => {
        console.log('socket disconnection: ' + socket.id);
        delete SOCKET_LIST[socket.id];
    });
});
