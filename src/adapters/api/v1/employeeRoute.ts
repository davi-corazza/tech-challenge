import { Router } from "express";
import EmployeeService from "../../../core/services/v1/employeeService";

export const employeeRoute = Router();

const employeeService = new EmployeeService();

employeeService.initModel();

employeeRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Employee']
	employeeService.getAll(req, res);
});

employeeRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Employee']
	employeeService.createEmployee(req, res);
});

// employeeRoute.put("/update/:id", userController.update());
// employeeRoute.delete("/delete/:id", userController.delete());
// employeeRoute.get("/index/:id", userController.index());
// employeeRoute.post("/verifica", userController.verificaCampo());

export default { routes: employeeRoute };
