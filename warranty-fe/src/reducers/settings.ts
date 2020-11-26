import { cloneDeep } from "lodash";

import { SettingsActionType } from "../actions";
import { ReduxAction, ReduxState, SettingsState } from "../models";

const initialState: SettingsState = {
    loading: false,
    themeId: "default",
};

export const settings = (state: ReduxState<SettingsState>, action: ReduxAction<SettingsState>) => {
    const next = cloneDeep(state || initialState);
    switch (action.type) {
        case SettingsActionType.LOADING_OFF:
            next.loading = false;
            break;
        case SettingsActionType.LOADING_ON:
            next.loading = true;
            break;
        case SettingsActionType.USE_THEME_BLUE:
            next.themeId = "blue";
            break;
        case SettingsActionType.USE_THEME_GREEN:
            next.themeId = "green";
            break;
        case SettingsActionType.RESET:
            return cloneDeep(initialState);
    }
    return next;
};
