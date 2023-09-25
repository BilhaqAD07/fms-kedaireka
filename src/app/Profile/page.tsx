'use client'

import BaseLayout from '@/components/baseLayout'
import React from "react";
import { Card, List, colors } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Profile() {
  return (
    <div className="flex justify-center items-center min-h-full rounded-lg mx-4 p-4">
        <Card className='flex p-4 flex-col h-80 dark:bg-secondary_dark text-black dark:text-white w-screen'
        >
          <h1 style={{ textAlign: "center" }}>My Profile</h1>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="INI UDIN" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="UDIN@GMAIL.COM" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+62813-1678-3223" />
            </ListItemButton>
          </List>
        </Card>
    </div>
  )
}

export default Profile