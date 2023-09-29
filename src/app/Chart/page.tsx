'use client'

import BaseLayout from '@/components/baseLayout'
import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Popover from '@mui/material/Popover';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function Chart() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [selectedUser, setSelectedUser] = useState('User 1');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleClick = (event) => {
    setIsIconRotated(!isIconRotated);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsIconRotated(!isIconRotated);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user); 
    handleClose();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;

  return (
    <BaseLayout>
    <main>
      <div className="bg-gray-200 dark:bg-secondary_dark text-black dark:text-white rounded-lg p-4">
          <ul className='flex'>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white border-black dark:border-white'
                    variant="outlined"
                    onClick={handleClick}
                    aria-describedby={id}>
              {selectedUser}
              <AiOutlineCaretDown
              className={` ${isIconRotated ?`rotate-180` :''} ml-1 duration-200 `}
              size={20}/>
            </Button>
            <ul className='flex ml-2 '>
            <Button className='hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white border-black dark:border-white'>
              <div className='flex border-black dark:border-white'>
                <DatePicker
                  className='outline-none bg-transparent bg-gray-200 dark:bg-secondary_dark text-black dark:text-white'
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                />
                <TimePicker
                  className='outline-none bg-transparent bg-gray-200 dark:bg-secondary_dark text-black dark:text-white'
                  value={selectedTime}
                  onChange={handleTimeChange}
                  disableClock={true}
                  style={{ border: 'none' }}
                />
              </div>
            </Button>
            </ul>
          </ul>
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
    </main>
    </BaseLayout>
  )
}

export default Chart