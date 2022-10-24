import React from 'react'
import { Button, Input, Label } from 'components/atoms';
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import { forgetSchema } from 'components/form/formSchema';


const initialValues = {
    email: ""
}

function Forgot() {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues,
        validationSchema: forgetSchema,
        onSubmit: (values, action) => {
            console.log("Data", values);
            action.resetForm()
        }

    })
    return (
        <>
            <Helmet>
                <title>Forgot Password - Ecommerce</title>
            </Helmet>
            <div className="max-w-xl mx-auto py-20 h-full flex flex-col justify-center w-full">
                <Label value="Forgot Password" className="border-b py-3 font-medium text-2xl" />
                <hr className='w-32 -mt-0.5 border-1.5 border-primary-main bg-primary-main' />
                <Label value="Forgot your password? Please enter your email address. You will receive a link to create a new password via email." className="py-7 font-light" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email..."
                        label="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.email}
                        touched={touched.email}
                    />

                    <Button value="Reset Password" type='submit' />
                </form>
            </div>
        </>
    )
}

export default Forgot;