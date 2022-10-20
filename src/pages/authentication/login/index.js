import React from 'react'
import { Button, Checkbox, Input, Label, OR } from 'components/atoms';
import { Helmet } from "react-helmet";
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"

function Login() {
    const methods = useForm({
        mode: "onSubmit",
    });
    const onSubmit = (Data) => { console.log("Data", Data) };
    return (
        <>
            <Helmet>
                <title>Ecommerce - Log In</title>
            </Helmet>
            <div className="max-w-xl mx-auto py-20 h-full flex flex-col justify-center w-full">
                <Label value="Login" className="border-b py-3 font-medium text-2xl" />
                <hr className='w-32 -mt-0.5 border-1.5 border-primary-main bg-primary-main' />
                <Label value="Welcome back! Sign in to your account." className="py-7 font-light" />
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <Button value="Continue with Google" className="bg-transparent hover:bg-transparent hover:shadow border flex-row-reverse" icon={<FcGoogle className='text-xl mr-2' />} />
                            <Button value="Continue with Facebook" className="bg-transparent hover:bg-transparent hover:shadow border flex-row-reverse" icon={<BsFacebook className='text-xl mr-2 text-blue-100' />} />
                        </div>
                        <OR />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="Username or Email Address"
                            placeholder="Enter Your Username or Email..."
                            required
                            rules={{
                                required: "Email Should be not empty!", pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            }}
                        />
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter Your Password..."
                            required
                            rules={{
                                required: "Password Should be not empty!"
                            }}
                        />
                        <div className="flex items-center justify-between">
                            <Checkbox
                                id="Remember"
                                label="Remember Me"
                            />
                            <Link to="/reset-password">
                                <Label
                                    value="Forgot Password?"
                                    className="font-light hover:text-primary-main hover:underline"
                                />
                            </Link>
                        </div>
                        <Button value="LOGIN" />
                        <Label value={<>
                            Don't have an account?
                            <Link className='text-primary-main hover:underline pl-2 font-medium'>Sign up now.</Link>
                        </>} className="font-light w-full text-center" />
                        {/* <Label
                            value="Already have an account? Sign in instead"
                        /> */}

                    </form>
                </FormProvider>
            </div>
        </>
    )
}

export default Login;