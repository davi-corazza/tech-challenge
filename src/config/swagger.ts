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
			description: "Ingredient Description",
		},
		Order: {
			fk_idCostumer: 1,
			status: "Initial Status",
			price: "19.90",
		},
		Product: {
			name: "Product Name",
			price: "8.90",
			description: "Product Name",
			category: {
				$ref: "#/definitions/Category",
			},
			ingredients: [
				{
					$ref: "#/definitions/Ingredient",
				},
			],
		},
		AddProduct: {
			name: "Product Name",
			price: "8.90",
			description: "Product Description",
			fk_idCategory: 1,
		},
		AddOrder: {
			fk_idCostumer: 1,
			status: "Initial Status",
			price: "19.90",
		},
		AddComboProduct: {
			fk_idCombo: 1,
			fk_idProduct: 1,
		},
		AddOrderProduct: {
			fk_idOrder: 1,
			fk_idProduct: 1,
			observation: "Some Observations",
		},
		AddProductIngredient: {
			fk_idProduct: 1,
			fk_idIngredient: 1,
		},
		Campaign: {
			name: "Campaign Name",
			rule: "Campaign Rule",
			discount: "10",
			endDate: "2021-10-20",
		},
		AddCampaignCostumer: {
			fk_idCampaign: 1,
			fk_idCostumer: 1,
		},
		Employee: {
			cpf: "555.555.555-55",
			name: "Name of employee",
			username: "employee@employee",
			password: "E$%0of323!@#",
		},
	},
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/config/routes.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
