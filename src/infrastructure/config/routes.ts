import express from "express";
import { apiRoutes } from "@routes";

export const routes = express.Router();

routes.use("", apiRoutes);

routes.get("/heathlz", (req, res) => {
	res.status(200);
	res.end();
});
