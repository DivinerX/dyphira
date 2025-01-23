import { FC, ReactNode } from "react";
import { StyledBoxWithoutWhiteCorners } from "./StyledBox";

type TStyledButton = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const StyledButton: FC<TStyledButton> = ({ children, onClick, disabled }) => {
  return (
    <StyledBoxWithoutWhiteCorners className="w-full bg-[#C8FFD306]">
      <button className="w-full bg-transparent text-[10px] text-[#C8FFD3] px-2 py-1" onClick={onClick} disabled={disabled}>{children}</button>
    </StyledBoxWithoutWhiteCorners>
  )
}
