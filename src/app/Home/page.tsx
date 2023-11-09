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
import Layout from "./SideBarRight/Component/Layout/page";

const Home = () => {
    return (
        <BaseLayout>
            <div className="bg-white rounded-lg p-4">
                <Layout/>
            </div>
        </BaseLayout>
    )
}

export default Home;