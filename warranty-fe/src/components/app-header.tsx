import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ColorLens from "@material-ui/icons/ColorLens";
import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SettingsAction } from "../actions";
import { ReduxStore, SettingsState } from "../models";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    settings: {
        marginRight: theme.spacing(1),
    },
}));

/**
 * A common app header component that will be used across the application
 */
export const AppHeader = memo(() => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const settings = useSelector<ReduxStore, SettingsState>((store) => store.settings);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleSelect = (index: number) => {
        handleCloseMenu();
        switch (index) {
            case 0:
                dispatch(SettingsAction.useThemeBlue());
                break;
            case 1:
                dispatch(SettingsAction.useThemeGreen());
                break;
        }
    };

    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Warranty App
                    </Typography>
                    <IconButton className={classes.settings} edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
                        <ColorLens />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                <MenuItem hidden={settings.themeId === "blue"} onClick={() => handleSelect(0)}>
                    Blue
                </MenuItem>
                <MenuItem hidden={settings.themeId === "green"} onClick={() => handleSelect(1)}>
                    Green
                </MenuItem>
            </Menu>
        </Fragment>
    );
});
