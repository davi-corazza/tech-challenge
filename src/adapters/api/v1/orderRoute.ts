import { Router } from "express";
import OrderService from "../../../core/services/v1/orderService";

export const orderRoute = Router();

const orderService = new OrderService();

orderRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Order']
	return orderService.getAll();
});

// orderRoute.post("/create", userController.create());
// orderRoute.put("/update/:id", userController.update());
// orderRoute.delete("/delete/:id", userController.delete());
// orderRoute.get("/index/:id", userController.index());
// orderRoute.post("/verifica", userController.verificaCampo());

export default { routes: orderRoute };
