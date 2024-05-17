import { Router } from "express";
import ComboService from "../../../core/services/v1/comboService";

export const comboRoute = Router();

const comboService = new ComboService();

comboRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Combo']
	/* #swagger.responses[200] = {
            description: 'Return all combos',
            schema: { $ref: '#/definitions/Combo' }
    } */
	comboService.getAll(req, res);
});

comboRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Combo']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Combo' }
                }
            }
        }
    */
	comboService.createCombo(req, res);
});

comboRoute.post("/association/create", (req, res) => {
	// #swagger.tags = ['Combo']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/AddComboProduct' }
                }
            }
        }
    */
	comboService.createComboProductAssociation(req, res);
});

comboRoute.get("/:id/products", (req, res) => {
	// #swagger.tags = ['Combo']
	comboService.getComboProducts(req, res);
});

// comboRoute.put("/update/:id", userController.update());
// comboRoute.delete("/delete/:id", userController.delete());
// comboRoute.get("/index/:id", userController.index());
// comboRoute.post("/verifica", userController.verificaCampo());

export default { routes: comboRoute };
