'use client'

import React, { useState } from 'react';
import BaseLayout from '@/components/baseLayout';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdDevices } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri';
import { BsKey, BsTelephoneFill } from 'react-icons/bs';

import { FaUserCog, } from 'react-icons/fa';
import { PiDevicesDuotone, } from 'react-icons/pi';

function Settings() {
  const [isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1 ] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2 ] = useState(false);

  const [isIconRotated, setIsIconRotated] = useState(false);
  const [isIconRotated1, setIsIconRotated1] = useState(false);
  const [isIconRotated2, setIsIconRotated2] = useState(false);

  const [isResetPasswordPopupOpen, setIsResetPasswordPopupOpen] = useState(false);
  const [isResetUsernamePopupOpen, setIsResetUsernamePopupOpen] = useState(false);
  const [isResetNumberPopupOpen, setIsResetNumberPopupOpen] = useState(false);

  const [isToggleOn, setIsToggleOn] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIconRotated(!isIconRotated);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsIconRotated1(!isIconRotated1);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsIconRotated2(!isIconRotated2);
  };

  return (
    <BaseLayout>
      <main className=" flex justify-center mt-12 items-center min-h-full rounded-lg mx-4 p-4 ">
        <div className='flex p-10 flex-col w-80 bg-gray-200 dark:bg-secondary_dark text-black dark:text-white rounded-md shadow-xl shadow-drop shadow-black duration-500 '>
          <div className=' text-3xl text-center font-bold italic rounded-md bg-gray '>
            Settings
          </div>
          <div className="flex justify-between rounded-md shadow-inner mt-8 font-regular hover:bg-gray-500 ">
                  <div className=" ml-1 flex">
                    <HiMiniSpeakerWave
                      className="flex flex-col  hover:bg-gray-500 rounded shadow-gray-500 shadow-inner mr-2"
                      size={25}
                    />
                    Sound Effect
                  </div>
                  <div
                    onClick={toggleDropdown}
                    style={{ cursor: 'pointer' }}
                    className="flex flex-col "
                  >
                    <AiOutlineCaretDown className = { `${ isIconRotated ? `rotate-180` : ''} duration-500`} size={25} style={{ marginLeft: '5px' }} />
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className=" rounded-md rounded shadow-xl mt-5 " >
                    <ul>
                    <div className='flex flex-row items-center'>
                    <Switch
                      className='rounded text-black dark:text-white'
                      checked={isToggleOn}
                      onChange={() => setIsToggleOn(!isToggleOn)}
                      color="primary"
                    />
                    <span className=''>{isToggleOn ? 'On' : 'Off'}</span>
                  </div>
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between rounded-md shadow-inner mt-8 font-regular hover:bg-gray-500">
                <div className=" ml-1 flex ">
                <MdDevices
                      className="flex flex-col  hover:bg-gray-500 rounded shadow-gray-500 shadow-inner mr-2"
                      size={25}
                    />
                    Devices
                    </div>
                    <div
                    onClick={toggleDropdown1}
                    style={{ cursor: 'pointer'}}
                    className="flex items-center"
                  >
                    <AiOutlineCaretDown className = { `${ isIconRotated1 ? `rotate-180` : ''} duration-500`} size={25} style={{ marginLeft: '5px' }} />
                    </div>
                  </div>
                  {isDropdownOpen1 && (
                  <div className="rounded-md shadow-xl mt-2">
                    <ul>
                      <Button className='flex rounded-md hover:bg-blue-300 dark:hover:bg-blue-700 mt-2 mt-2 text-black dark:text-white'>
                      <PiDevicesDuotone
                            className=" left-8"
                            size={25}
                          />
                        <span className='ml-2'>Device Pertama </span>
                      </Button>
                      <Button className='flex rounded-md hover:bg-blue-300 dark:hover:bg-blue-700 mt-2 mt-2 text-black dark:text-white'>
                      <PiDevicesDuotone
                            className=" left-8"
                            size={25}
                          />
                        <span className='ml-2'>Device Kedua</span>
                      </Button>
                    </ul>
                  </div>
                )}

                <div className="flex justify-between rounded-md shadow-inner mt-8 font-regular hover:bg-gray-500">
                <div className=" ml-1 flex">
                <RiProfileLine
                      className="flex flex-col  hover:bg-gray-500 rounded shadow-gray-500 shadow-inner mr-2"
                      size={25}
                    />
                    Profile
                    </div>
                    <div
                    onClick={toggleDropdown2}
                    style={{ cursor: 'pointer'  }}
                    className="flex items-center"
                  >
                    <AiOutlineCaretDown className = { `${ isIconRotated2 ? `rotate-180 `  : '' } duration-500 ` } size={25} style={{ marginLeft: '5px' }} />
                    </div>
                  </div>
                  {isDropdownOpen2 && (
                  <div className="rounded-md shadow-xl mt-2">
                    <ul>
                    {isResetPasswordPopupOpen && (
                    <div className="fixed inset-0 flex flex-col min-h-full items-center justify-center">
                        <div className=" bg-gray-200 dark:bg-secondary_dark text-black dark:text-white p-4 rounded-lg shadow-md shadow shadow-block shadow-black">
                          <p className='mb-5'>Apakah Anda yakin ingin mengganti sandi ?</p>
                          <Button
                            className="bg-red-400 dark:bg-red-900 px-4 py-2 rounded-md ml-12 hover:bg-red-600 dark:hover:bg-red-600 mt-4 text-black dark:text-white"
                            onClick={() => setIsResetPasswordPopupOpen(false)}
                          >
                            Tidak
                          </Button>
                          <Button
                            className="bg-blue-400 dark:bg-blue-900 px-4 py-2 rounded-md ml-20 hover:bg-blue-700 dark:hover:bg-blue-700 mt-4 text-black dark:text-white"
                            onClick={() => setIsResetPasswordPopupOpen(false)}
                          >
                            Iya
                          </Button>
                        </div>
                      </div>
                    )}
                      <Button className='flex rounded-md hover:bg-blue-300 dark:hover:bg-blue-700 mt-2 text-black dark:text-white' onClick={() => setIsResetPasswordPopupOpen(true)}>
                          <BsKey
                            className=" left-8"
                            size={25}
                          />
                          <span className='ml-2'>
                            Reset Password
                          </span>
                      </Button>
                      {isResetUsernamePopupOpen && (
                    <div className="fixed inset-0 flex flex-col items-center justify-center ">
                        <div className=" bg-gray-200 dark:bg-secondary_dark text-black dark:text-white p-4 rounded-lg shadow-md shadow shadow-block shadow-black">
                          <p className='mb-5'>Change Username</p>
                          <input className='flex mt-20 border-b-2 border-black dark:border-white outline-none bg-transparent dark:text-white ' type="text" placeholder="new username" />
                          <Button
                            className="bg-red-400 dark:bg-red-900 px-4 py-2 rounded-md  hover:bg-red-600 dark:hover:bg-red-600 mt-4 text-black dark:text-white"
                            onClick={() => setIsResetUsernamePopupOpen(false)}
                          >
                            Batal
                          </Button>
                          <Button
                            className="bg-blue-400 dark:bg-blue-900 px-4 py-2 rounded-md ml-20 hover:bg-blue-600 dark:hover:bg-blue-600 mt-4 text-black dark:text-white"
                            onClick={() => setIsResetUsernamePopupOpen(false)}
                          >
                            Simpan
                          </Button>
                        </div>
                      </div>
                    )}
                      <Button className='flex rounded-md hover:bg-blue-300 dark:hover:bg-blue-700 mt-3 text-black dark:text-white' onClick={() => setIsResetUsernamePopupOpen(true)}>
                      <FaUserCog
                              className=" left-8"
                              size={25}
                            />
                            <span className='ml-2'>
                              Change Username
                            </span> 
                      </Button>
                      {isResetNumberPopupOpen && (
                    <div className="fixed inset-0 flex flex-col items-center justify-center  ">
                        <div className=" bg-gray-200 dark:bg-secondary_dark text-black dark:text-white p-4 rounded-lg shadow-md shadow shadow-block shadow-black">
                          <p className='mb-5'>Change Number Phone </p>
                          <input className='flex mt-20 border-b-2 border-black dark:border-white outline-none bg-transparent dark:text-white ' type="text" placeholder="new number phone" />
                          <Button
                            className="bg-red-400 dark:bg-red-900 px-4 py-2 rounded-md hover:bg-red-600 dark:hover:bg-red-600 mt-4 text-black dark:text-white"
                            onClick={() => setIsResetNumberPopupOpen(false)}
                          >
                            Batal
                          </Button>
                          <Button
                            className="bg-blue-400 dark:bg-blue-900 px-4 py-2 rounded-md ml-20 hover:bg-blue-700 dark:hover:bg-blue-700 mt-4 text-black dark:text-white"
                            onClick={() => setIsResetNumberPopupOpen(false)}
                          >
                            Simpan
                          </Button>
                        </div>
                      </div>
                    )}
                      <Button className='flex rounded-md shadow-xl hover:bg-blue-300 dark:hover:bg-blue-700 mt-3 text-black dark:text-white'onClick={() => setIsResetNumberPopupOpen(true)}>
                          <BsTelephoneFill
                            className=" left-8"
                            size={20}
                          />
                          <span className='ml-3 flex'>
                            Change Phone Number
                          </span>
                          </Button>
                    </ul>
                  </div>
                )}
        </div>
      </main>
    </BaseLayout>
  );
}

export default Settings;