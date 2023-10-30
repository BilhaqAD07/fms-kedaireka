'use client'

import React from 'react';

const Layout = () => {
  return (
    <div className="bg-gray-300 p-4"> Layout Gedung ITERA
      <div className="relative w-64 h-64 mx-auto border-2 border-gray-500">
        <div className="w-1/3 h-1/3 absolute left-1/6 top-1/6 bg-blue-500"></div>
        <div className="ws-1/3 h-1/3 absolute left-1/2 top-1/6 bg-red-500"></div>
        <div className="w-1/3 h-1/3 absolute left-1/6 top-1/2 bg-green-500"></div>
        <div className="w-1/3 h-1/3 absolute left-1/2 top-1/2 bg-yellow-500"></div>
      </div>
    </div>
  );
};

export default Layout;
