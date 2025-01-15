import { FC } from "react";

interface VerticalDividerProps {
  style?: string;
}

export const VerticalDivider: FC<VerticalDividerProps> = ({ style = '' }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-0">
        {/* Top diamond */}
        <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
        {/* Vertical line */}
        <div className={`w-[0.5px] bg-[#C8FFF440] ${style}`}></div>
        {/* Bottom diamond */}
        <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
      </div>
    </>
  );
};

