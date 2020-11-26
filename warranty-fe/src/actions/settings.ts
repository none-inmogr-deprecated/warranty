import { Dispatch } from "redux";

/**
 * Contains all the action types related to settings
 */
export const SettingsActionType = {
    LOADING_OFF: "SETTINGS_LOADING_OFF",
    LOADING_ON: "SETTINGS_LOADING_ON",
    USE_THEME_BLUE: "SETTINGS_USE_THEME_BLUE",
    USE_THEME_GREEN: "SETTINGS_USE_THEME_GREEN",
    RESET: "SETTINGS_RESET",
};

/**
 * Contains all the actions related to settings
 */
export const SettingsAction = {
    /**
     * used to switch from any theme to the blue theme
     */
    useThemeBlue: () => {
        return async (dispatch: Dispatch) => {
            dispatch({ type: SettingsActionType.USE_THEME_BLUE });
        };
    },
    /**
     * used to switch from any theme to the green theme
     */
    useThemeGreen: () => {
        return async (dispatch: Dispatch) => {
            dispatch({ type: SettingsActionType.USE_THEME_GREEN });
        };
    },
};
