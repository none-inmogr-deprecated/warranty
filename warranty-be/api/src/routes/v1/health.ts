import { Router } from "express";
import { OK } from "http-status";

export const HealthRouter = Router();

HealthRouter.route("/").get((_req, res) => {
    res.status(OK).json({
        status: OK,
        response: {
            messages: ["App is healthy"],
        },
    });
});
