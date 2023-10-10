/* eslint-disable eqeqeq */
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Button,
  Card,
  Typography,
  Container,
  Stack,
  LinearProgress,
  TextField
} from '@mui/material'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isError, setIsError] = useState(false)
  const [errorMessageUsername, setErrorMessageUsername] = useState('')
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')
  const [showEmailVerificationCard, setShowEmailVerificationCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (
      userEmail === '' ||
            password === '' ||
            confirmPassword === '' ||
            username === '') {
      setIsError(true)

      setErrorMessageUsername('Username tidak boleh kosong')
      setErrorMessageEmail('Email tidak boleh kosong')
      setErrorMessagePassword('Password tidak boleh kosong')
      return
    }

    if (username.length <= 5) {
      setErrorMessageUsername('Username kurang dari 5 karakter')
      setIsError(true)
      return
    }

    if (password != confirmPassword) {
      setErrorMessagePassword('Password tidak sama')
      setIsError(true)
      return
    }

    setIsLoading(true)
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, userEmail, password).then(
        () => {
          const data = {
            email: userEmail,
            username,
            password
          }
          const path = 'users/' + stringRegex(userEmail)
          writeDatabase(path, data)
        }
      )

      await sendEmailVerification(auth.currentUser).then(() => {
        setShowEmailVerificationCard(true)
      })
    } catch (error) {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          setIsError(true)
          setErrorMessageEmail('Email tidak valid')
          break
        case 'auth/email-already-in-use':
          setIsError(true)
          setErrorMessageEmail('Email sudah terdaftar')
          break
        case 'auth/weak-password':
          setIsError(true)
          setErrorMessagePassword('Password terlalu mudah')
          break
        default:
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
        <main className='bg-primary_blue'>
            {isLoading && <LinearProgress/>}
            <article className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                {showEmailVerificationCard
                  ? (
                    <Card
                        className='flex flex-col align-center justify-start'
                    >
                        <Typography className='mb-5 text-xl font-bold'>
                            Cek Email Anda
                        </Typography>

                        <Typography className='text-lg font-bold'>
                            Sebelum menggunakan akun, Anda butuh verifikasi Email terlebih dahulu.
                        </Typography>
                        <Link href={'/login'}>
                            <Button
                                className='w-full bg-primary_blue text-white hover:bg-primary_blue hover:bg-opacity-70'
                            >
                                Login
                            </Button>
                        </Link>
                    </Card>
                    )
                  : (
                    <Card className="w-fit p-8 m-auto bg-white rounded-md shadow-xl shadow-gray-600 ring lg:max-w-xl relative mx-auto">
                        <h1 className="text-3xl font-bold text-center text-primary_blue uppercase font-sans mt-5">
                        Sign Up
                        </h1>
                        <form className="mt-6">
                            <TextField
                                error={isError}
                                helperText={errorMessageUsername}
                                type="text"
                                className="w-full m-1 mb-3 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                label='Username'
                                id="outlined-start-adornment"
                                value={username}
                                onChange={(e) => {
                                  setUsername(e.target.value)
                                  setIsError(false)
                                  setErrorMessageUsername('')
                                }}
                            />
                            <TextField
                                error={isError}
                                helperText={errorMessageEmail}
                                type="email"
                                className="w-full m-1 mb-3 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                label='Email'
                                id="outlined-start-adornment"
                                value={userEmail}
                                onChange={(e) => {
                                  setUserEmail(e.target.value)
                                  setIsError(false)
                                  setErrorMessageEmail('')
                                }}
                            />
                            <TextField
                                error={isError}
                                helperText={errorMessagePassword}
                                type="password"
                                className="w-full m-1 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                label='Password'
                                value={password}
                                id="outlined-start-adornment"
                                onChange={(e) => {
                                  setPassword(e.target.value)
                                  setIsError(false)
                                  setErrorMessagePassword('')
                                }}
                            />
                            <TextField
                                error={isError}
                                helperText={errorMessagePassword}
                                type="password"
                                className="w-full m-1 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                label='Confirm Password'
                                value={confirmPassword}
                                id="outlined-start-adornment"
                                onChange={(e) => {
                                  setConfirmPassword(e.target.value)
                                  setIsError(false)
                                  setErrorMessagePassword('')
                                }}
                            />
                            <div className="mt-6 mb-3">
                                <Link href="">
                                    <Button
                                    type='submit'
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary_blue rounded-md"
                                    variant={'contained'}
                                    >
                                        <strong>Register</strong>
                                    </Button>
                                </Link>
                            </div>
                        </form>

                        <p className="mt-6 font-light text-center text-black bg-gray-400 p-6 -mx-8 -mb-8 rounded-md">
                            {' '}
                            Sudah ada akun?{' '}
                            <Link
                                href="./login"
                                className="font-bold text-primary_blue hover:underline"
                            >
                                <i>Log In</i>
                            </Link>
                        </p>
                    </Card>

                    )}
            </article>
        </main>
  )
}

export default SignUp
