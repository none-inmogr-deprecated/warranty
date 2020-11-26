import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import moment from "moment";
import React, { Fragment, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { date, object, string } from "yup";

import { WarrantyRegistrationAction } from "../actions";
import { ReduxStore, WarrantyRegistrationFormData, WarrantyRegistrationState } from "../models";

const titleOptions = ["Mr.", "Mrs."];

const warrantyRegistrationValidationSchema = object().shape({
    title: string()
        .optional()
        .test("title", "Invalid Selection", (value) => titleOptions.includes(value || "")),
    fName: string().required("Required field"),
    lName: string().required("Required field"),
    dob: date().required("Required field").max(moment().add(-18, "years").format("YYYY-MM-DD"), "Invalid date of birth"),
    email: string().required("Required field").email("Invalid email address"),
    mobile: string()
        .required("Required field")
        .min(7, "Too short")
        .max(16, "Too long")
        .matches(/^[+0-9]+$/, "Invalid format"),
    serial: string().required("Required field").uuid("Invalid format"),
});

const useStyles = makeStyles((theme) => ({
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(2),
    },
}));

export const WarrantyRegistrationForm = memo(() => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const warrantyRegistration = useSelector<ReduxStore, WarrantyRegistrationState>((store) => store.warrantyRegistration);

    const formik = useFormik<WarrantyRegistrationFormData>({
        initialValues: { title: "Select", fName: "", lName: "", dob: "", email: "", mobile: "", serial: "" },
        validationSchema: warrantyRegistrationValidationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            dispatch(WarrantyRegistrationAction.create(values));
            setSubmitting(false);
        },
    });

    useEffect(() => {
        if (warrantyRegistration.created) {
            formik.resetForm();
        }
    }, [warrantyRegistration.created]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card>
                <CardHeader title="Convert Amount" titleTypographyProps={{ variant: "h5", component: "h6" }} />
                {warrantyRegistration.created ? (
                    <CardContent>
                        <Typography variant="caption">
                            Thank you for buying our products, you have successfully registered the product which is genuine and covered
                        </Typography>
                    </CardContent>
                ) : (
                    <Fragment>
                        <CardContent>
                            <Grid container={true} spacing={4} alignItems="center" justify="center">
                                <Grid item={true} xs={12}>
                                    <Select
                                        name="title"
                                        label="From"
                                        value={formik.values.title}
                                        error={Boolean(formik.errors.title) && formik.touched.title}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    >
                                        <MenuItem value="Select">Select</MenuItem>
                                        {titleOptions.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item}>
                                                    {item}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                    <FormHelperText error={Boolean(formik.errors.title) && formik.touched.title}>
                                        {formik.touched.title && formik.errors.title}
                                    </FormHelperText>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField
                                        name="fName"
                                        type="text"
                                        label="First Name"
                                        value={formik.values.fName}
                                        helperText={formik.touched.fName && formik.errors.fName}
                                        error={Boolean(formik.errors.fName) && formik.touched.fName}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField
                                        name="lName"
                                        type="text"
                                        label="Last Name"
                                        value={formik.values.lName}
                                        helperText={formik.touched.lName && formik.errors.lName}
                                        error={Boolean(formik.errors.lName) && formik.touched.lName}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField
                                        name="dob"
                                        type="date"
                                        label="Date of Birth"
                                        value={formik.values.dob}
                                        helperText={formik.touched.dob && formik.errors.dob}
                                        error={Boolean(formik.errors.dob) && formik.touched.dob}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField
                                        name="email"
                                        type="text"
                                        label="Email Address"
                                        value={formik.values.email}
                                        helperText={formik.touched.email && formik.errors.email}
                                        error={Boolean(formik.errors.email) && formik.touched.email}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField
                                        name="mobile"
                                        type="text"
                                        label="Mobile"
                                        value={formik.values.mobile}
                                        helperText={formik.touched.mobile && formik.errors.mobile}
                                        error={Boolean(formik.errors.mobile) && formik.touched.mobile}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <TextField
                                        name="serial"
                                        type="text"
                                        label="Serial Number"
                                        value={formik.values.serial}
                                        helperText={formik.touched.serial && formik.errors.serial}
                                        error={Boolean(formik.errors.serial) && formik.touched.serial}
                                        fullWidth={true}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        variant="filled"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            {warrantyRegistration.failed ? (
                                <Typography variant="caption" color="error">
                                    {warrantyRegistration.failed}
                                </Typography>
                            ) : null}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
                            >
                                Convert
                            </Button>
                        </CardActions>
                    </Fragment>
                )}
            </Card>
        </form>
    );
});
