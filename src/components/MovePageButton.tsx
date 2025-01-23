import { FC } from "react";
import previousIcon from "@/assets/images/previous-icon.svg";
import nextIcon from "@/assets/images/next-icon.svg";

export const MovePageButton: FC<{ direction: "next" | "previous", onClick: () => void, disabled: boolean }> = ({ direction, onClick, disabled }) =>
  <div className={`relative p-0 overflow-hidden`}>
    <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
    <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
    <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
    <div className={`flex flex-row items-center justify-center gap-2 p-2 bg-[#C8FFD30D] cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} onClick={disabled ? undefined : onClick}>
      <img src={direction === "next" ? nextIcon : previousIcon} alt={`${direction} icon`} />
    </div>
  </div>
