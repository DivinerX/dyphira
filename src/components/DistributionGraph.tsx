import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

interface DistributionGraphProps {
  rank: any;
}

export const DistributionGraph: FC<DistributionGraphProps> = ({ rank }) => {
  // Function to calculate normal distribution
  const normalDistribution = (x: number, mean: number, stdDev: number) => {
    const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
    return coefficient * Math.exp(exponent);
  };

  // Generate data points
  const mean = 50;
  const stdDev = 15;
  const points = [];
  for (let x = 0; x <= 100; x += 0.5) {
    points.push({
      x: x,
      y: normalDistribution(x, mean, stdDev)
    });
  }

  const stepperAnnotations: Record<string, any> = {};

  const data = {
    datasets: [{
      data: points,
      borderColor: '#6A8B74',
      borderWidth: 1,
      fill: false,
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff',
          callback: (value: number) => {
            return value;
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      annotation: {
        annotations: {
          ...stepperAnnotations,
          youAreHere: {
            type: 'line' as const,
            xMin: rank.percentile,
            xMax: rank.percentile,
            borderColor: '#FFD700',
            borderWidth: 2,
            label: {
              content: 'YOU ARE HERE',
              display: true,
              position: 'start',
              backgroundColor: 'transparent',
              color: '#FFD700',
              font: {
                size: 8,
                weight: 'bold'
              }
            }
          },
        }
      }
    }
  };

  return (
    <div id="chart-container">
      <Line data={data} options={options as any} />
    </div>
  );
}