import { Router } from "express";
import { CustomerRepository } from "@database/v1/customer/customerRepository";
import { CustomerService } from "@services/v1/customerService";
import { CustomerController } from "@api/v1/customer/customerController";

export const customerRoute = Router();

const customerRepository = new CustomerRepository();
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

customerRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Customer']
	// #swagger.description = 'Get all customers'
	customerController.getAll(req, res);
});

customerRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Customer']
	// #swagger.description = 'Create a new customer'
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/customer' }
                }
            }
        }
    */
	customerController.createCustomer(req, res);
});

customerRoute.get("/search/:cpf", (req, res) => {
	// #swagger.tags = ['Customer']
	// #swagger.description = 'Search customer by CPF'
	customerController.searchCustomer(req, res);
});

customerRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Customer']
	// #swagger.description = 'Update customer by ID'
	/* #swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: { $ref: '#/definitions/customer' }
				}
			}
		}
	*/
	customerController.updateCustomer(req, res);
});

customerRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Customer']
	// #swagger.description = 'Delete customer by ID'
	customerController.deleteCustomer(req, res);
});
