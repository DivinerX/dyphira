import { FC, useState } from "react";
import { Hex } from "./Hex";
import brain from "@/assets/images/brain.svg";

interface Point {
  x: number;
  y: number;
}

export const Lobe: FC = () => {
  const [point, setPoint] = useState<Point | null>(null);
  return (
    <div className="flex flex-col w-1/2 h-[90vh] relative">
      <Hex setPoint={setPoint} />
      <img
        src={brain}
        alt="brain"
        className="absolute top-0 left-0 w-2/3 transform translate-x-[25%] translate-y-[40%] z-10 pointer-events-none"
      />
      <div className="flex flex-row w-full justify-center gap-24 -mt-36">
        <div className="flex flex-row gap-1">
          <div className="w-4 h-full py-1 px-1">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border border-r-0 border-dashed border-[#C8FFF480]"></div>
              <div className="absolute -top-[0.5px] -right-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
              <div className="absolute -bottom-[0.5px] -right-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-col justify-center">
              <span className="text-[6px] text-[#C8FFF480] uppercase">pointer coords</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[8px] text-[#C8FFD3] text-right font-semibold"><span className="text-[6px] text-[#C8FFF480] uppercase">[client_y]</span> {Math.round(point?.y ?? 0)}{` `}<span className="text-[6px] text-[#C8FFF480] uppercase"> [client_x]</span> {Math.round(point?.x ?? 0)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-end gap-2">
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">pointer target</span>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold uppercase">parietal_lobe</p>
            </div>
          </div>
          <div className="w-4 h-full py-1 px-1">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border border-l-0 border-dashed border-[#C8FFF480]"></div>
              <div className="absolute -top-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
              <div className="absolute -bottom-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
