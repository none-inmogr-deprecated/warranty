import axios from "axios";

import { BackendResponse, WarrantyRegistrationCreateResponse, WarrantyRegistrationFormData } from "../models";

export const WarrantyRegistrationService = {
    create: (data: WarrantyRegistrationFormData) => {
        return axios.put<BackendResponse<WarrantyRegistrationCreateResponse>>("http://localhost:8080/api/v1/warranty-registration", data);
    },
};
