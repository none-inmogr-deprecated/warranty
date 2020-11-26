import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST } from "http-status";
import joi from "joi";

const formatJoiError = (error: joi.ValidationError) => {
    const errors: Record<string, string[]> = {};
    error.details.forEach((err) => {
        const path = err.path[0];
        if (!errors[path]) {
            errors[path] = [];
        }
        errors[path].push(err.message);
    });
    return errors;
};

export const JoiMiddleware = {
    validator: (schema: joi.ObjectSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                errors: formatJoiError(error),
            });
        } else {
            next();
        }
    },
};
