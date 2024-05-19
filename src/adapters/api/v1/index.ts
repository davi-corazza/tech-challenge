import express from "express";
import { orderRoute } from "./orderRoute";
import { ingredientRoute } from "./ingredientRoute";
import { comboRoute } from "./comboRoute";
import { costumerRoute } from "./costumerRoute";
import { categoryRoute } from "./categoryRoute";
import { productRoute } from "./productRoute";
import { campaignRoute } from "./campaignRoute";
import { employeeRoute } from "./employeeRoute";
import { paymentRoute } from "./paymentRoute";
import initRepository from "../../../core/services/v1/connectionService";

export const v1Routes = express.Router();

initRepository();

v1Routes.use("/order", orderRoute);
v1Routes.use("/costumer", costumerRoute);
v1Routes.use("/ingredient", ingredientRoute);
v1Routes.use("/combo", comboRoute);
v1Routes.use("/category", categoryRoute);
v1Routes.use("/product", productRoute);
v1Routes.use("/campaign", campaignRoute);
v1Routes.use("/employee", employeeRoute);
v1Routes.use("/payment", paymentRoute);
