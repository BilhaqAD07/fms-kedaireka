'use client'

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'; 
import{
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement, 
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
);

const Diagram = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
      datasets: [
        {
          label: 'Energi Listrik Digunakan (Watt)',
          data: [117, 121, 190, 138, 182, 142, 175],
          borderColor: '#0112A4', 
          fill: false, 
          pointBorderColor: "#0112A4",
          pointBorderWidth: 5,
        },
        {
          label: 'Suhu yang di hasilkan',
          data: [125, 135, 145, 129, 134, 125, 140],
          borderColor: '#23FD00',
          fill: false,
          pointBorderColor: '#23fd00',
          pointBorderWidth: 5,
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Diagram Penggunaan Energi Listrik'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-secondary_dark'>
        <Line data={chartData} options={chartOptions} /> 
      </div>
    </>
  );
};

export default Diagram;
