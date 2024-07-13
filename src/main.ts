import http from "http";
import express from "@config/express";
import connection from "@config/connectionFactory";

const server = new http.Server(express());
const port = Number(process.env.PORT);

connection.database.sync().then(() => {
	server.listen(port, "0.0.0.0", () => {
		console.log(`Server running on ${port}`);
	});
});
