import { NextFunction, Request, Response } from "express";
import { CREATED } from "http-status";

import { WarrantyRegistrationService } from "../services";

export const WarrantyRegistrationController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        const created = await WarrantyRegistrationService.create(req.body);
        if (created === true) {
            res.status(CREATED).json({
                status: CREATED,
            });
        } else {
            next(created);
        }
    },
};
