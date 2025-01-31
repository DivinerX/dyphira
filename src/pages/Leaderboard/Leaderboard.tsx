import { Layout } from "@/components/Layout";
import { StyledBox } from "@/components/StyledBox";
import { FC, ReactNode } from "react";
import leaderboardDecorator from "@/assets/images/leaderboard-decorator.svg";
import rightArrow from "@/assets/images/right-arrow-icon.svg";
import xIcon from "@/assets/images/x-icon.svg";
import USFlag from "@/assets/images/US-flag.svg";
import USDIcon from "@/assets/images/usdc-coin.png";
import back_logo from "@/assets/images/back-logo.svg";
import { VerticalDivider } from "@/components/VerticalDivider";
import { MovePageButton } from "@/components/MovePageButton";
import { TLeaderboard } from "@/types";
import { PageButtons } from "@/components/PageButton";

type TLeaderboardProps = {
  leaderboard: TLeaderboard[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
  setPage: (page: number) => void;
}

export const Leaderboard: FC<TLeaderboardProps> = ({ leaderboard, status, error, page, setPage }) => {
  return (
    <>
      <Layout>
        <div className="px-36 py-16">
          <StyledBox className="backdrop-blur-sm">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-start gap-2 p-2 border-b-[0.5px] border-[#1E2927]">
                <img src={leaderboardDecorator} alt="leaderboard-decorator" />
                <p className="text-[10px] uppercase">Score Leaderboard</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-2 p-2 w-full">
              <div className={`relative p-0 overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="flex items-center justify-start gap-2 p-1">
                    <StyledButton>
                      <p className="text-[10px] text-[#C8FFD380] uppercase pb-[2px]">24h</p>
                    </StyledButton>
                    <StyledButton>
                      <p className="text-[10px] text-[#C8FFD380] uppercase pb-[2px]">7d</p>
                    </StyledButton>
                    <StyledButton>
                      <p className="text-[10px] text-[#C8FFD380] uppercase pb-[2px]">30d</p>
                    </StyledButton>
                    <div className={`relative p-0 overflow-hidden`}>
                      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#FC074780]"></div>
                      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#FC074780] bg-[#0d191a] z-30"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#FC074780] bg-[#0d191a] z-30"></div>
                      <div className="flex flex-row items-center justify-center gap-2 px-3 pt-1 bg-[#FC074726]">
                        <p className="text-[10px] text-[#C8FFD380] uppercase pb-[2px]">All Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <span className="text-[10px] text-[#C8FFD380] uppercase pt-1">Sort by:</span>
                <div className="flex flex-row items-center justify-start gap-2 p-1">
                  <div className={`relative p-0 overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
                    <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
                    <div className="flex flex-row items-center justify-center gap-2 px-3">
                      <p className="text-[10px] text-[#C8FFD3] uppercase pb-[2px] pt-1">Score</p>
                      <img src={rightArrow} alt="right-arrow" className="w-2 h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full">
              {
                error ? (
                  <div className="flex flex-row items-center justify-center gap-2 py-24">
                    <p className="text-[10px] text-[#C8FFD3] uppercase">Error loading leaderboard</p>
                  </div>
                ) : status === "loading" ? (
                  <div className="flex flex-row items-center justify-center gap-2 py-24">
                    <p className="text-[10px] text-[#C8FFD3] uppercase">Loading leaderboard...</p>
                  </div>
                ) : (
                  leaderboard.length > 0 ?
                    leaderboard.slice((page - 1) * 10, page * 10).map((leader, index) => (
                      <Rank
                        key={leader._id}
                        rank={page * 10 - 10 + index + 1}
                        username={leader.username}
                        twitterId={leader.twitterId}
                        score={leader.overallScore}
                        rankFrom={new Date("2025-01-19")}
                        location="United States"
                        claimedUSD={leader.totalRewardEarned}
                        totalPoints={leader.twitterScore}
                      />
                    )) : (
                      <div className="flex flex-row items-center justify-center gap-2 p-2">
                        <p className="text-[10px] text-[#C8FFD3]">No data</p>
                      </div>
                    )
                )
              }
            </div>
            <div className="flex flex-row items-center justify-center gap-2 py-3 border-t border-[#1E2927] w-full">
              <div className="flex flex-row items-center justify-center gap-2">
                <MovePageButton direction="previous" onClick={() => setPage(page - 1)} disabled={page === 1} />
                <PageButtons page={page} setPage={setPage} items={leaderboard} itemsPerPage={10} />
                <MovePageButton direction="next" onClick={() => setPage(page + 1)} disabled={page === Math.ceil(leaderboard.length / 10)} />
              </div>
            </div>

          </StyledBox>
        </div>
      </Layout>
      <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <img src={back_logo} alt="back-logo" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%]" />
      </div>
    </>
  )
};

const StyledButton: FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={`relative p-0 overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-row items-center justify-center gap-2 px-3 pt-1">
        {children}
      </div>
    </div>
  )
}


type RankProps = {
  rank: number,
  username: string,
  twitterId: string,
  score: number,
  location: string,
  claimedUSD: number,
  totalPoints: number,
  rankFrom?: Date
}

const Rank: FC<RankProps> = ({ rank, username, twitterId, score, rankFrom, location, claimedUSD, totalPoints }) => {
  const color = rank > 3 ? "#C8FFD3" : rank === 1 ? "#FC0757" : rank === 2 ? "#EC69BD" : "#B7A5FF";
  const style = color !== "#C8FFD3" ? {
    background: `linear-gradient(to right, ${color}40 0%, transparent 40%)`,
    borderImage: `linear-gradient(to right, ${color}40 0%, transparent 40%)`,
    borderImageSlice: 1,
    borderImageSource: `linear-gradient(to right, ${color} 0%, #1E2927 40%)`,
    borderLeft: `1px solid ${color}`,
    borderColor: color,
  } : {}
  return (
    <div className="flex flex-row items-center py-1 px-2 border-t border-[#1E2927] gap-2 w-full" style={style}>
      <div className="w-[40%] flex flex-row items-center justify-start gap-2">
        <div className="flex flex-col">
          <p className={`text-[10px] text-[#C8FFD380] uppercase px-1`} style={{ color, fontWeight: rank < 4 ? "bold" : "normal" }}>[{rank}]</p>
        </div>
        <div className="flex flex-col">
          <VerticalDivider style="h-4" />
        </div>
        <div>
          <span className="text-[8px] text-[#C8FFD380] uppercase">username</span>
          <div className="flex flex-row items-center justify-start gap-2 -mt-1">
            <p className={`text-[10px] uppercase`}>{username}</p>
            {twitterId && (
              <a href={`https://twitter.com/i/user/${twitterId}`} target="_blank" rel="noopener noreferrer">
                <img src={xIcon} alt="x-icon" className="w-2 h-2" />
              </a>
            )}
          </div>
        </div>
        {
          rankFrom && (
            <>
              <div>
                <VerticalDivider style="h-4" />
              </div>
              <div>
                <span className="text-[8px] text-[#C8FFD380] uppercase">leader for</span>
                <div className="flex flex-row items-center justify-start gap-2">
                  {/* <img src={wangIcon} alt="wang-icon"/> */}
                  <p className={`text-[10px] text-[#FFEC7E] uppercase pt-1 -mt-2 bg-blend-color-burn`}>{rankFrom.toLocaleDateString()}</p>
                </div>
              </div>
            </>
          )
        }
      </div>
      <div className="w-[60%] flex flex-row items-center justify-start gap-2">
        <div className="w-[30%] flex flex-col">
          <span className="text-[8px] text-[#C8FFD380] uppercase">location</span>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={USFlag} alt="US-flag" className="-mt-[2px]" />
            <p className={`text-[10px] uppercase`}>{location}</p>
          </div>
        </div>
        <div className="w-[25%] flex flex-col">
          <span className="text-[8px] text-[#C8FFD380] uppercase">USD claimed</span>
          <div className="flex flex-row items-center justify-start gap-1">
            <p className={`text-[10px] uppercase`}>{claimedUSD ? claimedUSD.toFixed(2) : "-"}</p>
            <img src={USDIcon} alt="usd-icon" className="-mt-1" />
          </div>
        </div>
        <div className="w-[25%] flex flex-col">
          <span className="text-[8px] text-[#C8FFD380] uppercase">total points</span>
          <div className="flex flex-row items-center justify-start gap-1">
            <div className="w-1 h-1 border border-[#FC0747] bg-[#FC074726] rotate-45 -mt-[2px]"></div>
            <p className={`text-[10px] uppercase`}>{Math.floor(totalPoints)}</p>
          </div>
        </div>
        <div className="w-[20%] flex flex-col items-end">
          <span className="text-[8px] text-[#C8FFD380] uppercase">overall score</span>
          <div className="flex flex-row items-center justify-start gap-1">
            <div className="w-1 h-1 border border-[#FC0747] bg-[#FC074726] rotate-45 -mt-[2px]"></div>
            <p className={`text-[10px] uppercase`}>{score ? score.toFixed(2) : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

type TPageButtonsProps = {
  page: number,
  setPage: (page: number) => void,
  leaderboard: TLeaderboard[]
}


