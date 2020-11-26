import { json } from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import logger from "morgan";

import { InternalServerError, NotAllowedByCORS, NotFoundError, SystemError, winstonLogger } from "./lib";
import { routes } from "./routes";

export const app = express();

app.use(json());
app.use(helmet());
app.use(compression());

app.use(
    cors({
        credentials: true,
        origin: (origin = "", callback) => {
            if (process.env.ENABLE_CORS && process.env.CORS_WHITELIST && process.env.CORS_WHITELIST.includes(origin)) {
                callback(NotAllowedByCORS);
            } else {
                callback(null, true);
            }
        },
    }),
);

app.use(
    rateLimit({
        windowMs: 60 * 1000,
        max: 30,
    }),
);

if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
}

app.use("/api", routes);

app.use((_req, res) => {
    res.status(NotFoundError.status).json(NotFoundError);
});

// eslint-disable-next-line no-unused-vars
app.use((err: SystemError | undefined, _req: Request, res: Response, _next: NextFunction) => {
    const error = err || InternalServerError;
    if (process.env.NODE_ENV === "development") {
        winstonLogger.error(error);
    }
    res.status(error.status).json(error);
});
