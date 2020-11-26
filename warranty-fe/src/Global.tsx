import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";

import { ReduxStore, SettingsState } from "./models";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

export const Global = () => {
    const classes = useStyles();
    const settings = useSelector<ReduxStore, SettingsState>((store) => store.settings);
    return (
        <Backdrop className={classes.backdrop} open={settings.loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
