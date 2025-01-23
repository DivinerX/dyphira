import { FC } from "react";
import { Layout } from "../components/Layout";
import referralDecorator from "@/assets/images/referral-decorator.svg";
import { StyledBox, StyledBoxWithoutWhiteCorners } from "@/components/StyledBox";
import { VerticalDivider } from "@/components/VerticalDivider";
import EarnedBarChart from "@/components/EarnedBarChart";
import redBrain from "@/assets/images/red-brain.svg";
import upArrow from "@/assets/images/up-arrow.svg";
import referralStatisticsDecorator from "@/assets/images/referal-statistics-decorator.svg";
import clipboardIcon from "@/assets/images/clipboard-icon.svg";
import avatar from "@/assets/images/avatar.png";
import verifiedIcon from "@/assets/images/verified-icon.svg";
import telegramIcon from "@/assets/images/telegram-icon.svg";
import twitterIcon from "@/assets/images/x-icon.svg";
import shareIcon from "@/assets/images/share-icon.svg";
import { MovePageButton } from "@/components/MovePageButton";

const referralLogs = [
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: true,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["twitter", "telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["twitter", "telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["twitter", "telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["twitter", "telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["telegram"],
  },
  {
    avatar: avatar,
    name: "chrome 307",
    referralId: "#305678",
    verified: false,
    overallScore: 84.5,
    pointsGained: 1509.7,
    socials: ["telegram"],
  },
];

const referralActivity = [
  { username: "chrome 307", time: "10:00", activity: "COMPLETED ASSESSMENT #001 AND SCORED 57.90", verified: true, avatar: avatar },
  { username: "chrome 307", time: "10:00", activity: "COMPLETED ASSESSMENT #001 AND SCORED 57.90", verified: true, avatar: avatar },
  { username: "chrome 307", time: "10:00", activity: "COMPLETED ASSESSMENT #001 AND SCORED 57.90", verified: true, avatar: avatar },
  { username: "chrome 307", time: "10:00", activity: "COMPLETED ASSESSMENT #001 AND SCORED 57.90", verified: true, avatar: avatar },
  { username: "chrome 307", time: "10:00", activity: "COMPLETED ASSESSMENT #001 AND SCORED 57.90", verified: true, avatar: avatar },
  { username: "chrome 307", time: "10:00", activity: "COMPLETED ASSESSMENT #001 AND SCORED 57.90", verified: true, avatar: avatar },
];

export const Referrals = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-start justify-center w-[70%] gap-4">
          <div className="w-[66%] flex flex-col">
            <div className="flex flex-row items-start justify-start gap-4 w-full">
              <div className="w-[75%] flex flex-col">
                <StyledHeader title="Referrals" icon={referralDecorator} />
                <div className="flex flex-row items-center justify-between w-full pt-4 pb-2">
                  <span className="text-[6px] text-[#C8FFD380] uppercase">Dyphira intelligence metrics algorithm</span>
                  <span className="text-[6px] text-[#C8FFD380] uppercase">#referral_system</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                  <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                  <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                </div>
                <div className="flex flex-row w-full py-4 gap-2">
                  <div className="w-1/2 text-[10px] text-[#C8FFD3] font-mono">
                    <p>This task evaluates your ability</p>
                    <p>Process visual information, recognize patterns, and react quickly under pressure.</p>
                    <p>Process visual information, recognize patterns, and react quickly.</p>
                  </div>
                  <div className="w-1/2 h-28 bg-[#C8FFD306]">
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  {/* referral link and share button */}
                  <div className="w-[60%]">
                    <StyledBoxWithoutWhiteCorners className="bg-[#00000040]">
                      <div className="flex flex-row items-center justify-start w-full px-2 py-1 gap-2 cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText('www.dyphira.com/ref/290561')
                            .then(() => {
                              alert('Copied to clipboard');
                              console.log('Copied to clipboard');
                            })
                            .catch(err => {
                              console.error('Failed to copy:', err);
                            });
                        }}>
                        <img src={clipboardIcon} alt="clipboard icon" />
                        <p className="text-[10px] text-[#C8FFD380] -mb-[2px] uppercase">www.dyphira.com/ref/290561</p>
                      </div>
                    </StyledBoxWithoutWhiteCorners>
                  </div>
                  <div className="w-[40%]">
                    <StyledBoxWithoutWhiteCorners>
                      <div className="flex flex-row items-center justify-center w-full gap-2">
                        <p className="text-[10px] text-[#C8FFD3] uppercase -mb-[2px] py-1">share link</p>
                        <img src={shareIcon} alt="share icon" />
                      </div>
                    </StyledBoxWithoutWhiteCorners>
                  </div>
                </div>
              </div>
              <div className="w-[25%] flex flex-col gap-2">
                <StyledBoxWithoutWhiteCorners>
                  <div className="bg-[#C8FFD306] w-full">
                    <span className="text-[10px] text-[#C8FFD380] pl-2 w-full uppercase">Total referred</span>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full px-2 gap-2">
                    <img src={redBrain} alt="red brain" />
                    <p className="-mb-[2px]">42</p>
                  </div>
                  <div className="flex flex-row items-center justify-between px-2 w-full">
                    <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                    <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                    <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full px-2 gap-1">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img src={upArrow} alt="up arrow" />
                      <p className="-mb-[2px] text-[8px] text-[#C8FFD3]">37</p>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#C8FFD380] uppercase">past 7 days</span>
                    </div>
                  </div>
                </StyledBoxWithoutWhiteCorners>
                <StyledBoxWithoutWhiteCorners>
                  <div className="bg-[#C8FFD306] w-full">
                    <span className="text-[10px] text-[#C8FFD380] pl-2 w-full uppercase">referral points</span>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full px-2 gap-2">
                    <img src={redBrain} alt="red brain" />
                    <p className="-mb-[2px]">42</p>
                  </div>
                  <div className="flex flex-row items-center justify-between px-2 w-full">
                    <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                    <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                    <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full px-2 gap-1">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img src={upArrow} alt="up arrow" />
                      <p className="-mb-[2px] text-[8px] text-[#C8FFD3]">37</p>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#C8FFD380] uppercase">past 7 days</span>
                    </div>
                  </div>
                </StyledBoxWithoutWhiteCorners>
                <StyledBoxWithoutWhiteCorners>
                  <div className="bg-[#C8FFD306] w-full">
                    <span className="text-[10px] text-[#C8FFD380] pl-2 w-full uppercase">clicks</span>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full px-2 gap-2">
                    <img src={redBrain} alt="red brain" />
                    <p className="-mb-[2px]">42</p>
                  </div>
                  <div className="flex flex-row items-center justify-between px-2 w-full">
                    <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                    <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                    <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full px-2 gap-1">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img src={upArrow} alt="up arrow" />
                      <p className="-mb-[2px] text-[8px] text-[#C8FFD3]">37</p>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#C8FFD380] uppercase">past 7 days</span>
                    </div>
                  </div>
                </StyledBoxWithoutWhiteCorners>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-4 w-full">
              <div className="flex flex-col items-center justify-between w-[75%]">
                <div className="flex flex-row items-center justify-between pt-2 w-full">
                  <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                  <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                  <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                </div>
                <div className="flex flex-row items-center justify-between w-full py-2">
                  <span className="text-[6px] text-[#C8FFD380] uppercase">Dyphira intelligence<br />metrics algorithm</span>
                  <span className="text-[6px] text-[#C8FFD380] uppercase text-right">ID<br /> #28950</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-between w-[25%]">
                <div className="flex flex-row items-center justify-between pt-2 w-full">
                  <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                  <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
                  <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                </div>
                <div className="flex flex-row items-center justify-between w-full py-2">
                  <span className="text-[6px] text-[#C8FFD380] uppercase">Dyphira intelligence<br />metrics algorithm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[44%] flex flex-col gap-2">
            <StyledBoxWithoutWhiteCorners>
              <div className="bg-[#C8FFD306] w-full flex flex-row items-center justify-start gap-2 p-2 border-b border-[#C8FFF440]">
                <img src={referralStatisticsDecorator} alt="referral statistics decorator" />
                <span className="text-[10px] w-full uppercase -mb-[2px]">referral points</span>
              </div>
              <div className="flex flex-row items-center justify-end w-full p-2">
                <StyledBoxWithoutWhiteCorners>
                  <div className="flex flex-row items-center p-1 gap-1">
                    <StyledBoxWithoutWhiteCorners borderColor="#FC074780" className="bg-[#FC074726]">
                      <span className="text-[10px] text-white uppercase py-1 px-2 -mb-[2px]">referrals</span>
                    </StyledBoxWithoutWhiteCorners>
                    <StyledBoxWithoutWhiteCorners>
                      <span className="text-[10px] text-white uppercase py-1 px-2 -mb-[2px]">Earnings</span>
                    </StyledBoxWithoutWhiteCorners>
                  </div>
                </StyledBoxWithoutWhiteCorners>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-2 h-36">
                <EarnedBarChart />
              </div>
            </StyledBoxWithoutWhiteCorners>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center w-[70%] gap-4">
          <div className="w-[70%]">
            <StyledBoxWithoutWhiteCorners>
              <div className="bg-[#C8FFD306] w-full">
                <span className="text-[10px] text-[#C8FFD380] pl-2 w-full uppercase">referral points</span>
              </div>
              <div className="flex flex-col items-center justify-between w-full">
                <table className="w-full border-t border-b border-[#C8FFF440]">
                  <thead>
                    <tr className="text-[10px] text-[#C8FFD380] uppercase">
                      <td className="pl-2 py-2">referrals</td>
                      <td>referral id</td>
                      <td>verification</td>
                      <td>overall score</td>
                      <td>points gained</td>
                      <td className="pr-2 text-right">socials</td>
                    </tr>
                  </thead>
                  <tbody>
                    {referralLogs.map((log, index) => (
                      <tr className="text-[10px] border-t border-[#C8FFF440]" key={index}>
                        <td className="pl-2 flex flex-row items-center justify-start gap-2 py-1">
                          <div className="w-5 h-5">
                            <StyledBoxWithoutWhiteCorners className="p-0" borderColor="">
                              <div className="w-full h-full">
                                <img src={log.avatar} alt="avatar" className="w-full h-full object-cover" />
                              </div>
                            </StyledBoxWithoutWhiteCorners>
                          </div>
                          <p className="text-[10px] text-white">{log.name}</p>
                        </td>
                        <td>
                          <span className="text-[10px] text-[#C8FFD380]">{log.referralId}</span>
                        </td>
                        <td>
                          <span className="text-[10px] text-[#C8FFD380]">
                            {log.verified ?
                              (<span className="text-[10px] text-[#C8FFD3] uppercase flex flex-row items-center justify-start gap-1">verified<img src={verifiedIcon} alt="verified icon" /></span>) :
                              (<span className="text-[10px] text-[#C8FFD380] uppercase">unverified</span>)
                            }
                          </span>
                        </td>
                        <td>
                          <span className="text-[10px] text-[#C8FFD3]">{log.overallScore}</span>
                        </td>
                        <td>
                          <div className="flex flex-row items-center justify-start gap-1">
                            <div className="w-1 h-1 rotate-45 bg-[#FC074726] border border-[#FC0747]"></div>
                            <span className="text-[10px] text-[#C8FFD3]">{log.pointsGained}</span>
                          </div>
                        </td>
                        <td className="pr-2 text-right">
                          <div className="flex flex-row items-center justify-end gap-1">
                            {
                              log.socials.includes("twitter") &&
                              <StyledBox className="p-1">
                                <img src={twitterIcon} alt="twitter icon" className="w-2" />
                              </StyledBox>
                            }
                            {
                              log.socials.includes("telegram") &&
                              <StyledBox className="p-1">
                                <img src={telegramIcon} alt="telegram icon" className="w-2 h-2" />
                              </StyledBox>
                            }
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex flex-row items-center justify-center p-1 w-full">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <MovePageButton direction="previous" />
                    <PageButton active={true} page={1} />
                    <PageButton page={2} />
                    <PageButton page={3} />
                    <PageButton page={4} />
                    <PageButton page={5} />
                    <MovePageButton direction="next" />
                  </div>
                </div>
              </div>
            </StyledBoxWithoutWhiteCorners>
          </div>
          <div className="w-[30%]">
            <StyledBoxWithoutWhiteCorners>
              <div className="bg-[#C8FFD306] w-full">
                <span className="text-[10px] text-[#C8FFD380] pl-2 w-full uppercase">referral activity</span>
              </div>
            </StyledBoxWithoutWhiteCorners>
            <div className="flex flex-col items-center justify-center w-full gap-2 py-2">
              {referralActivity.map((item, index) => (
                <ReferralActivityItem {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}


const StyledHeader: FC<{ title: string, icon: string }> = ({ title, icon }) => {
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
          <img src={icon} alt="clipboard" />
          <p className="text-[10px] -mb-[2px] uppercase">{title}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

type ReferralActivityItemProps = {
  username: string;
  avatar: string;
  time: string;
  activity: string;
  verified: boolean;
}

const ReferralActivityItem: FC<ReferralActivityItemProps> = ({ username, time, avatar, activity, verified }) => {
  return (
    <StyledBoxWithoutWhiteCorners className="w-full bg-[#090E0F80]">
      <div className="flex flex-row items-center justify-between w-full gap-2 px-2">
        <StyledBox>
          <img src={avatar} alt="avatar" className="w-6 h-6" />
        </StyledBox>
        <VerticalDivider style="h-5" />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <span className="flex flex-row items-center justify-start gap-1 text-[10px]">{username}{verified && <img src={verifiedIcon} alt="verified icon" />}</span>
            <span className="text-[10px] text-[#C8FFD3]">{time}</span>
          </div>
          <div className="flex flex-row items-start w-full">
            <span className="text-[10px] text-[#C8FFD380] uppercase">{activity}</span>
          </div>
        </div>
      </div>
    </StyledBoxWithoutWhiteCorners>
  )
}

const PageButton: FC<{ active?: boolean, page?: number }> = ({ active = false, page }) => {
  return active ? (
    <div className={`relative p-0 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 bg-[#C8FFD30D]">
        <p className="text-[10px] text-[#C8FFD3]">{page}</p>
      </div>
    </div>
  ) : (
    <p className="text-[10px] text-[#C8FFD3] p-2">{page}</p>
  )
}
