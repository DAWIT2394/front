import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TotalLoadChart = ({ loadData }) => {
  // Sample data format for total loads
  const data = {
    labels: ['Daily', 'Weekly', 'Monthly', 'Yearly'], // X-axis labels
    datasets: [
      {
        label: 'Total Loads',
        data: [loadData.daily, loadData.weekly, loadData.monthly, loadData.yearly], // Y-axis data
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1, // Curve of the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Loads Overview',
      },
    },
  };

  return (
    <div className="w-full md:w-1/2 mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalLoadChart;
