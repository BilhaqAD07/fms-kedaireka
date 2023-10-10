'use client'

import React from 'react';
import { useState } from 'react';
import { Button, Drawer, Popover } from '@mui/material';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';

import Design from './Component/Design/page';
import Devices from './Component/Devices/page';

const SideBarRight = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState('Mode');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (event) => {
    setIsIconRotated(!isIconRotated);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsIconRotated(!isIconRotated);
  };

  const handleSettingClick = (Mode) => {
    setSelectedSetting(Mode);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;

  const renderContent = () => {
    if (selectedSetting === 'Design') {
      return <Design />;
    } else if (selectedSetting === 'Devices') {
      return <Devices />;
    } else {
      return null;
    }
  };

  return (
    <main>
      <div className="flex justify-end text-black dark:text-white transition transform duration-300 ease-in-out hover:scale-110">
      <Button className='rounded text-primary_blue dark:text-gray-400 hover:bg-primary_blue  hover:text-white dark:hover:text-[#213140] focus:outline-none focus:bg-primary_blue dark:focus:bg-black focus:text-white dark:focus:text-[#213140] transition duration-50 ease-in-out' onClick={toggleSidebar}>
        <BsFillArrowLeftSquareFill size={30} />
      </Button>
        <Drawer anchor="right" open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
          <div className="flex  py-4 px-0 bg-gray-300 dark:bg-secondary_dark">
            <div className="flex">
              <Button className='text-red-500 dark:text-red-800 transition transform duration-400 ease-in-out hover:scale-110' onClick={() => setIsSidebarOpen(false)}>
                <BsFillArrowRightSquareFill size={30} /> 
              </Button>
            </div>
            <div className=" mr-4">
              <Button
                className="flex  hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white bg-white dark:bg-zinc-800 hover:bg-primary-dark font-bold py-2 px-4 rounded-full transition transform duration-300 ease-in-out hover:scale-110 shadow shadow-stone-900 dark:shadow-stone-500"
                onClick={handleClick}
                aria-describedby={id}
              >
                {selectedSetting}
                <AiOutlineCaretDown
                  className={` ${isIconRotated ? 'rotate-180' : ''} ml-1 duration-200 `}
                  size={20}
                />
              </Button>
            </div>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            className="mt-2 ml-1"
          >
            <div className="flex flex-col bg-gray-200 dark:bg-secondary_dark text-black dark:text-white" style={{ padding: '16px' }}>
              <Button className="hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white" onClick={() => handleSettingClick('Design')}>
                Design
              </Button>
              <Button className="hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white" onClick={() => handleSettingClick('Devices')}>
                Devices
              </Button>
            </div>
          </Popover>
          {renderContent()} 
        </Drawer>
      </div>
    </main>
  );
};

export default SideBarRight;
