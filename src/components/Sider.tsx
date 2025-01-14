import { FC } from "react";

export const Sider: FC = () => {
  return (
    <div className="absolute top-0 right-0 h-full">
      <div className="flex flex-col items-end justify-between h-full pr-10 py-24">
        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-end gap-2">
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">IPV4</span>
              <p className="text-[8px] text-[#C8FFD3] text-right font-semibold">192.168.1.1</p>
            </div>
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">WEB_CLIENT</span>
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold"><span className="text-[6px] text-[#C8FFF480]">95.0</span> CHROME</p>
            </div>
          </div>
          <div className="w-4 h-full py-2 px-1">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border border-l-0 border-dashed border-[#C8FFF480]"></div>
              <div className="absolute -top-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
              <div className="absolute -bottom-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-end gap-2">
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">LANGUAGE</span>
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold">EN-US</p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold"><span className="text-[6px] text-[#C8FFF480]">TIMEZONE</span> (UTC-6)</p>
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold"><span className="text-[6px] text-[#C8FFF480]">LOCAL_TIME</span> 2:35:00 PM</p>
            </div>
          </div>
          <div className="w-4 h-full py-2 px-1">
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
