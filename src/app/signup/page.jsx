'use client'
import React from 'react'
import Image from 'next/image'
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Page() {
    
    const signupSchema = yup.object().shape({
        email: yup.string().email("Please enter a valid email or username").required("Please enter a valid email or username"),
        pwd: yup.string().min(8,"Password must contain 8 characters").required("Please enter a valid password"),
        cpwd: yup.string().oneOf([yup.ref('pwd'), null], "Password does not match!").required("Please enter a valid password"),
    })
    const onSubmit =(values, actions) => {
        console.log(values);
        console.log(actions);
        actions.resetForm();
        alert("Form Submitted");
    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            pwd: "",
            cpwd: "",
        },
        validationSchema: signupSchema, onSubmit,
    });

  return (
    <div>
        <section class="bg-default font-primary h-screen flex select-none">
            <div class="seal large:flex tiny:hidden">
                <div class="poly flex items-center justify-center">
                    <Image src="/NEU_Logo.png" alt='logo' width={200} height={200} class="rounded-full h-72 w-auto"></Image>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center w-full">
                <div class="form">
                    <div class='title mb-10'>
                        <h1 class="text-2xl font-bold"><span class="font-bold text-5xl text-primary">Registration</span> <br /> Central Branch</h1>
                    </div>
                    <form action="#" onSubmit={handleSubmit}>
                        <div class='username mt-5 mb-2'>
                            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email / Username" class={`block w-full rounded-md border-0 py-3.5 shadow-sm px-5 ${errors.email && touched.email ? "border-2 border-danger" : ""}`}/>
                            {errors.email && touched.email && <p className='text-danger text-sm'>{errors.email}</p>}
                        </div>
                        <div class='password mb-2'>
                            <input type="password" name="pwd" value={values.pwd} onChange={handleChange} onBlur={handleBlur} autoComplete="off" placeholder="Password" class={`block w-full rounded-md border-0 py-3.5 shadow-sm px-5 ${errors.pwd && touched.pwd ? "border-2 border-danger" : ""}`}/>
                            {errors.pwd && touched.pwd && <p className='text-danger text-sm'>{errors.pwd}</p>}
                        </div>
                        <div class='password'>
                            <input type="password" name="cpwd" value={values.cpwd} onChange={handleChange} onBlur={handleBlur} autoComplete="off" placeholder="Confirm Password" class={`block w-full rounded-md border-0 py-3.5 shadow-sm px-5 ${errors.cpwd && touched.cpwd ? "border-2 border-danger" : ""}`}/>
                            {errors.cpwd && touched.cpwd && <p className='text-danger text-sm'>{errors.cpwd}</p>}
                        </div>
                        <div class='login-btn mt-5'>
                            <button class="flex items-center justify-center py-3 px-3.5 rounded-md text-light bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                        </div>
                    </form>
                    <div class="text-center text-sm mt-3">
                        <p>Already have an account? <a href="/" class='text-primary'>Login</a></p>
                    </div>
                    <div class="terms-privacy mt-3 text-sm">
                        <p>By using this service, you understood and agree to the NEU Online Services <a href="#" class='text-primary'>Terms of Use</a> and <a href="#" class="text-primary">Privacy Statement</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
