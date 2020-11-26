import { CREATED } from "http-status";
import { Dispatch } from "redux";

import { WarrantyRegistrationFormData } from "../models";
import { WarrantyRegistrationService } from "../services";
import { SettingsActionType } from "./settings";

export const WarrantyRegistrationActionType = {
    CREATE_FAILED: "CURRENCY_CREATE_FAILED",
    CREATE_SUCCESS: "CURRENCY_CREATE_SUCCESS",
    RESET: "CURRENCY_RESET",
};

export const WarrantyRegistrationAction = {
    create: (formData: WarrantyRegistrationFormData) => {
        return async (dispatch: Dispatch) => {
            try {
                dispatch({ type: SettingsActionType.LOADING_ON });
                dispatch({ type: WarrantyRegistrationActionType.CREATE_SUCCESS, payload: {} });
                const res = await WarrantyRegistrationService.create(formData);
                dispatch({ type: WarrantyRegistrationActionType.CREATE_SUCCESS, payload: { created: res.status === CREATED } });
                dispatch({ type: SettingsActionType.LOADING_OFF });
            } catch (error) {
                dispatch({ type: WarrantyRegistrationActionType.CREATE_FAILED, payload: { failed: error.message } });
                dispatch({ type: SettingsActionType.LOADING_OFF });
            }
        };
    },
};
