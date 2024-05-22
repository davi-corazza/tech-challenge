import express from "express";
import initDatabase from "@database/v1";
import { campaignRoute } from "@api/v1/campaign/campaignRoute";
import { categoryRoute } from "@api/v1/category/categoryRoute";
import { comboRoute } from "@api/v1/combo/comboRoute";
import { costumerRoute } from "@api/v1/costumer/costumerRoute";
import { employeeRoute } from "@api/v1/employee/employeeRoute";
import { ingredientRoute } from "@api/v1/ingredient/ingredientRoute";
import { orderRoute } from "@api/v1/order/orderRoute";
import { paymentRoute } from "@api/v1/payment/paymentRoute";
import { productRoute } from "@api/v1/product/productRoute";

export const v1Routes = express.Router();

initDatabase();

v1Routes.use("/order", orderRoute);
v1Routes.use("/costumer", costumerRoute);
v1Routes.use("/ingredient", ingredientRoute);
v1Routes.use("/combo", comboRoute);
v1Routes.use("/category", categoryRoute);
v1Routes.use("/product", productRoute);
v1Routes.use("/campaign", campaignRoute);
v1Routes.use("/employee", employeeRoute);
v1Routes.use("/payment", paymentRoute);
