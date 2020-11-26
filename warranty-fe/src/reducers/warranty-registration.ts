import { cloneDeep } from "lodash";

import { WarrantyRegistrationActionType } from "../actions";
import { ReduxAction, ReduxState, WarrantyRegistrationState } from "../models";

const initialState: WarrantyRegistrationState = {};

export const warrantyRegistration = (state: ReduxState<WarrantyRegistrationState>, action: ReduxAction<WarrantyRegistrationState>) => {
    const next = cloneDeep(state || initialState);
    switch (action.type) {
        case WarrantyRegistrationActionType.CREATE_FAILED:
            next.failed = action.payload.failed;
            next.created = undefined;
            break;
        case WarrantyRegistrationActionType.CREATE_SUCCESS:
            next.created = action.payload.created;
            next.failed = undefined;
            break;
        case WarrantyRegistrationActionType.RESET:
            return cloneDeep(initialState);
    }
    return next;
};
