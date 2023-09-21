'use client'
import Link from "next/link";
import { useState, useContext } from 'react';
import { 
    Typography,
    Button,
} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logout from "@mui/icons-material/Logout";
import GridViewIcon from '@mui/icons-material/GridView';
import { SidebarContext } from "./SidebarContext";

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
    const {isCollapsedSidebar, toogleSidebarCollapseHandler} = useContext(SidebarContext);

    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    };
    
    return (
        <div className="sidebar_wrapper relative">
            <aside className="sidebar w-72 h-full bg-primary_blue p-4" data-collapse={isCollapsedSidebar}>
                <div className="sidebar_top w-full flex items-center pb-4 mb-4 border-b-2 border-solid border-gray-400">
                <Button onClick={toogleSidebarCollapseHandler} className="btn text-white rounded-full mr-1">
                    <GridViewIcon className="text-3xl -ml-2"></GridViewIcon>
                </Button>
                    <Typography className="sidebar_logo-name text-white text-lg font-semibold">
                        FMS KEDAIREKA
                    </Typography>
                </div>
                <ul className="sidebar_list list-none">
                    {sidebarItems.map(({name, href, icon: Icon}) => (
                        <li className="sidebar_item" key={name}>
                        <Link href={href} passHref>
                          <div className={`sidebar_link flex text-white py-3 px-3 mb-4 rounded-full shadow-inner shadow-black no-underline hover:bg-black hover:bg-opacity-50`}>
                              <div className="sidebar_icon inline-block text-lg">
                                <Icon className="text-3xl" />
                              </div>
                              <Typography>
                                <span className="sidebar_name inline-block ml-2 text-lg text-white">{name}</span>
                              </Typography>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar;