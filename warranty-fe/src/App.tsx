import { ThemeProvider } from "@material-ui/core/styles";
import { cloneDeep } from "lodash";
import React from "react";
import { useSelector } from "react-redux";

import { themes } from "./config";
import { Global } from "./Global";
import { ReduxStore, SettingsState } from "./models";
import { Router } from "./Router";

export const App = () => {
    const settings = useSelector<ReduxStore, SettingsState>((store) => store.settings);
    return (
        <ThemeProvider theme={cloneDeep(themes[settings.themeId])}>
            <Router />
            <Global />
        </ThemeProvider>
    );
};
