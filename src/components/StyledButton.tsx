import { FC, ReactNode } from "react";
import { StyledBoxWithoutWhiteCorners } from "./StyledBox";

export const StyledButton: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledBoxWithoutWhiteCorners className="w-full bg-[#C8FFD306]">
      <button className="w-full bg-transparent text-[10px] text-[#C8FFD3] px-2 py-1">{children}</button>
    </StyledBoxWithoutWhiteCorners>
  )
}
