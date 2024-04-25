import pg from "pg";
import { Sequelize } from "sequelize-typescript";

const database = new Sequelize({
	database: process.env.POSTGRES_DB,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	port: parseInt(process.env.POSTGRES_PORT),
	dialect: "postgres",
	dialectModule: pg,
	models: [__dirname + "\\adapters\\database\\v1"],
});

export default {
	Sequelize: Sequelize,
	database: database,
};
