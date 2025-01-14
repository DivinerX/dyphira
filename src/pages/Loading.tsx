import { Layout } from "@/components/Layout";
import { FC } from "react";
import logo from "@/assets/images/logo_image.svg";
import logo_text from "@/assets/images/big_logo.svg";
import big_barcode from "@/assets/images/big_barcode.svg";

const Loading: FC = () => {
  return (
    <Layout>
      <div className="flex-1 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={logo} alt="logo" />
            <img src={logo_text} alt="logo" className="pt-2" />
            <span className="text-[10px] text-[#C8FFF480] uppercase tracking-widest">Intelligence</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-w-[478px]">
          <div className="w-full">
            <div className="w-full h-[6px] p-[0.5px] bg-transparent border-[0.5px] border-[#C8FFF440] rounded-full">
              <div className="w-1/2 h-full bg-[#C8FFD3] rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center pt-2 w-full">
            <div className="pr-4">
              <img src={big_barcode} alt="barcode" />
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-row justify-between items-start w-full">
                <span className="text-[8px] text-[#C8FFF480] leading-none uppercase">processing test data</span>
                <span className="text-sm font-semibold text-[#C8FFD3] leading-none">73%</span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="text-[8px] text-[#C8FFF480] leading-none uppercase">fetching test data</span>
                <span className="text-[8px] text-right text-[#C8FFD3] leading-none">
                  [====================] 100%
                </span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="text-[8px] text-[#C8FFF480] leading-none uppercase">data received</span>
                <span className="text-[8px] text-right text-[#C8FFD3] leading-none">
                  [====================] 100%
                </span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="text-[8px] text-[#C8FFF480] leading-none uppercase">analysing data</span>
                <span className="text-[8px] text-right text-[#C8FFD3] leading-none">
                  [==========----------] 50%
                </span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="text-[8px] text-[#C8FFF480] leading-none uppercase">finalizing results</span>
                <span className="text-[8px] text-right text-[#C8FFD3] leading-none">
                  [--------------------] 0%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Loading;
