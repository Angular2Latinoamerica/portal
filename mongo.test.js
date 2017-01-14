const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/MiEmpresa", (err, db) => {
	if (err) {
		console.log("No se puede conectar a la base de datos");
		return;
	}

	console.log("Conectado.");

	const usuarios = db.collection("usuarios");

	usuarios.find({}).toArray((err, results) => {
		if (err) {
			console.log("Error en la colección usuarios");
			return;
		}

		console.log(results);

		db.close();
	});
});