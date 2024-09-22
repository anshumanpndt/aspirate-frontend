// src/components/Dashboard/Charts/AttendanceChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AttendanceChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'On-time',
        data: data.map(item => item.on_time),
        backgroundColor: '#34d399',
      },
      {
        label: 'Late',
        data: data.map(item => item.late),
        backgroundColor: '#fbbf24',
      },
      {
        label: 'Absent',
        data: data.map(item => item.absent),
        backgroundColor: '#f87171',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default AttendanceChart;
