import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import './Chartii.scss'; 

ChartJS.register(...registerables);

const Chartii = () => {
  console.log("Rendering Chartii component");

  const generateRandomData = () => Array.from({ length: 24 }, () => Math.floor(Math.random() * 5000) + 2000);

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'white', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const loadProfileData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Load Profile Forecasting',
        data: generateRandomData(),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const netLoadData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Net Load Forecasting',
        data: generateRandomData(),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const peakLoadData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Peak Load Forecasting',
        data: generateRandomData(),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="heading">Forecasting Plots</h1>

      <div className="chart-container">
        <h3 className="chart-title">Load Profile Forecasting</h3>
        <Line data={loadProfileData} options={commonOptions} />
      </div>

      <div className="chart-container">
        <h3 className="chart-title">Net Load Forecasting</h3>
        <Line data={netLoadData} options={commonOptions} />
      </div>

      <div className="chart-container">
        <h3 className="chart-title">Peak Load Forecasting</h3>
        <Line data={peakLoadData} options={commonOptions} />
      </div>
    </div>
  );
};

export default Chartii;
