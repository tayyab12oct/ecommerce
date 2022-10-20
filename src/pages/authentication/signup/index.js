import React from 'react'
import { Button, Input, Label } from 'components/atoms';
import { Helmet } from "react-helmet";
import { FormProvider, useForm } from 'react-hook-form';

function Login() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log("error", errors);
    const methods = useForm({
        mode: "onSubmit",
    });
    const onSubmit = (Data) => { console.log("Data", Data) };
    return (
        <>
            <Helmet>
                <title>Ecommerce - Sign In</title>
            </Helmet>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Input
                        id="first-name"
                        name="first_name"
                        type="text"
                        label="First Name"
                        placeholder="Enter Your First Name..."
                        rules={{
                            required: "First Name Should be not empty!",
                        }}
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter Your Email..."
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
                        rules={{
                            required: "password Should be not empty!", minLength: {
                                value: 8,
                                message: "min length is 8"
                            }
                        }}
                    />
                    <Button value="LOGIN" />
                </form>
            </FormProvider>
        </>
    )
}

export default Login;