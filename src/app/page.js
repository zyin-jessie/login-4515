import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa6";

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
                        <div className='bg-white cursor-pointer w-full rounded-md border-0 py-3.5 shadow-sm px-5 flex items-center justify-center gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                        </svg></div>
                        <div className='bg-white cursor-pointer w-full rounded-md border-0 py-3.5 shadow-sm px-5 flex items-center justify-center gap-3'><FaFacebook className='text-primary text-2xl' /></div>
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
                    <div class="f-pass text-right my-2 text-sm">
                        <a href="#" class="text-primary">Forgot password?</a>
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
