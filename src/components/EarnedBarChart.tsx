import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
        color: '#1E2927',
        lineWidth: 0.5,
      },
      ticks: {
        color: '#FFFFFF',
      },
    },
    y: {
      grid: {
        display: true,
        color: '#1E2927',
        lineWidth: 0.5,
      },
      ticks: {
        color: '#FFFFFF',
        stepSize: 2,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      position: 'nearest',
      backgroundColor: '#1E2927',
      titleColor: '#FFFFFF',
      bodyColor: '#FFFFFF',
      displayColors: false,
      padding: 8,
      cornerRadius: 0,
      caretSize: 0,
      caretPadding: 20,
      yAlign: 'bottom',
      titleAlign: 'center',
      bodyAlign: 'center',
      titleFont: {
        size: 10,
        weight: 'normal',
      },
      bodyFont: {
        size: 12,
        weight: 'bold',
      },
      callbacks: {
        title: () => 'EARNED',
        label: (context: any) => context.raw,
      },
      borderWidth: 1,
      borderColor: '#FC0747',
    },
  },
  backgroundColor: 'transparent',
  onHover: (event: any, elements: any) => {
    if (event.native) {
      event.native.target.style.cursor = elements.length ? 'pointer' : 'default';
    }
  },
};

const data = {
  labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  datasets: [
    {
      data: [4, 6, 5, 8.5, 8, 3, 6],
      backgroundColor: '#FC074740',
      hoverBackgroundColor: '#FC0747BF',
      borderColor: '#FC0747',
      borderWidth: {
        top: 2,
        right: 1,
        bottom: 1,
        left: 1,
      },
      borderRadius: 0,
      barThickness: 40,
    },
  ],
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartHeight, setChartHeight] = useState(0);

  useEffect(() => {
    const updateChartHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setChartHeight(width * 0.6);
      }
    };

    updateChartHeight();

    window.addEventListener('resize', updateChartHeight);
    window.addEventListener('resize', updateChartHeight);
    return () => window.removeEventListener('resize', updateChartHeight);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <Bar options={options as any} data={data} />
    </div>
  );
}

export default App;