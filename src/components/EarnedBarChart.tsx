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

type TEarnedBarChartProps = {
  data: any
  type: 'referrals' | 'earnings'
}

function EarnedBarChart({ data, type }: TEarnedBarChartProps) {
  console.log(data);
  const labels = new Array(7).fill(0).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  });
  const dataset = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const day = date.getDay();
    const item = data.filter((item: any) => new Date(item.createdAt).getDay() === day);
    if (type === 'referrals') {
      dataset.push(item?.length || 0);
    } else {
      dataset.push(item?.reduce((acc: number, item: any) => acc + item.earned, 0) || 0);
    }
  }
  console.log(dataset);
  return (
    <Bar options={options as any} data={{ labels, datasets: [{ data: dataset, backgroundColor: '#FC074740', hoverBackgroundColor: '#FC0747BF', borderColor: '#FC0747', borderWidth: { top: 2, right: 1, bottom: 1, left: 1 }, borderRadius: 0, barThickness: 40 }] }} />
  );
}

export default EarnedBarChart;