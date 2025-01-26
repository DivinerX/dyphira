import { FC, ReactNode } from "react";
import { Layout } from "@/components/Layout";
import clipboard from "@/assets/images/clipboard-icon.svg";
import rightArrow from "@/assets/images/right-arrow-icon.svg";
import documentIcon from "@/assets/images/document-icon.svg";
import imageFaceIcon from "@/assets/images/image-face-icon.svg";
import metricListIcon from "@/assets/images/metric-list-icon.svg";
import reportIcon from "@/assets/images/report-icon.svg";
import boxes from "@/assets/images/boxes.svg";
import { StyledBox } from "@/components/StyledBox";
import checkIcon from "@/assets/images/check-icon.svg";
import back_logo from "@/assets/images/back-logo.svg";
import { DistributionGraph } from "@/components/DistributionGraph";

export const Assessments: FC = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-8 py-12 px-36 w-full h-full">
        <div className="flex flex-col gap-4 w-[35%]">
          <StyledHeader title="Available Assessments" />
          <StyledItem
            title="Focus Dynamics"
            caption="MEDIUM"
            icon={<MockIcon />}
            rightTop={<p className="text-[10px] bg-[#FC07471A] px-1 border border-[#FC074780] uppercase">new</p>}
            rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">10 MIN</p>}
            decorator={<img src={documentIcon} alt="document" />}
          />
          <StyledItem
            title="Focus Dynamics"
            caption="MEDIUM"
            icon={<MockIcon />}
            rightTop={<p className="text-[10px] bg-[#FC07471A] px-1 border border-[#FC074780] uppercase">new</p>}
            rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">10 MIN</p>}
            decorator={<img src={documentIcon} alt="document" />}
          />
          <StyledItem
            title="Focus Dynamics"
            caption="MEDIUM"
            icon={<MockIcon />}
            rightTop={<p className="text-[10px] bg-[#FC07471A] px-1 border border-[#FC074780] uppercase">new</p>}
            rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">10 MIN</p>}
            decorator={<img src={documentIcon} alt="document" />}
          />

          <StyledHeader title="Completed Assessments" />
          <StyledItem
            title="Focus Dynamics"
            caption="MEDIUM"
            icon={<MockIcon />}
            rightTop={<p className="text-[10px] bg-[#FC07471A] px-1 border border-[#FC074780] uppercase">new</p>}
            rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">10 MIN</p>}
            decorator={<img src={documentIcon} alt="document" />}
          />
          <StyledItem
            title="Focus Dynamics"
            caption="MEDIUM"
            icon={<MockIcon />}
            rightTop={<p className="text-[10px] bg-[#FC07471A] px-1 border border-[#FC074780] uppercase">new</p>}
            rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">10 MIN</p>}
            decorator={<img src={documentIcon} alt="document" />}
          />
          <StyledItem
            title="Focus Dynamics"
            caption="MEDIUM"
            icon={<MockIcon />}
            rightTop={<p className="text-[10px] bg-[#FC07471A] px-1 border border-[#FC074780] uppercase">new</p>}
            rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">10 MIN</p>}
            decorator={<img src={documentIcon} alt="document" />}
          />
        </div>
        <div className="flex flex-col gap-4 w-[35%]">
          <StyledBox className="w-full">
            <div className="flex flex-row items-center justify-between w-full bg-[#C8FFD306] p-2">
              <div className="flex flex-row items-center gap-2">
                <img src={imageFaceIcon} alt="image face" />
                <p className="text-xs uppercase">RAPID PERCEPTION ASSESSMENT</p>
              </div>
              <span className="text-[10px] text-[#C8FFD380] uppercase">Medium</span>
            </div>

            <div className="flex flex-col items-start justify-between w-full p-2">
              <p className="text-xs text-[#C8FFD380] uppercase py-2">mainly focuses on:</p>
              <div className="flex flex-col items-center w-full">
                <RapidPerceptionAssessmentItem title="REACTION TIME" score={76.00} />
                <RapidPerceptionAssessmentItem title="PROCESSING SPEED" score={72.00} />
                <RapidPerceptionAssessmentItem title="VISUAL PERCEPTION" score={68.00} />
                <RapidPerceptionAssessmentItem title="PATTERN RECOGNITION" score={64.00} />
              </div>
            </div>
          </StyledBox>

          <div>
            <div className="text-[6px] text-[#C8FFD380] uppercase flex flex-row items-center justify-between py-2">
              <span>DYPHIRA INTELLIGENCE METRICS ALGORITHM</span>
              <span>#DESCRIPTION</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            </div>
            <div className="text-[10px] text-[#C8FFD380] font-mono py-2">
              <p>This task evaluates your ability to process visual information, recognize patterns, and react quickly under pressure.</p>
              <p>You’ll complete challenges like identifying patterns, locating targets, or responding to visual prompts within tight time limits. Distractions and complexity will test your focus and adaptability.</p>
              <p>Performance is measured by accuracy, speed, and consistency, highlighting your visual perception and cognitive processing skills.</p>
              <p>Your results will reveal strengths in reaction time, processing speed, and visual perception.</p>
              <p>Your results will reveal strengths in reaction time, processing speed, and visual perception.</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              <div className="w-full bg-[#C8FFF440] h-[0.5px]"></div>
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            </div>
            <div className="flex flex-row items-center uppercase justify-between text-[6px] text-[#C8FFD380] py-2">
              <div className="flex flex-col items-start">
                <span>dyphira intelligence</span>
                <span>metrics algorithm</span>
              </div>
              <div className="flex flex-col items-end">
                <span>dyphira intelligence</span>
                <span>metrics algorithm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <StyledBox className="w-full">
            <div className="flex flex-row items-center justify-between w-full bg-[#C8FFD306] p-2">
              <div className="flex flex-row items-center gap-2">
                <img src={reportIcon} alt="report" />
                <p className="text-xs uppercase">RAPID PERCEPTION ASSESSMENT</p>
              </div>
              <span className=""></span>
            </div>
            <div className="w-full px-4 py-2 flex flex-col items-center gap-2">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-[#C8FFD3] text-[8px] font-bold uppercase">response evaluation:</p>
                <p className="text-[#C8FFD3] text-[10px] font-bold uppercase">34<span className="text-[#C8FFD3] text-[8px] font-normal">/50</span></p>
              </div>
              <img src={boxes} alt="boxes" className="w-full" />
            </div>
            <div className="w-full flex flex-row items-center justify-between border-t border-b border-[#1E2927] py-1 px-2">
              <span className="text-[#C8FFD380] text-[10px] uppercase">time to finish</span>
              <span className="text-[10px] font-bold uppercase">00:16:35</span>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b border-[#1E2927] py-1 px-2 bg-[#C8FFD303]">
              <span className="text-[#C8FFD380] text-[10px] uppercase">points earned</span>
              <div className="flex flex-row items-center gap-1">
                <span className="text-[10px] font-bold uppercase">1430</span>
                <div className="w-1 h-1 rotate-45 border-[1px] border-[#FC0747] -mt-[1px]"></div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center p-2">
              <DistributionGraph />
            </div>
            <div className="w-full flex flex-row items-center justify-between border-t border-[#1E2927] bg-[#C8FFD303] p-2">
              <span className="text-[10px] text-[#C8FFD380] uppercase">You ranked:</span>
              <p className="text-[10px] text-[#FFF047] font-bold uppercase">Top 30%</p>
            </div>
          </StyledBox>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            <div className="w-full bg-[#C8FFF440] h-[0.5px]"></div>
            <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
          </div>
          <CompletedButton />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen">
        <img src={back_logo} alt="back-logo" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%]" />
      </div>
    </Layout>
  );
};

const StyledHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={`relative overflow-hidden p-2 bg-[#C8FFD306]`}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
      {/* Right top corner */}
      <div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#fff] z-30"></div>
      {/* Left bottom corner */}
      <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-row items-center justify-between h-full">
        <div className="flex flex-row items-center gap-2">
          <img src={clipboard} alt="clipboard" />
          <p className="text-xs uppercase">{title}</p>
        </div>
        <div>
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

const StyledItem: FC<{ title: string; caption: string; icon: ReactNode; rightTop: ReactNode; rightBottom: ReactNode; decorator: ReactNode }> = ({ title, caption, icon, rightTop, rightBottom, decorator }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      {decorator}
      <StyledBox className="w-full">
        <div className="flex flex-row items-center justify-between w-full p-2 gap-2">
          <StyledBox className="p-2 bg-[#0d191a]">
            {icon}
          </StyledBox>
          <div className="flex flex-col w-full gap-1">
            <div className="flex flex-row items-center justify-between">
              <p className="text-xs uppercase">{title}</p>
              {rightTop}
            </div>
            <div className="flex flex-row items-center justify-between">
              <span className="text-[10px] text-[#C8FFD3] uppercase">{caption}</span>
              {rightBottom}
            </div>
          </div>
        </div>
      </StyledBox>
    </div>
  );
};

const MockIcon: FC = () => {
  return (
    <img src={imageFaceIcon} alt="image face" />
  )
}

const RapidPerceptionAssessmentItem: FC<{ title: string; score: number }> = ({ title, score }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-2 border-t border-[#1E2927]">
      <div className="flex flex-row items-center gap-2">
        <img src={metricListIcon} alt="metric list" />
        <p className="text-[10px] text-[#C8FFD3] uppercase">{title}</p>
      </div>
      <div>
        <p className="text-xs text-[#C8FFD3] uppercase">{score}<span className="text-[10px] text-[#C8FFD380]">/100</span></p>
      </div>
    </div>
  )
}

const CompletedButton: FC = () => {
  return (
    <div className={`relative p-0 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-row items-center justify-center gap-2 p-2 h-full">
        <p className="text-[10px] text-[#C8FFD3] uppercase pt-1">completed</p>
        <img src={checkIcon} alt="check" />
      </div>
    </div>
  )
}