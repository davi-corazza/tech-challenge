import { Router } from "express";
import EmployeeService from "../../../core/services/v1/employeeService";

export const employeeRoute = Router();

const employeeService = new EmployeeService();

employeeRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Get all employees'
	employeeService.getAll(req, res);
});

employeeRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Create a new employee'
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
	employeeService.createEmployee(req, res);
});

employeeRoute.get("/search/:cpf", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Search employee by CPF'
	employeeService.findEmployee(req, res);
});

employeeRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.description = 'Delete employee by ID'
	employeeService.deleteEmployee(req, res);
});

export default { routes: employeeRoute };
