import { Router } from "express";
import EmployeeService from "../../../core/services/v1/employeeService";

export const employeeRoute = Router();

const employeeService = new EmployeeService();

employeeRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Employee']
	/* #swagger.responses[200] = {
            description: 'Return all employees',
            schema: { $ref: '#/definitions/Employee' }
    } */
	employeeService.getAll(req, res);
});

employeeRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Employee']
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

employeeRoute.get("/find/:cpf", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.parameters['cpf'] = { description: 'Return employee by cpf' }
	employeeService.findEmployee(req, res);
});

employeeRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Employee']
	// #swagger.parameters['id'] = { description: 'Delete employee by id' }
	employeeService.deleteEmployee(req, res);
});

export default { routes: employeeRoute };
