// pages/index.js

import React from 'react';
import Data from './Data/page';
import SVG from './Data/SVG/page';
const DownloadButton = () => {
  const csvData = 'data1,data2,data3\nvalue1,value2,value3';

  const svgData = `<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>`;
  const filename = 'my_svg_file.svg';

  return (
    <main>
      <div>
        <Data data={csvData} fileName="csv" fileType="csv" />
      </div>
      <div className='mt-2'>
        <SVG svgData={svgData} filename={filename} />
      </div>
    </main>
  );
};

export default DownloadButton;
