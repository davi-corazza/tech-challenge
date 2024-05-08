import express from "express";
import { orderRoute } from "./orderRoute";
import { clientRoute } from "./clientRoute";
import { ingredientRoute } from "./ingredientRoute";
import { comboRoute } from "./comboRoute";

export const v1Routes = express.Router();

v1Routes.use("/order", orderRoute);
v1Routes.use("/client", clientRoute);
v1Routes.use("/ingredient", ingredientRoute);
v1Routes.use("/combo", comboRoute);
