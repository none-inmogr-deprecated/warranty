import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

export const themes = {
    default: createMuiTheme(),
    blue: createMuiTheme({
        palette: {
            primary: {
                main: blue[900],
            },
            secondary: {
                main: red[900],
            },
            error: {
                main: red[900],
            },
        },
    }),
    green: createMuiTheme({
        palette: {
            primary: {
                main: green[900],
            },
            secondary: {
                main: red[900],
            },
            error: {
                main: red[900],
            },
        },
    }),
};
