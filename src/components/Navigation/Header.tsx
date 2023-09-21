import { useState, useEffect, useContext } from 'react';
import { MenuContext } from "@/app/context/MenuContext";
import GridViewIcon from '@mui/icons-material/GridView';
import { 
    Typography,
    Button,
} from "@mui/material";
import { useTheme } from 'next-themes';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationSelectBox from './NotificationSelectBox';

function Header() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const { toggle } = useContext(MenuContext);
    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            setIsMediumScreen(window.innerWidth <= 768);
        };

        // Set initial screen width
        setIsMediumScreen(window.innerWidth <= 768);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-primary_blue min-w-fit flex justify-between gap-4 items-center px-4 py-4 mb-1 relative">
            <div className="left flex gap-4 text-white items-center">
                <Button onClick={toggle} className="toogle-btn rounded-full hover:bg-black hover:opacity-60">
                    <GridViewIcon className='rounded-full text-white text-4xl'/>
                </Button>
                <LocalFireDepartmentIcon className='md:text-4xl text-xl'/>
                <Typography className='brand md:text-3xl text-lg'>
                    {isMediumScreen ? "FIMS" : "Instruments and Management System"}
                </Typography>
            </div>
            <div className="flex right gap-4 mr-5 items-center">
                <div className='rounded-full cursor-pointer py-1 px-4 hover:bg-black hover:bg-opacity-60'>
                    <NotificationSelectBox/>
                </div>
                <Button className='rounded-full hover:bg-black hover:bg-opacity-60'>
                    <MailOutlineOutlinedIcon className='rounded-full text-white text-4xl'/>
                </Button>

                {theme === "dark" ? (
                    <Button className='rounded-full bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60' onClick={() => setTheme("light")}>
                        <WbSunnyOutlinedIcon className='rounded-full text-white text-4xl'/>
                    </Button>
                ) : (
                    <Button className='rounded-full hover:bg-black hover:bg-opacity-60' onClick={() => setTheme("dark")}>
                        <NightlightOutlinedIcon className='text-white text-4xl'/>
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Header;
