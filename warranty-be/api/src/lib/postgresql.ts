import { Connection, createConnection } from "typeorm";

import { WarrantyRegistrationCreateModel } from "../models";
import { winstonLogger } from "./winston";

export const postgresql = {
    database: undefined as Connection | undefined,
    connect: async () => {
        try {
            const env: any = {
                type: `${process.env.TYPEORM_TYPE}`,
                host: `${process.env.TYPEORM_HOST}`,
                port: +`${process.env.TYPEORM_PORT}`,
                username: `${process.env.TYPEORM_USERNAME}`,
                password: `${process.env.TYPEORM_PASSWORD}`,
                database: `${process.env.TYPEORM_DATABASE}`,
                schema: `${process.env.TYPEORM_SCHEMA}`,
            };
            postgresql.database = await createConnection({
                ...env,
                entities: [WarrantyRegistrationCreateModel],
            });
        } catch (error) {
            winstonLogger.error(error);
        }
    },
};

postgresql.connect();
