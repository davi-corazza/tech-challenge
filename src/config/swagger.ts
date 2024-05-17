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
			name: "Category Name",
		},
		Costumer: {
			cpf: "555.555.555-55",
			name: "Name of costumer",
			phoneNumer: "(99) 99999-9999",
			email: "email@example.com",
		},
		Combo: {
			name: "Combo Name",
			discount: "10",
		},
		Ingredient: {
			name: "Ingredient Name",
			price: "3.90",
			description: "Ingredient Description",
		},
		Order: {
			name: "Order Name",
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
			name: "Product Name",
			price: "2.90",
			description: "Product Description",
			fk_idCategory: 1,
		},
		AddComboProduct: {
			fk_idCombo: 1,
			fk_idProduct: 1,
		},
	},
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/config/routes.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
