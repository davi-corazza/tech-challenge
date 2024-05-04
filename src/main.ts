import http from "http";
import express from "./config/express";
import connection from "./config/connectionFactory";

const server = new http.Server(express());

connection.database.sync().then(() => {
	server.listen(process.env.PORT,'0.0.0.0', () => {
		console.log(`Server running on ${process.env.PORT}`);
	});
});
