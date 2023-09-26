'use client'
import React from "react";
import {
    Button,
    Typography,
    Container,
    Box,
    TextField,
    LinearProgress,
} from '@mui/material'
import BaseLayout from "@/components/baseLayout";

const Home = () => {
    return (
        <BaseLayout>
            <Container className="text-black drop-shadow bg-green-400 shadow-black dark:bg-white rounded-lg p-4">
                HELLOW WORLD
            </Container>
        </BaseLayout>
    )
}

export default Home;