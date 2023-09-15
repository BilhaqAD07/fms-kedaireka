'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    Button,
    Typography,
    Container,
    Box,
    LinearProgress,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@mui/material";
  import LoginIcon from '@mui/icons-material/Login';
  import SendIcon from '@mui/icons-material/Send';
  import LockIcon from '@mui/icons-material/Lock';


const Login = () => {
    // const { setIsAuth } = useContextApi();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [emailResetPassword, setemailResetPassword] = useState("");

    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    };

    const handleResetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, emailResetPassword)
        .then(()=>{
            alert("Check your email to reset")
        })
        .catch((error: { message: any; }) => {
            // console.log('Error:', error);
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };

    const submitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        if (email === "" || password === "") {
            setIsError(true);
            setErrorMessageEmail("Email tidak boleh kosong");
            setErrorMessagePassword("Password tidak boleh kosong")
            return;            
        }

        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => setIsLoading(false))
            .then((userCredential: { user: { emailVerified: any; }; }) => {
                const isVerified = userCredential?.user?.emailVerified;
                if (isVerified) {
                    setIsAuth(true);
                    console.log("success")
                } else {
                    console.log("email is not verified");
                    setErrorMessageEmail("Email Anda belum terverifikasi");
                    setIsError(true);
                }
            })
            .catch((error: { code: any; }) => {
                console.log(error.code);
                setIsError(true);
                switch (error.code) {
                    case "auth/invalid-email":
                        setErrorMessageEmail("Email Anda tidak valid");
                        break;
                    case "auth/email-already-in-use":
                        setErrorMessageEmail("Email Anda sudah digunakan");
                        break;
                    case "auth/user-not-found":
                        setErrorMessageEmail("Email tidak terdaftar,buat akun dulu");
                        break;
                    case "auth/wrong-password":
                        setErrorMessagePassword("Password salah");
                        break;
                    default:
                }
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <main className='bg-primary_blue'>
            {isLoading && <LinearProgress/>}
            <Container className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <article className="w-fit p-8 m-auto bg-white rounded-md shadow-xl shadow-gray-600 ring lg:max-w-xl relative mx-auto">
                    <Typography className="text-3xl font-bold text-center text-primary_blue uppercase font-sans mt-5">
                    Sign in
                    </Typography>
                    <Image
                        src="/user-icon.svg"
                        alt="Profile Logo"
                        className="absolute -top-12 translate-x-24"
                        width={100}
                        height={24}
                        priority
                    />
                    <Box 
                        className="mt-6"
                        onSubmit={submitForm}
                        component={"form"}
                    >
                        <div className="mb-3 form-group flex">
                            <Image
                            src="/email-icon.svg"
                            alt="Email Logo"
                            width={45}
                            height={45}
                            priority
                            className='mr-5'
                            />
                            <TextField
                                error={isError}
                                helperText={errorMessageEmail}
                                type="email"
                                className="block w-full m-1 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                label='Email'
                                id="outlined-start-adornment"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsError(false);
                                    setErrorMessageEmail("");
                                }}
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
                            <TextField
                                error={isError}
                                helperText={errorMessagePassword}
                                type="password"
                                className="block w-full m-1 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                label='Password'
                                value={password}
                                id="outlined-start-adornment"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setIsError(false);
                                    setErrorMessagePassword("");
                                }}
                            />
                        </div>
                        <Link
                            href="/login"
                            className="text-primary_blue hover:underline"
                            onClick={handleDialog}
                            >
                            Lupa Password?
                        </Link>
                        <div className="mt-6 mb-3">
                            <Link href="">
                                <Button  
                                type='submit'
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary_blue rounded-md"
                                variant={'contained'}
                                endIcon={<LoginIcon />}
                                >
                                    <strong>Login</strong>
                                </Button>
                            </Link>
                        </div>
                    </Box>

                    <Box className="mt-6 font-light text-center text-black bg-gray-400 p-6 -mx-8 -mb-8 rounded-md">
                        <Typography>
                            Belum punya akun?
                            <Link
                                href="./signUp"
                                className="font-bold text-primary_blue hover:underline"
                            >
                                <i> Sign Up </i>
                            </Link>
                        </Typography>
                    </Box>
                </article>

                <Dialog open={openDialog} onClose={handleDialog}>
                    <DialogTitle>
                        <LockIcon className='mr-2' />
                        Lupa Password
                    </DialogTitle>
                    <DialogContent className='w-fit'>
                        <DialogContentText>
                            Masukkan Email, lalu cek Email Anda untuk link reset. 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            className="m-1 mt-4 text-primary_blue bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            label='Email'
                            value={emailResetPassword}
                            fullWidth
                            id="outlined-start-adornment"
                            onChange={(e) => setemailResetPassword(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            className='w-full bg-primary_blue text-white hover:bg-primary_blue hover:bg-opacity-70'
                            onClick={() => {
                                handleDialog();
                                handleResetPassword()
                            }}
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </main>
    );
}

export default Login;