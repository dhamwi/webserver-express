const http = require('http');

// Creamos el servidor que recibe un callback
http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Dani',
            edad: 52,
            url: request.url
        }
        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');