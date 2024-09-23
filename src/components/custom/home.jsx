'use client'
import Link from 'next/link'
import { signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Page({ session }) {

    return (
    <div>
        <nav className='w-full py-1 px-2 z-30 fixed bg-[#365678] almost:shadow-darks'>
            <div className="flex justify-between max-w-7xl m-auto p-1">
                <div className='flex justify-center items-center text-white gap-10 font-medium'>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Departments</Link>
                    <Link href="/">Billing & info</Link>
                    <Link href="/">Emergency</Link>
                </div>

                <div className='flex items-center justify-center gap-5 text-sm'>
                    <button onClick={() => signOut({ callbackUrl: '/login' })} className='bg-primary text-white rounded-md py-2 px-4'>Logout</button>
                </div>
            </div>
        </nav>
        <div className='h-screen flex flex-col items-center justify-center'>
            <p>Home Page</p>
            <p>Member Account</p>
            <Image src={session?.user?.image} className='rounded-full' alt='profile' width={50} height={50}></Image>
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.role}</p>
        </div>
    </div>
    )
}
