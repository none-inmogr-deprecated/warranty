import { Router } from "express";

import { WarrantyRegistrationController } from "../../controllers";
import { JoiMiddleware } from "../../middlewares";
import { WarrantyRegistrationValidator } from "../../validators";

export const WarrantyRegistrationRouter = Router();

WarrantyRegistrationRouter.route("/").put(
    JoiMiddleware.validator(WarrantyRegistrationValidator.create),
    WarrantyRegistrationController.create,
);
