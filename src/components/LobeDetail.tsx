import { FC } from "react";
import { StyledBox } from "./StyledBox";
import titleDecorator from "@/assets/images/title-decorator.svg";
import liDecorator from "@/assets/images/li-decorator.svg";
import { Radar } from "react-chartjs-2";
import testRatingDivider from "@/assets/images/test-rating-divider.svg";
import { TAssessmentScore } from "@/types";
type LobeDetailProps = {
  part: "front" | "back" | "top" | "bottom" | "center" | "out"
  score: TAssessmentScore;
  averageScoreList: any;
  rank: any;
}

export const LobeDetail: FC<LobeDetailProps> = ({ part, score, averageScoreList, rank }) => {
  const chartData = {
    labels: [
      "IQ",
      "evangelism",
      "determination",
      "effectiveness",
      "vision"
    ],
    datasets: [{
      label: 'Average',
      data: [averageScoreList.intelligence, averageScoreList.evangelism, averageScoreList.determination, averageScoreList.horsepower, averageScoreList.vision],
      fill: true,
      borderWidth: 2,
      pointRadius: 3,
      backgroundColor: '#FC07471A',
      pointBackgroundColor: '#FC0747',
      pointBorderColor: '#FC0747',

      pointBorderWidth: 0,
      borderColor: '#FC0747',
    },
    {
      label: 'User',
      data: [score.intelligence, score.evangelism, score.determination, score.horsepower, score.vision],
      fill: true,
      borderWidth: 2,
      pointRadius: 3,
      backgroundColor: '#C8FFD30D',
      pointBackgroundColor: '#C8FFD3',
      pointBorderColor: '#C8FFD3',
      pointBorderWidth: 0,
      borderColor: '#C8FFD3',
    }
    ],
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
          },
          callback: function (_label: string, index: number) {
            return chartData.labels[index];
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
  const renderLetter = {
    "front": "intelligence",
    "back": "vision",
    "top": "determination",
    "bottom": "horsepower",
    "center": "evangelism"
  }

  return (
    <div className="w-[200px] backdrop-blur-sm">
      <StyledBox>
        <div className="w-full px-2 py-1 flex flex-row justify-start items-center gap-1 bg-[#3B4D4A]">
          <img src={titleDecorator} alt="title decorator" />
          <p className="text-[#C8FFD3] text-[8px] uppercase">test summary</p>
        </div>
        <div className="flex flex-row w-full justify-around items-center p-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[#C8FFF480] text-[6px] uppercase">ability index</span>
            <p className="text-[#C8FFD3] text-[8px] uppercase">{renderLetter[part]}</p>
          </div>
          <div className="w-[1px] h-5 border-r border-[#C8FFD380] border-dashed"></div>
          <div className="flex flex-col justify-center items-center">

            <p className="text-[#C8FFD3] text-[20px]">{score[renderLetter[part]]} <span className="text-[#C8FFF480] text-[8px]"> / 100</span></p>
          </div>
        </div>
        <div className="flex flex-row w-full items-center px-2">
          <div className="w-[2px] h-[2px] bg-[#C8FFF480] rotate-45"></div>
          <div className="w-full h-[1px] bg-[#C8FFF480] pt-[1px]"></div>
          <div className="w-[2px] h-[2px] bg-[#C8FFF480] rotate-45"></div>
        </div>
        <div className="flex flex-row w-full items-center p-2">
          <p className="text-[#C8FFD3] text-[8px] uppercase">responsible for</p>
        </div>
        <div className="flex flex-col w-full items-center px-2">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-1">
              <img src={liDecorator} alt="li decorator" />
              <p className="text-[#C8FFD380] text-[8px] uppercase">Intelligence Quotient</p>
            </div>
            <div>
              <p className="text-[#C8FFD3] text-[8px] uppercase">{score.intelligence}<span className="text-[#C8FFF480] text-[6px]"> / 100</span></p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-1">
              <img src={liDecorator} alt="li decorator" />
              <p className="text-[#C8FFD380] text-[8px] uppercase">Evangelism</p>
            </div>
            <div>
              <p className="text-[#C8FFD3] text-[8px] uppercase">{score.evangelism}<span className="text-[#C8FFF480] text-[6px]"> / 100</span></p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-1">
              <img src={liDecorator} alt="li decorator" />
              <p className="text-[#C8FFD380] text-[8px] uppercase">Determination</p>
            </div>
            <div>
              <p className="text-[#C8FFD3] text-[8px] uppercase">{score.determination}<span className="text-[#C8FFF480] text-[6px]"> / 100</span></p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-1">
              <img src={liDecorator} alt="li decorator" />
              <p className="text-[#C8FFD380] text-[8px] uppercase">Effectiveness</p>
            </div>
            <div>
              <p className="text-[#C8FFD3] text-[8px] uppercase">{score.horsepower}<span className="text-[#C8FFF480] text-[6px]"> / 100</span></p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">

            <div className="flex flex-row items-center gap-1">
              <img src={liDecorator} alt="li decorator" />
              <p className="text-[#C8FFD380] text-[8px] uppercase">Vision</p>
            </div>
            <div>
              <p className="text-[#C8FFD3] text-[8px] uppercase">{score.vision}<span className="text-[#C8FFF480] text-[6px]"> / 100</span></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full px-2 pt-2 gap-2">
          <img src={testRatingDivider} alt="test rating divider" className="w-full" />
          <Radar
            data={chartData}
            options={options}
          />
          <img src={testRatingDivider} alt="test rating divider" className="w-full rotate-180" />
        </div>
        <div className="flex flex-row w-full p-2 justify-between items-center">
          <span className="text-[#C8FFD3] text-[6px] uppercase">your ranked:</span>
          <p className="text-[#FCFA7F] text-[10px] font-bold uppercase">Top {rank.percentile ? rank.percentile.toFixed(1) : "UNRANKED"}%</p>
        </div>
      </StyledBox>
    </div>

  );
};