import { FC } from "react";
import { StyledBox } from "./StyledBox";
import titleDecorator from "@/assets/images/title-decorator.svg";
import boxes from "@/assets/images/boxes.svg";
import testSummaryDivider from "@/assets/images/test-summary-divider.svg";
import lock from "@/assets/images/lock.svg";
import clockIcon from "@/assets/images/clock-icon.svg";

export const TestSummary: FC = () => {
  return (
    <StyledBox className="w-1/6 flex flex-col">
      <div className="w-full px-2 py-1 flex flex-row justify-start items-center gap-1 bg-[#3B4D4A]">
        <img src={titleDecorator} alt="title decorator" />
        <p className="text-[#C8FFD3] text-[8px] uppercase">test summary</p>
      </div>
      <div className="w-full px-4 py-2 flex flex-col items-center gap-2">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-[#C8FFD3] text-[8px] font-bold uppercase">response evaluation:</p>
          <p className="text-[#C8FFD3] text-[10px] font-bold uppercase">34<span className="text-[#C8FFD3] text-[8px] font-normal">/50</span></p>
        </div>
        <img src={boxes} alt="boxes" />
        <img src={testSummaryDivider} alt="test summary divider" className="w-full" />
        <StyledBox className="w-full p-1">
          <div className="flex flex-row justify-center items-center gap-1">
            <img src={lock} alt="lock" />
            <p className="text-[#C8FFD3] text-[8px] font-bold uppercase">retake test</p>
          </div>
        </StyledBox>
        <div className="w-full flex flex-row justify-end items-center gap-1">
          <img src={clockIcon} alt="clock icon" />
          <p className="text-[#C8FFD3] text-[8px] font-bold uppercase">10:00</p>
        </div>
      </div>
    </StyledBox>
  )
};
