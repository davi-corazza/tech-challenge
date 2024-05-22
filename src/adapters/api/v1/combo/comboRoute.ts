import { Router } from "express";
import { ComboRepository } from "@database/v1/combo/comboRepository";
import { ComboService } from "@services/v1/comboService";
import { ComboController } from "@api/v1/combo/comboController";

export const comboRoute = Router();

const comboRepository = new ComboRepository();
const comboService = new ComboService(comboRepository);
const comboController = new ComboController(comboService);

comboRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Combo']
	/* #swagger.responses[200] = {
            description: 'Return all combos',
            schema: { $ref: '#/definitions/Combo' }
    } */
	comboController.getAll(req, res);
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
	comboController.createCombo(req, res);
});

comboRoute.post("/product/association/create", (req, res) => {
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
	comboController.createComboProductAssociation(req, res);
});

comboRoute.get("/:id/products", (req, res) => {
	// #swagger.tags = ['Combo']
	comboController.getComboProducts(req, res);
});
