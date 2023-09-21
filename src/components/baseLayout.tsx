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
import MainSidebar from "./Navigation/MainSidebar";

interface Props {
    children: ReactNode | ReactNode[];
}

const BaseLayout = ({children} : Props) => {
    const {open} = useContext(MenuContext)
    // const [isOpen, setIsOpen] = useState(false)

    // console.log(isOpen)

    
    // const { open } = useContext(MenuContext);
    return (
        <div className="dark:bg-darkmode_grey min-h-screen">
            {/* <div className={`flex justify-between`}>
                <button onClick={()=> setIsOpen(!isOpen)}><p>buka</p></button>
                
            </div> */}
            
            <Header/>
            <div className="justify-start flex items-start">
                <MainSidebar/>
                <main className="">{children}</main>
            </div>
        </div>
    )
};

export default BaseLayout;