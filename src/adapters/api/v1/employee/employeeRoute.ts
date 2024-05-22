import { Router } from "express";
import { EmployeeRepository } from "@database/v1/employee/employeeRepository";
import { EmployeeService } from "@services/v1/employeeService";
import { EmployeeController } from "@api/v1/employee/employeeController";

export const employeeRoute = Router();

const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);
const employeeController = new EmployeeController(employeeService);

employeeRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Get all employees'
	employeeController.getAll(req, res);
});

employeeRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Create a new employee'
	/* #swagger.requestBody = {
            required: true,
            description: 'Create Employee',
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Employee' }
                }
            }
        }
    */
	employeeController.createEmployee(req, res);
});

employeeRoute.get("/search/:cpf", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Search employee by CPF'
	employeeController.findEmployee(req, res);
});

employeeRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Update employee by ID'
	/* #swagger.requestBody = {
			required: true,
			description: 'Update Employee',
			content: {
				"application/json": {
					schema: { $ref: '#/definitions/Employee' }
				}
			}
		}
	*/
	employeeController.updateEmployee(req, res);
});

employeeRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Delete employee by ID'
	employeeController.deleteEmployee(req, res);
});
