import express from "express";
import { orderRoute } from "./orderRoute";
import { clientRoute } from "./clientRoute";
import { employeeRoute } from "./employeeRoute";

export const v1Routes = express.Router();

v1Routes.use("/order", orderRoute);
v1Routes.use("/client", clientRoute);
v1Routes.use("/employee", employeeRoute);
