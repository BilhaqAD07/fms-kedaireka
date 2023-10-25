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
      labels:['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
      datasets: [
        {
          label: "Gedung A",
          data: [32, 82, 51, 60, 11, 65, 88],
          backgroundColor: "#2196F3",
          borderColor: "#2196F3",
        },
        {
          label: "Gedung B",
          data: [37, 52, 41, 37, 61, 44, 77],
          backgroundColor: "#F44236",
          borderColor: "#F44236",
        },
        {
          label: "Gedung C",
          data: [60, 30, 54, 28, 47, 49, 90],
          backgroundColor: "#FFCA29",
          borderColor: "#FFCA29",
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
        <Line data={chartData} options={chartOptions}/> 
      </div>
    </>
  );
};

export default Diagram;
