import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartOptions
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface MiniChartProps {
  data: number[];
  percentChange: number;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, percentChange }) => {
  const isPositive = percentChange >= 0;

  const chartData = {
    labels: Array.from({ length: data.length }).map(() => ''),
    datasets: [
      {
        data,
        borderColor: isPositive ? '#4ade80' : '#f87171',
        backgroundColor: isPositive ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  return (
    <div className="h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MiniChart;