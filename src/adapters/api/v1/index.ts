import express from "express";
import { orderRoute } from "./orderRoute";

export const v1Routes = express.Router();

v1Routes.use("/order", orderRoute);
