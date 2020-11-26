import { NextFunction, Request, Response } from "express";

import { InternalServerError, postgresql } from "../lib";

export const PostgresqlMiddleware = {
    connected: async (_: Request, res: Response, next: NextFunction) => {
        try {
            if (!postgresql.database || !postgresql.database.isConnected) {
                await postgresql.connect();
                throw InternalServerError;
            }
            next();
        } catch (e) {
            res.status(InternalServerError.status).json(InternalServerError);
        }
    },
};
