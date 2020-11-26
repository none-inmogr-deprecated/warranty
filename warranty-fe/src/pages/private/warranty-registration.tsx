import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React, { Fragment, memo } from "react";

import { AppHeader, WarrantyRegistrationForm } from "../../components";

export const WarrantyRegistrationPage = memo(() => {
    return (
        <Fragment>
            <AppHeader />
            <Container>
                <Box pt={4}>
                    <WarrantyRegistrationForm />
                </Box>
            </Container>
        </Fragment>
    );
});
