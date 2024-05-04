import express from "express";
import { orderRoute } from "./orderRoute";
import { clientRoute } from "./clientRoute";

export const v1Routes = express.Router();

v1Routes.use("/order", orderRoute);
v1Routes.use("/client", clientRoute);
