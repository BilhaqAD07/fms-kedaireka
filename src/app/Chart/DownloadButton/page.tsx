// pages/index.js

import React from 'react';
import Data from './Data/page';

const DownloadButton = () => {
  const csvData = 'data1,data2,data3\nvalue1,value2,value3';

  return (
    <div>
      <Data data={csvData} fileName="csv" fileType="csv" />

    </div>
  );
};

export default DownloadButton;
