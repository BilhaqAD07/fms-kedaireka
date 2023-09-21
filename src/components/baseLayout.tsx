// "use client"

import { ReactNode, useContext, useState } from "react";
import Header from "./Navigation/Header";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from '@mui/material'
import { MenuContext } from "@/app/context/MenuContext";
import { ClassNames } from "@emotion/react";

interface Props {
    children: ReactNode | ReactNode[];
}

const BaseLayout = ({children} : Props) => {
    const {open} = useContext(MenuContext)
    // const [isOpen, setIsOpen] = useState(false)

    // console.log(isOpen)

    
    // const { open } = useContext(MenuContext);
    return (
        <div className="dark:bg-darkmode_grey w-screen min-h-screen">
            {/* <div className={`flex justify-between`}>
                <button onClick={()=> setIsOpen(!isOpen)}><p>buka</p></button>
                
            </div> */}
            <Header/>
            <div className="flex justify-start items-start">
                {/* <aside className="bg-primary_blue rounded-lg w-60 p-4 h-[86vh]"> */}
                <aside className={`sidebar bg-primary_blue rounded-lg  overflow-hidden transition-all duration-200 ${open ? 'w-100 p-4 h-[86vh]' : 'w-14 pt-2 mx-2'}`}>
                    <ul>
                        <Link href="/" className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                            <HomeOutlinedIcon className="text-white text-3xl"/>
                            <Typography className="text-white text-lg">Home</Typography>
                        </Link>
                        <Link href="/Chart" className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                            <LeaderboardOutlinedIcon className="text-white text-3xl"/>
                            <Typography className="text-white text-lg" >Chart</Typography>
                        </Link>
                        <Link href="/Profile" className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                            <PersonOutlineOutlinedIcon className="text-white text-3xl"/>
                            <Typography className="text-white text-lg">Profile</Typography>
                        </Link>
                        <Link href="/Settings" className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                            <SettingsOutlinedIcon className="text-white text-3xl"/>
                            <Typography className="text-white text-lg">Settings</Typography>
                        </Link>
                        <Link href="/login" className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                            <Logout className="text-white text-3xl"/>
                            <Typography className="text-white text-lg" >Logout</Typography>
                        </Link>
                    </ul>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
};

export default BaseLayout;