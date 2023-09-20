'use client'
import { useState, useEffect, useContext } from 'react'
import { MenuContext } from "@/app/context/MenuContext"
import GridViewIcon from '@mui/icons-material/GridView';
import { 
    Typography,
    Button,
} from "@mui/material";
import { useTheme } from 'next-themes'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const { toggle } = useContext(MenuContext)
    // const [open, setOpen] = useState(false)
    // const openHendler = () => {
    //     setOpen(!open)
    // }
    
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
    
    
  return (
    <div className="bg-primary_blue flex justify-between gap-4 items-center px-4 py-4 mb-1 relative">
        <div className="left flex gap-4 text-white items-center">
            <Button onClick={toggle} className="toogle-btn rounded-full hover:bg-black hover:opacity-60">
                <GridViewIcon className='rounded-full text-white text-4xl'/>
            </Button>
            <LocalFireDepartmentIcon className='md:text-4xl'/>
            <Typography className='md:text-3xl'>
                Instruments and Management System
            </Typography>
        </div>
        <div className="flex right gap-4 mr-5 items-center">
            <Button>
                <NotificationsActiveOutlinedIcon className='rounded-full text-white text-4xl'/>
            </Button>
            <Button>
                <MailOutlineOutlinedIcon className='rounded-full text-white text-4xl'/>
            </Button>

                {theme === "dark" ? (
                    <Button className='rounded-full hover:bg-black hover:bg-opacity-60'>
                        <WbSunnyOutlinedIcon className='rounded-full text-white text-4xl' onClick={() => setTheme("light")}/>
                    </Button>
                ) : (
                    <Button className='rounded-full hover:bg-black hover:bg-opacity-60'>
                        <NightlightOutlinedIcon className='rounded-full text-white text-4xl' onClick={() => setTheme("dark")}/>
                    </Button>
                    )}
        </div>
    </div>
  )
}

export default Header