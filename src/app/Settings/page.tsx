'use client'

import React, { useState } from 'react';
import BaseLayout from '@/components/baseLayout';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdDevices } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri';
import { BsKey, BsTelephoneFill } from 'react-icons/bs';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import { FaUserCog, } from 'react-icons/fa';

function Settings() {
  const [isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1 ] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2 ] = useState(false);

  const [isIconRotated, setIsIconRotated] = useState(false);
  const [isIconRotated1, setIsIconRotated1] = useState(false);
  const [isIconRotated2, setIsIconRotated2] = useState(false);

  const [isSoundEffectEnabled, setIsSoundEffectEnabled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

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

  const toggleSoundEffect = () => {
    setIsSoundEffectEnabled(!isSoundEffectEnabled);
    
    if (isSoundEffectEnabled) {
      console.log('Sound Effect Aktif');
    } else {
      console.log('Sound Effect Nonaktif');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };


  return (
    <main className=" md:my-auto md:mt-auto lg:mt-auto justify-center items-center min-h-screen min-y-screen ">
      <div className='absolute p-8 rounded-md shadow-xl shadow-drop shadow-black ml-2 duration-500 '>
        <div className=' text-2xl text-center font-bold italic rounded-md bg-gray '>
          Settings
        </div>
        <div className="flex items-center justify-between rounded-md shadow-inner mt-8 font-regular hover:bg-gray-500 ">
                <div className=" ml-1">
                  <HiMiniSpeakerWave
                    className="absolute top-15 left-1 hover:bg-gray-500 rounded shadow-gray-500 shadow-inner"
                    size={25}
                  />
                  Sound Effect
                </div>
                <div
                  onClick={toggleDropdown}
                  style={{ cursor: 'pointer' }}
                  className="flex items-center "
                >
                  <AiOutlineCaretDown className = { `${ isIconRotated ? `rotate-180` : ''} duration-500`} size={25} style={{ marginLeft: '5px' }} />
                </div>
              </div>
              {isDropdownOpen && (
                <div className=" rounded-md shadow-xl mt-5 hover:bg-gray-500 ">
                  <ul>
                  <div>
          <button className='flex ' onClick={toggleSoundEffect}>
            {isSoundEffectEnabled ? <BiToggleRight  size={35}  />  : <BiToggleLeft  size={35}/>}
            <p className='item-bottom mt-1'>{isSoundEffectEnabled ? 'On' : 'Off'}</p>
          </button>
        </div>
                  </ul>
                </div>
              )}
              
              <div className="flex items-center justify-between rounded-md shadow-inner mt-5 font-regular hover:bg-gray-500">
              <div className=" ml-1 ">
              <MdDevices
                    className="absolute top-15 left-1 hover:bg-gray-500 rounded shadow-gray-500 shadow-inner"
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
                    <li className='mb-1'>Device Pertama</li>
                    <li>Device Kedua</li>
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between rounded-md shadow-inner mt-5 font-regular hover:bg-gray-500 ">
              <div className=" ml-1">
              <RiProfileLine
                    className="absolute top-15 left-1 hover:bg-gray-500 rounded shadow-gray-500 shadow-inner"
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
                  <div className="mt-2 rounded-md shadow-xl ">
                      <ul>
                        <button className='flex rounded-md hover:bg-gray-500' onClick={openModal2}>
                        <BsKey
                          className=" left-8"
                          size={25}
                        />
                        <span className='ml-2'>
                          Reset Password
                        </span>
                        </button>
                      </ul>
                      {isModalOpen2 && (
                      <div className="absolute p-8 translate-x-40 top-20 rounded-md h-300 shadow-inner  bg-gray-300 text-black" style={{ width: '300px',  height:'200px'}}>
                        <h1 className='font-bold border-b-2 border-black mt-3 text-center'>Apakah kamu yakin ingin mengganti kata sandi ?</h1>
                        <div className="text-center ">
                                <ul className='flex'>
                                <button className=' ml-7 flex mt-10 rounded hover:bg-gray-500 ' onClick={closeModal2}>
                                  <h1 className='shadow shadow-black w-12 rounded'>
                                  No
                                  </h1>
                                  </button >
                                  <button className=' ml-20 flex mt-10 rounded hover:bg-gray-500 '>
                                    <h1 className='shadow shadow-black w-12 rounded'>
                                      Yes
                                    </h1>
                                  </button>
                                </ul>
                              </div>
                            </div>
                          )}
                      <ul>
                        <button className='flex rounded-md hover:bg-gray-500 mt-2'onClick={openModal}>
                          <FaUserCog
                            className=" left-8"
                            size={25}
                          />
                          <span className='ml-2'>
                            Change Username
                          </span>
                        </button>
                      </ul>
                      {isModalOpen && (
                      <div className="absolute p-8 translate-x-40 top-20 rounded-md h-300 shadow-inner  bg-gray-300 text-black" style={{ width: '300px',  height:'300px'}}>
                        <button className=" text-2xl hover:bg-gray-500 rounded-full shadow shadow-black w-8 mb-3 items-center" onClick={closeModal}>
                            &times;
                          </button>
                        <h1 className='font-bold border-b-2 border-black mt-3'>Enter a New UserName</h1>
                        <div className="text-center ">
                              <input className='flex mt-20 border-b-2 border-black outline-none bg-transparent text-black ' type="text" placeholder="new username" />
                                <button className=' flex mt-2 rounded hover:bg-gray-500 ' onClick={closeModal}>
                                  <h1 className='shadow shadow-black w-12 rounded'>
                                  Save
                                  </h1>
                                  </button>
                              </div>
                            </div>
                          )}
                        <ul>
                        <button className='flex rounded-md hover:bg-gray-500 mt-2'onClick={openModal1}>
                        <BsTelephoneFill
                          className=" left-8"
                          size={20}
                        />
                        <span className='ml-3'>
                          Change Phone Number
                        </span>
                        </button>
                        </ul>
                        {isModalOpen1 && (
                      <div className="absolute p-8 translate-x-40 top-20 rounded-md h-300 shadow-inner  bg-gray-300 text-black " style={{ width: '300px',  height:'300px'}}>
                        <button className=" text-2xl hover:bg-gray-500 rounded-full shadow shadow-black w-8 items-center " onClick={closeModal1}>
                            &times;
                          </button>
                        <h1 className='font-bold border-b-2 border-black mt-3'>Enter a New Phone Number</h1>
                        <div className="text-center ">
                              <input className='flex mt-20 border-b-2 border-black outline-none bg-transparent text-black ' type="text" placeholder="new Phone Number" />
                                <button className=' flex mt-2 rounded hover:bg-gray-500 ' onClick={closeModal1}>
                                  <h1 className='shadow shadow-black w-12 rounded'>
                                  Save
                                  </h1>
                                  </button>
                              </div>
                            </div>
                          )}
                        <ul>
                      </ul>
                </div>
              )}
      </div>
    </main>
  );
}

export default Settings;