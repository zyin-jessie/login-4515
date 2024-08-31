'use client'
import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { signIn } from 'next-auth/react';
import { SessionProvider } from "next-auth/react"

export default function Page() {
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
                    <h1 class="text-2xl font-bold"><span class="font-bold text-5xl text-primary">NEU Login</span> <br /> Central Branch</h1>
                </div>
                <form action="#">

                    <div className='flex gap-2 mb-5'>
                        <button type='button' onClick={() => signIn('google')} className='bg-white cursor-pointer w-full rounded-md border-0 py-3.5 shadow-sm px-5 flex items-center justify-center gap-3'><Image src="/google.png" alt='google' width={100} height={100} className='w-[23px]'></Image></button>
                        <button type='button' onClick={() => signIn('facebook')} className='bg-white cursor-pointer w-full rounded-md border-0 py-3.5 shadow-sm px-5 flex items-center justify-center gap-3'><FaFacebook className='text-primary text-2xl' /></button>
                    </div>

                    <span className="relative flex justify-center">
                        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#6e6d7a] to-transparent opacity-75"></div>
                        <span className="relative z-10 bg-default px-6 text-sm">or</span>
                    </span>

                    <div class='username mt-5 mb-2'>
                        <input type="text" name="username" placeholder="Email / Username" class="block w-full rounded-md border-0 py-3.5 shadow-sm px-5"/>
                    </div>
                    <div class='password'>
                        <input type="password" name="password" autoComplete="off" placeholder="Password" class="block w-full rounded-md border-0 py-3.5 shadow-sm px-5"/>
                    </div>
                    <div class="flex justify-between text-right my-2 text-sm">
                        <label for="remember" className='flex items-center justify-center transition-all gap-1 hover:text-primary has-[:checked]:text-primary'>
                            <input type="checkbox" id='remember' name="remember" />
                            Remember me
                        </label>
                        <a href="#" class="text-primary hover:text-blue-700">Forgot password?</a>
                    </div>
                    <div class='login-btn'>
                        <button class="flex items-center justify-center py-3 px-3.5 rounded-md text-light bg-blue-600 hover:bg-blue-700 w-full">Log in</button>
                    </div>
                </form>
                <div class="text-center text-sm mt-3">
                    <p>Don&rsquo;t have an account? <a href="/signup" class='text-primary'>Sign up</a></p>
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
