import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Login = () => {
    return (
        <main className='bg-primary_blue'>
            <article className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-fit p-8 m-auto bg-white rounded-md shadow-xl shadow-gray-600 ring lg:max-w-xl relative mx-auto">
                    <h1 className="text-3xl font-bold text-center text-primary_blue uppercase font-sans mt-5">
                    Sign in
                    </h1>
                    <Image
                        src="/user-icon.svg"
                        alt="Profile Logo"
                        className="absolute -top-14 inset-0 md:translate-x-36 translate-x-36"
                        width={100}
                        height={24}
                        priority
                    />
                    <form className="mt-6">
                        <div className="mb-3 form-group flex">
                            <Image
                            src="/email-icon.svg"
                            alt="Email Logo"
                            width={45}
                            height={45}
                            priority
                            className='mr-5'
                            />
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Email'
                            />
                        </div>
                        <div className="mb-3 form-group flex">
                            <Image
                            src="/key-icon.svg"
                            alt="Password Logo"
                            width={45}
                            height={40}
                            priority
                            className='mr-5'
                            />
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Password'
                            />
                        </div>
                        <a
                            href="#"
                            className="text-primary_blue hover:underline">
                            Lupa Password?
                        </a>
                        <div className="mt-6 mb-3">
                            <Link href="">
                                <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary_blue rounded-md hover:bg-primary_blue focus:outline-none focus:bg-primary_blue">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </form>

                    <p className="mt-6 font-light text-center text-black bg-gray-400 p-6 -mx-8 -mb-8 rounded-md">
                        {" "}
                        Belum punya akun?{" "}
                        <Link
                            href="./signUp"
                            className="font-bold text-primary_blue hover:underline"
                        >
                            <i>Sign Up</i>
                        </Link>
                    </p>
                </div>
            </article>
        </main>
    );
}

export default Login;