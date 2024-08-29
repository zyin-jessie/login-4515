import React from 'react'
import Image from 'next/image'

export default function page() {
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
              <form action="#">
                  <div class='username mt-5 mb-2'>
                      <input type="text" name="username" placeholder="Email / Username" class="block w-full rounded-md border-0 py-3.5 shadow-sm px-5"/>
                  </div>
                  <div class='password mb-2'>
                      <input type="password" name="password" autoComplete="off" placeholder="Password" class="block w-full rounded-md border-0 py-3.5 shadow-sm px-5"/>
                  </div>
                  <div class='password'>
                      <input type="password" name="password" autoComplete="off" placeholder="Confirm Password" class="block w-full rounded-md border-0 py-3.5 shadow-sm px-5"/>
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
