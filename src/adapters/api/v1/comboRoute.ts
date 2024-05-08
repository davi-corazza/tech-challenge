import { Router } from "express";
import ComboService from "../../../core/services/v1/comboService";

export const comboRoute = Router();

const comboService = new ComboService();

comboService.initModel();

comboRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Combo']
	comboService.getAll(req, res);
});

comboRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Combo']
	comboService.createCombo(req, res);
});

// comboRoute.put("/update/:id", userController.update());
// comboRoute.delete("/delete/:id", userController.delete());
// comboRoute.get("/index/:id", userController.index());
// comboRoute.post("/verifica", userController.verificaCampo());

export default { routes: comboRoute };
