import { FC, ReactNode, ChangeEvent } from "react";
import { StyledBoxWithoutWhiteCorners } from "./StyledBox";

type TStyledInput = {
  icon?: string;
  placeholder: string;
  rightAddon?: ReactNode;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const StyledInput: FC<TStyledInput> = ({ icon, placeholder, rightAddon, value, onChange }) => {
  return (
    <StyledBoxWithoutWhiteCorners className="w-full">
      <div className="flex flex-row items-center justify-start gap-2 py-1 w-full">
        {icon && <img src={icon} className="pl-2" />}
        <input
          className="w-full bg-transparent text-[10px] text-[#C8FFD380] border-none outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {rightAddon}
      </div>
    </StyledBoxWithoutWhiteCorners>
  )
};

