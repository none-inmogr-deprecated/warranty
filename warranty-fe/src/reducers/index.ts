import { combineReducers } from "redux";

import { settings } from "./settings";
import { warrantyRegistration } from "./warranty-registration";

export const createRootReducer = () =>
    combineReducers({
        settings,
        warrantyRegistration,
    });
