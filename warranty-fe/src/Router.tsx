import React, { memo } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "./constants";
import { WarrantyRegistrationPage } from "./pages";

export const Router = memo(() => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.WARRANTY_REGISTRATION} component={WarrantyRegistrationPage} />
            <Redirect to={ROUTES.WARRANTY_REGISTRATION} />
        </Switch>
    </BrowserRouter>
));
