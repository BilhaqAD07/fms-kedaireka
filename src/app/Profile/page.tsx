'use client'

import BaseLayout from '@/components/baseLayout'
import React from 'react'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

function Profile() {
  return (
    <BaseLayout>
    <AiOutlineUser
      className=" absolute translate-x-80 ml-60 mt-5 left-20 items-center font-bold italic rounded rounded-md shadow  shadow-drop shadow-black "
      size={60}
      />
    <main className='absolute translate-x-80 mt-12'>
      <div className='absolute p-8 rounded-md shadow-xl shadow-drop shadow-black ml-20 duration-500 ' style={{ width: '400px' }}>
        <div className=' border-b-2 mb-5 text-xl italic text-center font-bold italic mt-5 rounded-md bg-gray '>
          User Profile
        </div>
        <ul className='flex space-x-2'>
        <FiUser
          className="rounded border border-gray-500"
          size={25}
          />
          <h1 className=' mb-3 rounded border border-gray-500'>User Name</h1>
        </ul>
        <ul className='flex space-x-2'>
        <AiOutlineMail
          className="rounded border border-gray-500"
          size={25}
          />
          <li className='mb-3 rounded border border-gray-500'>Email user</li>
        </ul>
        <ul className='flex space-x-2'>
        <AiOutlinePhone
          className="rounded border border-gray-500"
          size={25}
          />
          <li className='rounded border border-gray-500'>No Phone</li>
        </ul>
      </div>
    </main>
    </BaseLayout>
  )
}

export default Profile