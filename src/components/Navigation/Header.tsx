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
import Sun from '../svg/Sun.svg';
import Moon from '../svg/Moon.svg';

function Header() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const { toggle } = useContext(MenuContext);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            setIsMediumScreen(window.innerWidth <= 768);
            setIsSmallScreen(window.innerWidth <= 300); // Perubahan untuk mengecek lebar <= 300
        };
        
        // Set initial screen width
        setIsMediumScreen(window.innerWidth <= 768);
        setIsSmallScreen(window.innerWidth <= 300); // Inisialisasi isSmallScreen

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

    const toggleTheme = () => {
        // Menggunakan setTheme dari next-themes untuk mengubah tema
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className=" bg-primary_blue min-w-fit flex justify-between gap-1 md:gap-4 items-center px-1 md:px-4 py-4 mb-1 relative">
            <div className="left flex text-white items-center">
                <Button onClick={toggle} className="toogle-btn rounded-full hover:bg-black hover:opacity-60">
                    <GridViewIcon className='rounded-full text-white md:text-4xl'/>
                </Button>
                <div className={`logo-brand flex items-center gap-1 ${isSmallScreen ? 'hidden' : ''}`}>
                    <LocalFireDepartmentIcon className='md:text-4xl text-xl'/>
                    <Typography className='brand md:text-3xl text-lg'>
                        {isMediumScreen ? "FIMS" : "Instruments and Management System"}
                    </Typography>
                </div>
            </div>
            <div className="flex right gap-1 md:gap-4 md:mr-5 sm:mr-1 items-center">
                <div className='rounded-full cursor-pointer py-1 px-1 md:px-4 hover:bg-black hover:bg-opacity-60'>
                    <NotificationSelectBox/>
                </div>
                <Button className='rounded-full hover:bg-black hover:bg-opacity-60'>
                    <MailOutlineOutlinedIcon className='rounded-full text-white md:text-4xl'/>
                </Button>

                <div className='flex justify-center dark_mode w-fit'>
                    <input
                        className='dark_mode_input'
                        type='checkbox'
                        id='darkmode-toggle'
                        checked={theme === 'dark'} // Gunakan theme untuk menguji tema saat ini
                        onChange={toggleTheme} // Menggunakan toggleTheme untuk mengganti tema
                    />
                    <label className='dark_mode_label relative block w-16 h-7' htmlFor='darkmode-toggle'>
                        <Sun className="fill-black absolute left-1 transition-all w-5 top-[5px] z-50"/>
                        <Moon className="fill-white absolute right-1 transition-all w-5 top-[5px] z-50"/>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Header;
