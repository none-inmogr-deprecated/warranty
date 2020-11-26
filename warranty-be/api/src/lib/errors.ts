import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, TOO_MANY_REQUESTS, UNAUTHORIZED } from "http-status";

export class SystemError extends Error {
    public readonly status: number;

    constructor(status: number = 500, message: string = "Internal server error") {
        super(message);
        this.status = status;
    }

    toJSON = () => {
        return {
            status: this.status,
            errors: {
                messages: [this.message],
            },
        };
    };
}

export const BadRequest = new SystemError(BAD_REQUEST, "Bad Request");
export const BadRequestUsed = new SystemError(BAD_REQUEST, "Bad Request - Product Already Registered");
export const NotAllowedByCORS = new SystemError(UNAUTHORIZED, "Not allowed by CORS");
export const NotFoundError = new SystemError(NOT_FOUND, "Not found");
export const InternalServerError = new SystemError(INTERNAL_SERVER_ERROR, "Internal server error");
export const TooManyRequests = new SystemError(TOO_MANY_REQUESTS, "Too many requests");
