
import React from 'react';

const Data = ({ data, fileName, fileType }) => {
  const handleDownload = () => {
    const blob = new Blob([data], { type: `application/${fileType}` });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}> {fileName}</button>
  );
};

export default Data;
