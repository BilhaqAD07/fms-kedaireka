'use client'

import React from "react";
import {
    Button,
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
import { Card, Typography, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        <div className="flex justify-center items-center min-h-full mx-auto p-50">
    <Card className='flex p-0 mx-auto flex-col dark:bg-secondary_dark text-black dark:text-white w-[400px] h-[300px] min-width-[600px] place-content-center text-center'>
    <AccountCircleIcon
      className=" mx-auto flex justify-center absolute -top-14 translate-y-40 ml-40 w-[70px] h-[60px]" size="90x"
      />
        <List>
          
          <ListItemButton className='gap-4'>
              <AccountBoxIcon />
              <ListItemText primary="Name" />
          </ListItemButton>
          <ListItemButton className='gap-4'>
              <EmailIcon />

            <ListItemText primary= "kloping@gmail.com" />
          </ListItemButton>
          <ListItemButton className='gap-4'>
              <LocalPhoneIcon />
            <ListItemText primary="+6281316783223" />
          </ListItemButton>
        </List>
    </Card>
    </div>    
        </BaseLayout>
    )
}

export default Profile