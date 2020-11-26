import { Router } from "express";

import { PostgresqlMiddleware } from "../../middlewares";
import { HealthRouter } from "./health";
import { WarrantyRegistrationRouter } from "./warranty-registration";

export const v1Router = Router();

v1Router.use("/health", HealthRouter);
v1Router.use("/warranty-registration", PostgresqlMiddleware.connected, WarrantyRegistrationRouter);
