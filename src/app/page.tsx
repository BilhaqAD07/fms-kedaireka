'use client'
import React from "react";
import SideBarRight from "./Home/SideBarRight/page";

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
            <Container className="">
            <div className="flex justify-end">
    <SideBarRight />
        </div>
            </Container>
        </BaseLayout>
    )
}

export default Home;