import React from 'react'
import { Button, Input, Label, OR } from 'components/atoms';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import { registrationSchema } from 'components/form/formSchema';
import { useFormik } from "formik"
import { toast } from 'react-toastify';

const initialValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
};
function SignUp() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log("Data", values);
            toast.success("Account Created Successfully")
            action.resetForm()
        }
    });
    return (
        <>
            <Helmet>
                <title>Sign Up - Ecommerce</title>
            </Helmet>
            <div className="max-w-xl mx-auto py-20 h-full flex flex-col justify-center w-full">
                <Label value="Register" className="border-b py-3 font-medium text-2xl" />
                <hr className='w-32 -mt-0.5 border-1.5 border-primary-main bg-primary-main' />
                <Label value="Create new account today to reap the benefits of a personalized shopping experience." className="py-7 font-light" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Button value="Continue with Google" className="bg-transparent hover:bg-transparent hover:shadow border flex-row-reverse" icon={<FcGoogle className='text-xl mr-2' />} />
                        <Button value="Continue with Facebook" className="bg-transparent hover:bg-transparent hover:shadow border flex-row-reverse" icon={<BsFacebook className='text-xl mr-2 text-blue-100' />} />
                    </div>
                    <OR />
                    <div className='grid grid-cols-2 gap-4'>
                        <Input
                            id="first-name"
                            name="first_name"
                            type="text"
                            label="First Name"
                            placeholder="Enter Your First Name..."
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors.first_name}
                            touched={touched.first_name}
                        />
                        <Input
                            id="last-name"
                            name="last_name"
                            type="text"
                            label="Last Name"
                            placeholder="Enter Your Last Name..."
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors.last_name}
                            touched={touched.last_name}
                        />
                    </div>
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
                        id="phone_number"
                        type="text"
                        name="phone_number"
                        placeholder="Enter Your Phone Number..."
                        label="Phone Number"
                        value={values.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.phone_number}
                        touched={touched.phone_number}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.password}
                        touched={touched.password}
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
                    <Button value="SIGNUP" type="submit" />
                    <Label value={<>
                        Already have an account?
                        <Link to="/auth/login" className='text-primary-main hover:underline pl-2 font-medium'>Login now.</Link>
                    </>} className="font-light w-full text-center" />
                </form>
            </div>
        </>
    )
}

export default SignUp;