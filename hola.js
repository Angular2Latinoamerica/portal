const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hola mundo");
});

app.get("/users/:name", (req, res) => {
	const username = req.params.name;
	
	try {
		const user_info = require(`./${username}.json`);

		console.log(user_info);
		
		res.send(user_info);
	} catch(err) {
		res.send(err);
	}
});

http.createServer(app).listen(3000, () => {
	console.log("Servidor creado en http://localhost:3000");
});