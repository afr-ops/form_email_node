const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

const { stringify } = require('querystring');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

require('./sockets')(io);

app.use(express.urlencoded({extend: true}));
app.use(express.json());


app.use(require('./routes/index'))

server.listen(app.get('port'), () => {

    console.log(`server on port ${app.get('port')}`);
});

