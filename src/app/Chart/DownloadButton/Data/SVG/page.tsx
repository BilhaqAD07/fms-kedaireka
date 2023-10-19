'use client'

import React from 'react';

const SVG = ({ svgData, filename }) => {
  const handleDownload = () => {
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const a = document.createElement('a');
    a.href = svgUrl;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(svgUrl);
  };

  return (
    <div>
      <button onClick={handleDownload}>export svg</button>
    </div>
  );
};

export default SVG;
