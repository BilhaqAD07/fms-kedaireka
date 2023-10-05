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
import SidebarRight from "@/components/SidebarRight";
const Home = () => {
    return (
      
        <BaseLayout>
        <div>
                  <Container className="text-black drop-shadow bg-green-400 shadow-black dark:bg-white rounded-lg p-4">
                HELLOW WORLD
            </Container>
            <h1>Contoh Aplikasi dengan Sidebar Right</h1>
      <SidebarRight />
      {/* Konten utama aplikasi Anda akan ditampilkan di sini */}
    </div>
        </BaseLayout>
    )
}

export default Home;