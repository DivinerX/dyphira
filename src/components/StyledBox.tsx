import { FC, ReactNode } from "react";

interface StyledBoxProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const StyledBox: FC<StyledBoxProps> = ({ children, className, backgroundColor = 'transparent' }) => {
  return (
    <div className={`relative p-0 overflow-hidden ${className}`} style={{ backgroundColor: backgroundColor }}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#fff] z-30"></div>
      <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-col items-center h-full">{children}</div>
    </div>
  );
};

export const StyledBoxWithoutWhiteCorners: FC<StyledBoxProps> = ({ children, className, borderColor = "#C8FFF440" }) => {
  return (
    <div className={`relative p-0 overflow-hidden ${className} backdrop-blur-sm z-10`}>
      <div className={`flex flex-col items-center h-full border-[0.5px] border-[${borderColor}]`}>{children}</div>
      <div className={`absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[${borderColor}] bg-[#0d191a] z-30`}></div>
      <div className={`absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[${borderColor}] bg-[#0d191a] z-30`}></div>
    </div>
  );
};
