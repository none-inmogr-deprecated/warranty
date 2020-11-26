import { BadRequest, BadRequestUsed, InternalServerError, postgresql } from "../lib";
import { WarrantyRegistrationCreateModel, WarrantyRegistrationCreateRequest } from "../models";

export const WarrantyRegistrationService = {
    create: async (create: WarrantyRegistrationCreateRequest) => {
        try {
            if (!postgresql.database) {
                return InternalServerError;
            }
            const repo = postgresql.database.getRepository(WarrantyRegistrationCreateModel);
            const find = await repo.find({ where: { serial: create.serial } });
            if (find.length) {
                return BadRequestUsed;
            }
            const insert = await repo.insert(new WarrantyRegistrationCreateModel(create));
            if (insert.identifiers.length === 1) {
                return true;
            }
            return BadRequestUsed;
        } catch (error) {
            switch (error.code) {
                case "23503":
                    return BadRequest;
                default:
                    return InternalServerError;
            }
        }
    },
};
