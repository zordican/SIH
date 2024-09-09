import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Chartii = () => {
  console.log("Rendering Chartii component");
  const generateRandomData = () => Array.from({ length: 24 }, () => Math.floor(Math.random() * 5000) + 2000);
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
    <div style={{ padding: '20px' }}>
      <h1>Forecasting Plots</h1>
      
      {}
      <div style={{ marginBottom: '50px' }}>
        <h3>Load Profile Forecasting</h3>
        <Line data={loadProfileData} height={100} width={400} />
      </div>

      {}
      <div style={{ marginBottom: '50px' }}>
        <h3>Net Load Forecasting</h3>
        <Line data={netLoadData} height={100} width={400} />
      </div>

      {}
      <div style={{ marginBottom: '50px' }}>
        <h3>Peak Load Forecasting</h3>
        <Line data={peakLoadData} height={100} width={400} />
      </div>
    </div>
  );
};

export default Chartii;
