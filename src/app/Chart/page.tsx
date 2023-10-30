'use client'

import BaseLayout from '@/components/baseLayout'
import React from 'react'
import { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import {Button, FilledTextFieldProps, OutlinedTextFieldProps, Popover, StandardTextFieldProps, TextField, TextFieldVariants,} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/system";

import Diagram from './Diagram/page';

function Chart() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [isIconRotated1, setIsIconRotated1] = useState(false);

  const [selectedUser, setSelectedUser] = useState('User');
  
  const [selectedDateTimestart, setSelectedDateTimestart] = useState(new Date());
  const [selectedDateTimeend, setSelectedDateTimeend] = useState(new Date());

  const handleClick = (event) => {
    setIsIconRotated(!isIconRotated);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsIconRotated(!isIconRotated);
  };

  const handleClick1 = (event) => {
    setIsIconRotated1(!isIconRotated1);
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
    setIsIconRotated1(!isIconRotated1);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user); 
    handleClose();
  };


  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;

  const open1 = Boolean(anchorEl1);
  const id1 = open ? 'user-popover' : undefined;

  const handleDateTimeChangestart = (newDateTime) => {
    setSelectedDateTimestart(newDateTime);
  };

  const handleDateTimeChangeend = (newDateTime) => {
    setSelectedDateTimeend(newDateTime);
  };



  return (
    <BaseLayout>
    <main className=" flex flex-col bg-gray-200 dark:bg-secondary_dark text-black dark:text-white rounded-lg p-4 ">
      <ul className='flex flex-wrap ml-6'>
      <Button className='mr-2 hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white border-black dark:border-white'
              variant="outlined"
              onClick={handleClick}
              aria-describedby={id}>
              {selectedUser}
              <AiOutlineCaretDown
              className={` ${isIconRotated ?`rotate-180` :''} ml-1 duration-200 `}
              size={20}/>
            </Button>
            <ul className='flex flex-wrap mr-1 bg-gray-200 dark:bg-secondary_dark text-black dark:text-white '>
              <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white '>
                <div className='flex flex-wrap rounded items items-center'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white '>
                <DateTimePicker
                  label="Start"
                  value={selectedDateTimestart}
                  onChange={handleDateTimeChangestart}
                  renderInput={(params) => <TextField {...params} />}
                  className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white'
                />
                </div>
              </LocalizationProvider>
                </div>
              </Button>
              <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white'>
                <div className='flex flex-wrap  rounded items items-center'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div>
                <DateTimePicker
                  label="end"
                  value={selectedDateTimeend}
                  onChange={handleDateTimeChangeend}
                  renderInput={(params: React.JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined; } & Omit<OutlinedTextFieldProps | FilledTextFieldProps | StandardTextFieldProps, "variant">) => <TextField {...params} />}
                  className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white'
                />
                </div>
              </LocalizationProvider>
                </div>
              </Button>
            </ul>
            <Button className='flex flex-wrap ml-2 hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white border-black dark:border-white'
              variant="outlined">
              Search
            </Button>
            <Button className='flex flex-wrap ml-4 hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white border-black dark:border-white'
              variant="outlined"
              onClick={handleClick1}
              aria-describedby={id}>
              Export
              <AiOutlineCaretDown
              className={` ${isIconRotated1 ?`rotate-180` :''} ml-1 duration-200 `}
              size={20}/>
            </Button>
      </ul>
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
          className='mt-2 ml-1'
        >
          <div className='flex flex-col bg-gray-200 dark:bg-secondary_dark text-black dark:text-white' 
          style={{ padding: '16px' }}>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white' 
            onClick={() => handleUserClick('User Baru')}>
              User Baru
            </Button>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white' 
            onClick={() => handleUserClick('User Lama')}>
              User Lama
            </Button>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white' 
            onClick={() => handleUserClick('User Sepuh')}>
              User Sepuh
            </Button>
          </div>
        </Popover>
        <Popover
          id={id1}
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          className='mt-2 ml-1'
        >
          <div className='flex flex-col bg-gray-200 dark:bg-secondary_dark text-black dark:text-white' 
          style={{ padding: '16px' }}>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white' 
            >
              csv
            </Button>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white' 
            >
              txt
            </Button>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white' 
          >
              xlsx
            </Button>
          </div>
        </Popover>
        <Diagram/>
    </main>
    </BaseLayout>
  )
}

export default Chart
