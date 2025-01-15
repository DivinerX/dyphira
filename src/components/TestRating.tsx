import { FC } from "react";
import { StyledBox } from "./StyledBox";
import titleDecorator from "@/assets/images/title-decorator.svg";
import avatar from "@/assets/images/avatar.png";
import scoreDecorator from "@/assets/images/score-decorator.svg";

export const TestRating: FC = () => {
  return (
    <StyledBox className="w-1/3 flex flex-col">
      <div className="w-full px-2 flex flex-row justify-start items-center gap-1 bg-[#3B4D4A]">
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
              <p className="text-[#C8FFD3] text-[30px] font-bold uppercase leading-none">73<span className="text-[8px] font-normal"> / 100</span></p>
            </div>
          </div>
        </StyledBox>
      </div>
    </StyledBox>
  );
};