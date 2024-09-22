// src/components/Dashboard/Charts/EnrollmentChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EnrollmentChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => new Date(item.ds).toLocaleDateString()),
    datasets: [
      {
        label: 'Predicted Enrollments',
        data: data.map(item => item.yhat),
        fill: false,
        backgroundColor: '#4f46e5',
        borderColor: '#4f46e5',
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

  return <Line data={chartData} options={options} />;
};

export default EnrollmentChart;
