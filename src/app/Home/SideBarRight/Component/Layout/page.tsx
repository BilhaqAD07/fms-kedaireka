'use client'
import React, { useState } from 'react';
import { Button, } from '@mui/material';
import Download from './Download/page';

const Layout = () => {
  const [isImporting, setIsImporting] = useState(false);

  // Fungsi untuk menangani tindakan impor
  const handleImport = () => {
    const [isDHT11, setIsDHT11] = useState(false);
    // Implementasi impor data/layout di sini 
    // Misalnya, tampilkan di
  };

  // Fungsi untuk menangani tindakan unduh
  const handleDownload = () => {
    // Implementasi unduh gambar/layout di sini
    // Misalnya, menyimpan gambar/layout dalam bentuk file untuk diunduh.
  };

  return (
    <div className="bg-gray-300 p-4">
      Layout Gedung ITERA
      <div className="relative w-64 h-64 mx-auto border-2 border-gray-500">
      <Button className="bg-blue-500 text-white p-2 m-2 rounded-md" onClick={handleImport}>
          Import
        </Button>
        <div>
        <div className="w-1/3 h-1/3 absolute left-1/6 top-1/6 bg-blue-500"></div>
        <div className="w-1/3 h-1/3 absolute left-1/2 top-1/6 bg-red-500"></div>
        <div className="w-1/3 h-1/3 absolute left-1/6 top-1/2 bg-green-500"></div>
        <div className="w-1/3 h-1/3 absolute left-1/2 top-1/2 bg-yellow-500"></div>
      </div>
      </div>
      <Button className="bg-green-500 text-white p-2 m-2 rounded-md" onClick={handleDownload}>
          <Download/>
        </Button>
    </div>
  );
};

export default Layout;
