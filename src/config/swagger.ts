import swaggerAutogen from "swagger-autogen";

const doc = {
	info: {
		version: "v1.0.0",
		title: "Swagger Tech Challenge",
		description: "Tech Challenge API",
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "",
		},
	],
	definitions: {
		Category: {
			name: "Lanche",
		},
		Product: {
			name: "Big MC",
			price: "8.90",
			description: "Big MC",
			category: {
				$ref: "#/definitions/Category",
			},
		},
		AddProduct: {
			name: "Big MC",
			price: "8.90",
			description: "Big MC",
			fk_idCategory: 1,
		},
	},
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/config/routes.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
