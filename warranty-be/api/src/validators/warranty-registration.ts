import joi from "joi";
import moment from "moment";

export const WarrantyRegistrationValidator = {
    create: joi
        .object()
        .keys({
            title: joi.string().optional(),
            fName: joi.string().required(),
            lName: joi.string().required(),
            dob: joi.date().required().less(moment().add(-18, "years").format("YYYY-MM-DD")),
            email: joi.string().required().email(),
            mobile: joi
                .string()
                .required()
                .min(7)
                .max(16)
                .pattern(/^[+0-9]+$/),
            serial: joi.string().required().uuid(),
        })
        .required(),
};
