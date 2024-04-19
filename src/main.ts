import http from "http";
import express from "./config/express";
import connection from "./config/connectionFactory";

const server = new http.Server(express());

connection.database.sync().then(() => {
	server.listen(process.env.PORT, () => {
		console.log(`Server running on ${process.env.PORT}`);
	});
});
