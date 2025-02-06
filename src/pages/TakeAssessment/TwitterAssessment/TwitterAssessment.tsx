import { FC } from "react";
import { Layout } from "@/components/Layout";
import { StyledBoxWithoutWhiteCorners } from "@/components/StyledBox";
import { StyledBox } from "@/components/StyledBox";
import { useAuth } from "@/contexts/auth.hook";
import ProgressBarComp from "@/components/Progressbar";
import twitterIcon from "@/assets/images/twitter-icon.svg";
import { TUser } from "@/types";

type TwitterAssessmentProps = {
  user: TUser;
  handleLinkAccount: (provider: string) => () => void;
}
export const TwitterAssessment: FC<TwitterAssessmentProps> = ({ user, handleLinkAccount }) => {
  return <Layout>
    <div className="flex flex-col items-center justify-center w-full">
      <div className='w-[70%]'>
        <StyledBox className='w-full'>
          <div className='bg-[#C8FFD306] w-full px-2'>
            <span className='text-[10px] uppercase'>assessment in progress</span>
          </div>
          <div className="flex flex-col justify-center items-center w-full p-4">
            <ProgressBarComp />
            <div className='flex flex-col justify-center items-center min-h-[400px] w-1/2 text-[12px] text-[#E4FFEA] uppercase text-center gap-4 [text-shadow:0_0_15px_rgba(70,255,91,0.25),0_0_2px_rgba(125,255,151,0.5)]'>
              {
                <>
                  <p>THE DYPHIRA ALGORITHM WILL ANALYZE YOUR NETWORK, INFLUENCE, AND ENGAGEMENT ON TWITTER TO ASSESS YOUR CONNECTIONS AND SOCIAL CAPITAL.
                  </p>
                  <p>THE MORE IMPACTFUL YOUR PRESENCE, THE HIGHER YOUR SCORE.</p>
                  <p>CLICK BELOW TO CONNECT YOUR TWITTER ACCOUNT.</p>
                  <StyledBoxWithoutWhiteCorners>
                    <div
                      className='flex flex-row items-center justify-between px-6 py-1 cursor-pointer'
                      onClick={handleLinkAccount("twitter")}
                    >
                      <span className='text-[10px] uppercase -mb-[2px]'>connect twitter</span>
                      <img src={twitterIcon} alt="twitter icon" className='-m-3' />
                    </div>
                  </StyledBoxWithoutWhiteCorners>
                </>
              }
            </div>
            <div className='flex flex-row justify-between items-end w-full'>

            </div>

            <div className="flex flex-row items-center justify-between py-4 w-full">
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              <div className="w-full bg-[#C8FFF440] h-[0.5px]"></div>
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            </div>

            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col justify-center items-start">
                <span className='text-[14px] uppercase'>social capital assessment</span>
                <span className='text-[10px] text-[#C8FFF480] uppercase'>IN PROGRESS</span>
              </div>
              <StyledBoxWithoutWhiteCorners>
                <span
                  className='text-[10px] text-[#C8FFD3] uppercase px-6 pb-1 pt-[6px] bg-[#C8FFD30D] flex flex-row items-center gap-1 cursor-pointer'
                >
                  end assessment
                  <div className='w-[6px] h-[6px] bg-[#C8FFD3] rounded-sm -mt-[2px]'></div>
                </span>
              </StyledBoxWithoutWhiteCorners>
            </div>

          </div>
        </StyledBox>
      </div>
    </div>
  </Layout>;
};

