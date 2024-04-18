import http from "http";
import express from "./config/express";

const server = new http.Server(express());

server.listen(process.env.PORT, () => {
	console.log(`Server running on ${process.env.PORT}`);
});
