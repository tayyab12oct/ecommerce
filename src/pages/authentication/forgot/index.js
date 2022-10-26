import React, { useState } from 'react'
import { Button, Input, Label } from 'components/atoms';
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import { forgetSchema } from 'components/form/formSchema';
import { toast } from 'react-toastify';


function Forgot() {
    const [data, setData] = useState({
        email: ""
    })
    let user = localStorage.getItem("Users")
    const { values = data, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: data,
        validationSchema: forgetSchema,
        onSubmit: (data) => {
            console.log("Data", data);
            const { email } = data;
            if (user && user.length) {
                let userData = JSON.parse(user)
                const userForgot = userData.filter((v) => {
                    return v.email === email
                })
                if (userForgot.length === 0) {
                    toast.error("Email is invalid")
                } else {
                    toast.error("Email sent to your email account.")
                }
            }
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