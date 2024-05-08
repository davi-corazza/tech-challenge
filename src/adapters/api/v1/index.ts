import express from "express";
import { orderRoute } from "./orderRoute";
import { clientRoute } from "./clientRoute";
import { ingredientRoute } from "./ingredientRoute";
import { comboRoute } from "./comboRoute";
import { categoryRoute } from "./categoryRoute";
import { productRoute } from "./productRoute";

export const v1Routes = express.Router();

v1Routes.use("/order", orderRoute);
v1Routes.use("/client", clientRoute);
v1Routes.use("/ingredient", ingredientRoute);
v1Routes.use("/combo", comboRoute);
v1Routes.use("/category", categoryRoute);
v1Routes.use("/product", productRoute);
