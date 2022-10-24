import React from 'react'
import { Button, Checkbox, Input, Label, OR } from 'components/atoms';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import { loginSchema } from 'components/form/formSchema';
import { useFormik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
    email: "",
    password: ""
}
function Login() {
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            console.log("Data", values);
            toast.success("Login Successfully")
            action.resetForm();
        }
    })
    return (
        <>
            <Helmet>
                <title>Log In - Ecommerce</title>
            </Helmet>
            <div className="max-w-xl mx-auto py-20 h-full flex flex-col justify-center w-full">
                <Label value="Login" className="border-b py-3 font-medium text-2xl" />
                <hr className='w-32 -mt-0.5 border-1.5 border-primary-main bg-primary-main' />
                <Label value="Welcome back! Sign in to your account." className="py-7 font-light" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Button value="Continue with Google" className="bg-transparent hover:bg-transparent hover:shadow border flex-row-reverse" icon={<FcGoogle className='text-xl mr-2' />} />
                        <Button value="Continue with Facebook" className="bg-transparent hover:bg-transparent hover:shadow border flex-row-reverse" icon={<BsFacebook className='text-xl mr-2 text-blue-100' />} />
                    </div>
                    <OR />
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
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter Your Password..."
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.password}
                        touched={touched.password}
                    />
                    <div className="flex items-center justify-between">
                        <Checkbox
                            id="Remember"
                            label="Remember Me"
                        />
                        <Link to="/auth/forgot-password">
                            <Label
                                value="Forgot Password?"
                                className="font-light hover:text-primary-main hover:underline transition-all"
                            />
                        </Link>
                    </div>
                    <Button value="LOGIN" type="submit" />
                    <Label value={<>
                        Don't have an account?
                        <Link to="/auth/signup" className='text-primary-main hover:underline pl-2 font-medium transition-all'>Sign up now.</Link>
                    </>} className="font-light w-full text-center" />
                </form>
            </div>
        </>
    )
}

export default Login;