import * as Yup from 'yup';

export const registrationSchema = Yup
    .object({
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
        phone_number: Yup.string().required("Phone number is required"),
        email: Yup.string().email().required("Email address is required"),
        password: Yup.string().min(6).required("Password is required"),
        confirm_password: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), null], "Password must match"),
    })
    .required();


export const loginSchema = Yup
    .object({
        email: Yup.string().email().required("Email address is required"),
        password: Yup.string().required("Password is required"),
    })
    .required();

export const forgetSchema = Yup
    .object({
        email: Yup.string().email().required("Email address is required")
    })
    .required();

export const resetPasswordSchema = Yup
    .object({
        old_password: Yup.string().required("Old Password is required"),
        new_password: Yup.string().min(6).required("New Password is required"),
        confirm_password: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("new_password"), null], "Password must match"),
    })
    .required();