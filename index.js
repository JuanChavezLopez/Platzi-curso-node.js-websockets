const express = require('express');

const app = express(); //inicializamos el express

const server = require('http').Server(app); //inicializar un servidor de nod tradicional

const io = require('socket.io')(server); //preparamos el soket.io y le pasamos el servidor que hemos inicializado


app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');
});


setInterval(function() {
    io.emit('mensaje', 'Hola, os escribo a todos');
}, 3000);

server.listen(8080, function() {
    console.log('Servidor iniciado en http://localhost:8080');
});


