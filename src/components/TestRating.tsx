import { FC } from "react";
import { StyledBox } from "./StyledBox";
import titleDecorator from "@/assets/images/title-decorator.svg";
import avatar from "@/assets/images/avatar.png";
import scoreDecorator from "@/assets/images/score-decorator.svg";
import testRatingDivider from "@/assets/images/test-rating-divider.svg";
import liDecorator from "@/assets/images/li-decorator.svg";

import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const TestRating: FC = () => {
  const chartData = {
    labels: [
      ['General', 'Intelligence'],
      ['Pattern', 'Recognition'],
      ['Impulse', 'Control'], 
      ['Visual', 'Perception'],
      ['Decision', 'Making'],
      ['Problem', 'Solving'], 
      ['Reaction', 'Time'], 
      ['Processing', 'Speed'],
      ['Short', 'Term Memory'], 
      ['Long', 'Term Memory'], 
      ['Emotional', 'Intelligence']
    ],
    datasets: [{
      label: 'Average',
      data: [75, 69, 82, 71, 76, 85, 70, 60, 80, 70, 80],
      fill: true,
      borderWidth: 2,
      pointRadius: 4,
      backgroundColor: '#FC07471A',
      pointBackgroundColor: '#FC0747',
      pointBorderColor: '#FC0747',
      pointBorderWidth: 0,
      borderColor: '#FC0747',
    }, {
      label: 'User',
      data: [67, 60, 75, 65, 68, 75, 85, 55, 85, 65, 75],
      fill: true,
      borderWidth: 2,
      pointRadius: 4,
      backgroundColor: '#C8FFD30D',
      pointBackgroundColor: '#C8FFD3',
      pointBorderColor: '#C8FFD3',
      pointBorderWidth: 0,
      borderColor: '#C8FFD3',
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
        }
      }
    },
    scales: {
      r: {
        pointLabels: {
          color: '#C8FFD3',
          font: {
            size: 8
          }
        },
        angleLines: {
          color: '#FFFFFF33',
          lineWidth: 1,
        },
        grid: {
          color: '#FFFFFF33',
          lineWidth: 1,
        },
        ticks: {
          stepSize: 20,
          display: false,
          color: '#FFFFFF33'
        },
        suggestedMin: 0,
        suggestedMax: 100
      },
    },
  }
  return (
    <StyledBox className="w-1/3 flex flex-col">
      <div className="w-full px-2 py-1 flex flex-row justify-start items-center gap-1 bg-[#3B4D4A]">
        <img src={titleDecorator} alt="title decorator" />
        <p className="text-[#C8FFD3] text-[8px] uppercase">test rating</p>
      </div>
      <div className="w-full p-2 flex flex-col justify-start items-start gap-2">
        <StyledBox className="w-full p-2">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center gap-2">
              <StyledBox>
                <img src={avatar} alt="avatar" className="w-[22px] h-[22px]" />
              </StyledBox>
              <div>
                <p className="text-[#C8FFF480] text-[8px] uppercase leading-2">@{`bladexbt`}</p>
                <p className="text-[#C8FFD3] text-md font-bold uppercase leading-none tracking-[1px]">test score:</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={scoreDecorator} alt="score decorator" />
              <p className="text-[#C8FFD3] text-[30px] font-bold uppercase leading-none">73<span className="text-[8px] font-normal text-[#C8FFD380]"> / 100</span></p>
            </div>
          </div>
        </StyledBox>
      </div>
      <div className="flex flex-col w-full px-2 gap-2">
        <img src={testRatingDivider} alt="test rating divider" className="w-full" />
      </div>
      <div className="flex flex-col justify-start items-start w-full p-2">
        <StyledBox className="p-1">
          <div className="flex flex-row gap-1">
            <StyledBox className="px-4 py-1">
              <p className="text-[#C8FFD3] text-[8px] uppercase">your metrics</p>
            </StyledBox>
            <StyledBox className="px-4 py-1">
              <p className="text-[#C8FFD3] text-[8px] uppercase">average metrics</p>
            </StyledBox>
          </div>
        </StyledBox>
      </div>
      <div className="flex flex-wrap w-full p-2">
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
        <ScoreBar skill="General Intelligence" score={73} />
      </div>
      <img src={testRatingDivider} alt="test rating divider" className="w-full rotate-180 py-2" />
      <div className="flex flex-col items-center w-full p-2">
        <Radar
          data={chartData}
          options={options} />
      </div>
      <img src={testRatingDivider} alt="test rating divider" className="w-full py-2" />
      <div className="flex flex-row items-center justify-between w-full p-2">
        <div className="flex flex-col items-start">
          <span className="text-[#C8FFD3] text-[6px] uppercase">Your Ranked</span>
          <div className="flex flex-row items-center gap-1">
            <div className="w-[5px] h-[2px] bg-[#FDFB8F] rounded-full"></div>
            <span className="text-[#FDFB8F] text-[10px] uppercase">TOP 30%</span>
          </div>
        </div>
        <StyledBox className="px-10 py-1 cursor-pointer">
          <p className="text-[#C8FFD3] text-[10px] uppercase">VIEW RANKINGS ...</p>
        </StyledBox>
      </div>
    </StyledBox>
  );
};

interface ScoreBarProps {
  skill: string;
  score: number;
}

const ScoreBar: FC<ScoreBarProps> = ({ skill, score }) => {
  return (
    <div className="flex flex-col justify-start items-start w-1/2 p-1">
      <div className="flex flex-row justify-between items-end w-full">
        <div className="flex flex-row items-center gap-1">
          <img src={liDecorator} alt="li decorator" />
          <p className="text-[#C8FFD3] text-[8px] uppercase">{skill}</p>
        </div>
        <div>
          <p className="text-[#C8FFD3] text-sm uppercase">{score}<span className="text-[8px] text-[#C8FFF480] font-normal"> / 100</span></p>
        </div>
      </div>
      <div className="flex flex-row justify-start h-[6px] p-[0.5px] border-[0.5px] border-[#C8FFF440] w-full rounded-full">
        <div className="w-2/3 h-full bg-[#C8FFD3] rounded-full"></div>
      </div>
    </div>
  );
};