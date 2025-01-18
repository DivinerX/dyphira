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

export const DistributionGraph: FC = () => {
  // Function to calculate normal distribution
  const normalDistribution = (x: number, mean: number, stdDev: number) => {
    const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
    return coefficient * Math.exp(exponent);
  };

  // Generate data points
  const mean = 65;
  const stdDev = 10;
  const points = [];
  for (let x = 40; x <= 90; x += 0.5) {
    points.push({
      x: x,
      y: normalDistribution(x, mean, stdDev)
    });
  }

  // Create steppers array for x-axis markers
  const stepperPositions = [40, 48, 56, 65, 73, 81, 89];
  const stepperAnnotations: Record<string, any> = {};

  // Generate stepper annotations
  stepperPositions.forEach((position, index) => {
    stepperAnnotations[`stepper${index}`] = {
      type: 'line',
      xMin: position,
      xMax: position,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderWidth: 1,
      borderDash: [5, 5],
      drawTime: 'beforeDatasetsDraw'
    };
  });

  const data = {
    datasets: [{
      data: points,
      borderColor: '#ffffff',
      borderWidth: 2,
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
            return stepperPositions.includes(value) ? value : '';
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
            xMin: 73,
            xMax: 73,
            borderColor: '#FFD700',
            borderWidth: 2,
            label: {
              content: 'YOU ARE HERE',
              display: true,
              position: 'start',
              backgroundColor: 'transparent',
              color: '#FFD700',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          percentages: {
            type: 'label' as const,
            content: ['0.1%', '13.6%', '34.1%', '34.1%', '13.6%', '0.1%'],
            xValue: [40, 48, 56, 73, 81, 89],
            yValue: 0.02,
            color: '#ffffff',
            font: {
              size: 12
            }
          }
        }
      }
    }
  };

  return (
    <div id="chart-container">
      <Line data={data} options={options} />
    </div>
  );
}