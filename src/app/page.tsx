'use client'
import React from "react";
import SideBarRight from "./Home/SideBarRight/page";
import BaseLayout from "@/components/baseLayout";
import { Container } from "@mui/material";

const Home = () => {
    return (
        <BaseLayout pageTitle="Home">
            <Container>
            <div className="flex justify-end">
                <SideBarRight />
            </div>
            </Container>
        </BaseLayout>
  )
}

export default Home
