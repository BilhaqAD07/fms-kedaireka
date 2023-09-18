'use client'
import Image from "next/image";
import Link from "next/link";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState} from 'react';
import { 
    Typography,
    Button,
    toggleButtonClasses,
} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logout from "@mui/icons-material/Logout";
import GridViewIcon from '@mui/icons-material/GridView';

const sidebarItems = [
    {
        name: "Home",
        href: "/Home",
        icon: HomeOutlinedIcon,
    },
    {
        name: "Chart",
        href: "/Chart",
        icon: LeaderboardOutlinedIcon,
    },
    {
        name: "Profile",
        href: "/Profile",
        icon: PersonOutlineOutlinedIcon,
    },
    {
        name: "Settings",
        href: "/Settings",
        icon: SettingsOutlinedIcon,
    },
    {
        name: "Logout",
        href: '/login',
        icon: Logout,
    },
];

const Sidebar = () => {
    const [isCollapsedSidebar, setIsSidebarCollapse] = useState<boolean>(false);
    
    const toogleSidebarCollapseHandler = () => {
        setIsSidebarCollapse((prev) => !prev);
    }

    return (
        <div className="sidebar_wrapper relative">
            <Button onClick={toogleSidebarCollapseHandler} className="btn absolute right-0 top-20 bg-white w-6 h-6 border border-solid border-black rounded-full flex justify-center items-center translate-x-14 text-lg">
                <GridViewIcon></GridViewIcon>
            </Button>
            <aside className="sidebar w-72 h-full bg-primary_blue p-4" data-collapse={isCollapsedSidebar}>
                <div className="sidebar_top w-fit flex items-center gap-1 pb-4 mb-4 border-b-2 border-solid border-gray-400">
                    <Image 
                        src={"/Flame.svg"}
                        width={80}
                        height={80}
                        className="sidebar_logo w-14 h-14 object-cover rounded-2xl"
                        alt="logo"
                    />
                    <Typography className="sidebar_logo-name text-white text-lg font-semibold">
                        Field Instruments Management System
                    </Typography>
                </div>
                <ul className="sidebar_list list-none">
                    {sidebarItems.map(({name, href, icon: Icon}) => (
                        <li className="sidebar_item" key={name}>
                        <Link href={href} className="sidebar_link flex text-lg text-black bg-white py-4 px-4 mb-4 rounded-xl no-underline hover:bg-purple-300">
                            <div className="sidebar_icon inline-block text-lg">
                                <Icon />
                            </div>
                            <Typography>
                                <span className="sidebar_name inline-block ml-2">{name}</span>
                            </Typography>
                        </Link>
                    </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar;