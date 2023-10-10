'use client'

import React from "react";
import {
    Button,
    Typography,
    Container,
    Box,
    TextField,
    LinearProgress,
    Drawer,
} from '@mui/material'
import BaseLayout from "@/components/baseLayout";
import { useState } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';

const Profile = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <BaseLayout>
        <main>
            <div className="flex justify-end">
                <Button  onClick={toggleSidebar}>
                  <BsFillArrowLeftSquareFill
              size={30}/>
              </Button>
            <Drawer
                anchor="right"
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            > 
                <div className="p-4">
                  <div className="flex">
            <Button onClick={() => setIsSidebarOpen(false)}>
              <GiCancel
              size={20}/>
              </Button>
                  </div>
                    Sidebar Content
                </div>  
            </Drawer>
            </div>   
        </main>    
        </BaseLayout>
    )
}

export default Profile