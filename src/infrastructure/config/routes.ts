import express from "express";
import { apiRoutes } from "@routes";

export const routes = express.Router();

routes.use("", apiRoutes);
