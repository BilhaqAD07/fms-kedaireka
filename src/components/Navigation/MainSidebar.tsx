
import { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
import { Button, Typography } from '@mui/material'
import { MenuContext } from '@/app/context/MenuContext';


function MainSidebar() {
    const {open, toggle} = useContext(MenuContext)

    const closeSideBarHandler = () => {
        toggle()
    }

    return (
        <>
            <aside className={`bg-primary_blue top-4 left-4 lg:fixed lg:block lg:top-24 lg:left-4 rounded-lg overflow-hidden transition-all duration-200 ${
                open ? 'w-60 p-4 z-50 block fixed' : 'w-0 hidden'
            } lg:w-60 lg:min-h-[80vh] lg:p-4 max-lg:z-20 shadow-sm`}>
                <ul>
                    <div onClick={closeSideBarHandler} className="flex lg:hidden rounded-full p-1 mb-3 no-underline hover:bg-black hover:bg-opacity-50 hover:text-white">
                        <CloseIcon className="text-white text-2xl" />
                    </div>
                    <Link href="/" onClick={closeSideBarHandler} className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                        <HomeOutlinedIcon className="text-white text-3xl" />
                        <Typography className="text-white text-lg">Home</Typography>
                    </Link>
                    <Link href="/Chart" onClick={closeSideBarHandler} className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                        <LeaderboardOutlinedIcon className="text-white text-3xl" />
                        <Typography className="text-white text-lg" >Chart</Typography>
                    </Link>
                    <Link href="/Profile" onClick={closeSideBarHandler} className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                        <PersonOutlineOutlinedIcon className="text-white text-3xl" />
                        <Typography className="text-white text-lg">Profile</Typography>
                    </Link>
                    <Link href="/Settings" onClick={closeSideBarHandler} className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                        <SettingsOutlinedIcon className="text-white text-3xl" />
                        <Typography className="text-white text-lg">Settings</Typography>
                    </Link>
                    <Link href="/login" onClick={closeSideBarHandler} className="flex justify-start items-center shadow-inner shadow-black rounded-full mb-3 no-underline hover:bg-black hover:bg-opacity-50 p-3 hover:text-white gap-4">
                        <Logout className="text-white text-3xl" />
                        <Typography className="text-white text-lg" >Logout</Typography>
                    </Link>
                </ul>
            </aside>
        </>
    )
}

export default MainSidebar