'use client'

import BaseLayout from '@/components/baseLayout'
import React from 'react'
import { Card, Typography, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profile() {
  return (
    <BaseLayout>
    <div className="flex justify-center items-center min-h-full mx-auto p-50">
    <Card className='flex p-0 mx-auto flex-col dark:bg-secondary_dark text-black dark:text-white w-[400px] h-[300px] min-width-[600px] place-content-center text-center'>
    <AccountCircleIcon
      className=" mx-auto flex justify-center absolute -top-14 translate-y-40 ml-40 w-[70px] h-[60px]"
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