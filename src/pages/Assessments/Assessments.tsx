import { FC, ReactNode } from "react";
import { Layout } from "@/components/Layout";
import clipboard from "@/assets/images/clipboard-icon.svg";
import rightArrow from "@/assets/images/right-arrow-icon.svg";
import documentIcon from "@/assets/images/document-icon.svg";
import imageFaceIcon from "@/assets/images/image-face-icon.svg";
import metricListIcon from "@/assets/images/metric-list-icon.svg";
import reportIcon from "@/assets/images/report-icon.svg";
import boxes from "@/assets/images/boxes.svg";
import lockedBoxes from "@/assets/images/locked-boxes.svg";
import { StyledBox } from "@/components/StyledBox";
import checkIcon from "@/assets/images/check-icon.svg";
import back_logo from "@/assets/images/back-logo.svg";
import resumeIcon from "@/assets/images/resume-icon.svg";
import { DistributionGraph } from "@/components/DistributionGraph";

import { contents } from "./contents";
import { TTakeAssessmentStatus } from "@/types";

type AssessmentsProps = {
  user: any;
  nextAssessmentDate: string | null;
  rank: any;
  openAssessment: "twitter" | "interview" | null;
  setOpenAssessment: (openAssessment: "twitter" | "interview" | null) => void;
  takeAssessmentStatus: TTakeAssessmentStatus;
  takeAssessment: (option: "twitter" | "interview") => void;
}
export const Assessments: FC<AssessmentsProps> = ({ nextAssessmentDate, rank, user, openAssessment, setOpenAssessment, takeAssessmentStatus, takeAssessment }) => {
  return (
    <Layout>
      <div className="flex flex-row gap-8 py-12 px-36 w-full h-full">
        <div className="flex flex-col gap-4 w-[35%]">
          <StyledHeader title="Available Assessments" />
          {
            Object.keys(takeAssessmentStatus).map((key) => (
              !takeAssessmentStatus[key] &&
              <StyledItem
                onClick={() => setOpenAssessment(key as "twitter" | "interview")}
                className={``}
                title={contents[key as "twitter" | "interview"].title}
                caption={contents[key as "twitter" | "interview"].caption}
                icon={<MockIcon />}
                rightTop={<p></p>}
                rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">5 MIN</p>}
                decorator={<img src={documentIcon} alt="document" />}
              />
            ))
          }
          <StyledHeader title="Completed Assessments" />
          {
            Object.keys(takeAssessmentStatus).map((key) => (
              takeAssessmentStatus[key] &&
              <StyledItem
                onClick={() => setOpenAssessment(key as "twitter" | "interview")}
                className={``}
                title={contents[key as "twitter" | "interview"].title}
                caption={contents[key as "twitter" | "interview"].caption}
                icon={<MockIcon />}
                rightTop={<p></p>}
                rightBottom={<p className="text-[10px] text-[#C8FFD380] uppercase">5 MIN</p>}
                decorator={<img src={documentIcon} alt="document" />}
              />
            ))
          }
        </div>
        {
          openAssessment &&
          <div className="flex flex-col gap-4 w-[35%] h-full">
            <StyledBox className="w-full max-h-[50%]">
              <div className="w-full overflow-y-auto">
                <div className="flex flex-row items-center justify-between w-full bg-[#C8FFD306] p-2">
                  <div className="flex flex-row items-center gap-2">
                    <img src={imageFaceIcon} alt="image face" />
                    <p className="text-xs uppercase">{contents[openAssessment].title}</p>
                  </div>
                  <span className="text-[10px] text-[#C8FFD380] uppercase">Medium</span>
                </div>
                {
                  contents[openAssessment].focus && contents[openAssessment].focus.length > 0 &&
                  <div className="flex flex-col items-start justify-between w-full p-2">
                    <p className="text-xs text-[#C8FFD380] uppercase py-2">mainly focuses on:</p>
                    <div className="flex flex-col items-center w-full">
                      {
                        contents[openAssessment].focus &&
                        contents[openAssessment].focus.map((focus: string) => (
                          <RapidPerceptionAssessmentItem key={focus} title={focus} score={0} />
                        ))
                      }
                    </div>
                  </div>
                }
              </div>
            </StyledBox>
            <div className="w-full max-h-[50%]">
              <div className="text-[6px] text-[#C8FFD380] uppercase flex flex-row items-center justify-between py-2">
                <span>DYPHIRA INTELLIGENCE METRICS ALGORITHM</span>
                <span>#DESCRIPTION</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              </div>
              <div className="text-[10px] text-[#C8FFD380] font-mono py-2 overflow-y-auto">
                {contents[openAssessment].description}
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
        }
        {
          openAssessment &&
          <div className="w-[30%]">
            <StyledBox className="w-full">
              <div className="flex flex-row items-center justify-between w-full bg-[#C8FFD306] p-2">
                <div className="flex flex-row items-center gap-2">
                  <img src={reportIcon} alt="report" />
                  <p className="text-xs uppercase">{contents[openAssessment].title} ASSESSMENT</p>
                </div>
                <span className=""></span>
              </div>
              <div className="w-full px-4 py-2 flex flex-col items-center gap-2">
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-[#C8FFD3] text-[8px] font-bold uppercase">response evaluation:</p>
                  <p className="text-[#C8FFD3] text-[10px] font-bold uppercase">34<span className="text-[#C8FFD3] text-[8px] font-normal">/50</span></p>
                </div>
                {
                  takeAssessmentStatus[openAssessment] ?
                    <img src={boxes} alt="boxes" className="w-full" />
                    :
                    <img src={lockedBoxes} alt="locked boxes" className="w-full" />
                }
              </div>

              <div className="w-full flex flex-row items-center justify-between border-t border-b border-[#1E2927] py-1 px-2">
                <span className="text-[#C8FFD380] text-[10px] uppercase">{takeAssessmentStatus[openAssessment] ? "time to finish" : "estimated time"}</span>
                <span className="text-[10px] font-bold uppercase">{contents[openAssessment].time}</span>
              </div>
              <div className="w-full flex flex-row items-center justify-between border-b border-[#1E2927] py-1 px-2 bg-[#C8FFD303]">
                <span className="text-[#C8FFD380] text-[10px] uppercase">xp earned</span>
                <div className="flex flex-row items-center gap-1">
                  <span className="text-[10px] font-bold uppercase">{user && user?.twitterScore}</span>
                  <div className="w-1 h-1 rotate-45 border-[1px] border-[#FC0747] -mt-[1px]"></div>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-center p-2">
                <DistributionGraph rank={rank} take={takeAssessmentStatus[openAssessment]} />
              </div>
              <div className="w-full flex flex-row items-center justify-between border-t border-[#1E2927] bg-[#C8FFD303] p-2">
                <span className="text-[10px] text-[#C8FFD380] uppercase">You ranked:</span>
                <p className="text-[10px] text-[#FFF047] font-bold uppercase">{
                  takeAssessmentStatus[openAssessment] ?
                    `Top ${rank.percentile ? rank.percentile.toFixed(1) : "-"}%` :
                    "unranked"
                }</p>
              </div>
            </StyledBox>
            <div className="flex flex-row items-center justify-between py-4">

              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              <div className="w-full bg-[#C8FFF440] h-[0.5px]"></div>
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            </div>
            {
              takeAssessmentStatus[openAssessment] ? <CompletedButton /> : <ResumeButton onClick={() => takeAssessment(openAssessment)} />
            }
          </div>
        }
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img src={back_logo} alt="back-logo" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%]" />
      </div>
    </Layout>
  );
};

const StyledHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={`relative overflow-hidden p-2 bg-[#C8FFD306] backdrop-blur-sm z-10`}>
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

type StyledItemProps = {
  title: string;
  caption: string;
  icon: ReactNode;
  rightTop: ReactNode;
  rightBottom: ReactNode;
  decorator: ReactNode;
  onClick?: () => void;
  className?: string;
}
const StyledItem: FC<StyledItemProps> = ({ title, caption, icon, rightTop, rightBottom, decorator, onClick, className }) => {
  return (
    <div className={`flex flex-row items-center justify-between gap-2 ${className} ${onClick && "cursor-pointer"}`} onClick={onClick}>
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
    <div className={`relative p-0 overflow-hidden cursor-default`}>
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

const ResumeButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className={`relative p-0 overflow-hidden cursor-pointer`} onClick={onClick}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440] pointer-events-none"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-row items-center justify-center gap-2 p-2 h-full">
        <p className="text-[10px] text-[#C8FFD3] uppercase pt-1">start assessment</p>
        <img src={resumeIcon} alt="resume" />
      </div>
    </div>
  )
}
