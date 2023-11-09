'use client'

import React from 'react';
// components/PDFViewer.js
import { useState } from 'react';
import Layout from '../page';

const Download = () => {
  const [pdfUrl, setPdfUrl] = useState('/src/app/Home/SidebarRight/Component/Layout/page.pdf');

  const handleDownload = () => {
    // Logika untuk men-download PDF
    // Anda dapat menggunakan library atau API seperti jsPDF atau FileSaver.js
    // Contoh menggunakan FileSaver.js:
    const FileSaver = require('file-saver');
    FileSaver.saveAs(pdfUrl, 'downloaded.pdf');
  };

  return (
    <div>
      <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
      <button onClick={handleDownload} className="bg-blue-500 text-white p-2 mt-4">
        Download PDF
      </button>
    </div>
  );
};

export default Download;
