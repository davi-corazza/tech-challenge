import express from "express";
import { v1Routes } from "../adapters/api/v1";

export const routes = express.Router();

routes.use("/v1", v1Routes);
