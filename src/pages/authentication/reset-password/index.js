import React from 'react'
import { Button, Input, Label } from 'components/atoms';
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import { resetPasswordSchema } from 'components/form/formSchema';

const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: ""
}
function ResetPassword() {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: (values, action) => {
            console.log("Data", values);
            action.resetForm()
        }
    })
    return (
        <>
            <Helmet>
                <title>Reset Password - Ecommerce</title>
            </Helmet>
            <div className="max-w-xl mx-auto py-20 h-full flex flex-col justify-center w-full">
                <Label value="Reset Password" className="border-b py-3 font-medium text-2xl" />
                <hr className='w-32 mb-8 -mt-0.5 border-1.5 border-primary-main bg-primary-main' />
                {/* <Label value="Reset Password your password? Please enter your email address. You will receive a link to create a new password via email." className="py-7 font-light" /> */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        id="old_password"
                        type="password"
                        placeholder="Password"
                        name="old_password"
                        label="Old Password"
                        value={values.old_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.old_password}
                        touched={touched.old_password}
                    />
                    <Input
                        id="new_password"
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        label="New Password"
                        value={values.new_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.new_password}
                        touched={touched.new_password}
                    />
                    <Input
                        id="confirm_password"
                        type="password"
                        placeholder="Password"
                        name="confirm_password"
                        label="Confirm Password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.confirm_password}
                        touched={touched.confirm_password}
                    />
                    <Button value="Reset Password" type="submit" />
                </form>
            </div>
        </>
    )
}

export default ResetPassword;