import { Sequelize } from "sequelize-typescript";

const database = new Sequelize({
	database: process.env.DB_URL,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT),
	dialect: "postgres",
	models: [__dirname + "/models"],
});

export default {
	Sequelize: Sequelize,
	database: database,
};
