const http = require('http');

http.createServer((req, res) =>{

	res.writeHead(200. {'Content-Type':'application/json'});

	let salida = {
		nombre: 'Javier',
		edad: 21
		url: req.url
	}

	res.end();




})
.listen(8080);

console.log("Escuchando por el puerto 8080");