import { Layout } from "@/components/Layout";
import { StyledBox } from "@/components/StyledBox";
import { FC, ReactNode } from "react";
import leaderboardDecorator from "@/assets/images/leaderboard-decorator.svg";
import rightArrow from "@/assets/images/right-arrow-icon.svg";
import xIcon from "@/assets/images/x-icon.svg";
import USFlag from "@/assets/images/US-flag.svg";
import USDIcon from "@/assets/images/usdc-coin.png";
import { VerticalDivider } from "@/components/VerticalDivider";

const Leaderboard: FC = () => {
  return (
    <Layout>
      <div className="px-24 py-16">
        <StyledBox>
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
            <Rank
              rank={1}
              username="John Doe"
              score={100}
              color="#FC0747"
              rankFrom={new Date("2025-01-19")}
              location="United States"
              claimedUSD={100}
              totalPoints={100}
            />
            <Rank
              rank={2}
              username="Jane Doe"
              score={90}
              color="#EC69BD"
              rankFrom={new Date("2025-01-18")}
              location="United States"
              claimedUSD={100}
              totalPoints={100}
            />
            <Rank
              rank={3}
              username="John Smith"
              score={80}
              color="#B7A5FF"
              rankFrom={new Date("2025-01-17")}
              location="United States"
              claimedUSD={100}
              totalPoints={100}
            />
            <Rank
              rank={4}
              username="Jane Smith"
              score={70}
              location="United States"
              claimedUSD={100}
              totalPoints={100}
            />
            <Rank
              rank={5}
              username="John Doe"
              score={60}
              location="United States"
              claimedUSD={100}
              totalPoints={100}
            />
            <Rank
              rank={6}
              username="John Doe"
              score={60}
              location="United States"
              claimedUSD={100}
              totalPoints={100}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2 py-3 border-t border-[#1E2927] w-full">
            <div className="flex flex-row items-center justify-center gap-2">
              <PageButton active={true} page={1} />
              <PageButton page={2} />
              <PageButton page={3} />
              <PageButton page={4} />
              <PageButton page={5} />
            </div>
          </div>
        </StyledBox>
      </div>
    </Layout>
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

type RankProps = {
  rank: number,
  username: string,
  score: number,
  color?: string,
  location: string,
  claimedUSD: number,
  totalPoints: number,
  rankFrom?: Date
}

const Rank: FC<RankProps> = ({ rank, username, score, color = "#C8FFD3", rankFrom, location, claimedUSD, totalPoints }) => {
  // console.log(color)
  const containerStyle = `flex flex-row items-center py-1 px-2 border-t border-[#1E2927] gap-2 w-full bg-linear-gradient(to right, ${color} 10%, transparent 50%)`
  console.log(containerStyle)
  return (
    <div className={containerStyle}>
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
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="x-icon" className="w-2 h-2" />
            </a>
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
                  <p className={`text-[10px] text-[#FFEC7E] uppercase pt-1 -mt-2`}>{rankFrom.toLocaleDateString()}</p>
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
            <p className={`text-[10px] uppercase`}>{claimedUSD}</p>
            <img src={USDIcon} alt="usd-icon" className="-mt-1" />
          </div>
        </div>
        <div className="w-[25%] flex flex-col">
          <span className="text-[8px] text-[#C8FFD380] uppercase">total points</span>
          <div className="flex flex-row items-center justify-start gap-1">
            <div className="w-1 h-1 border border-[#FC0747] bg-[#FC074726] rotate-45 -mt-[2px]"></div>
            <p className={`text-[10px] uppercase`}>{totalPoints}</p>
          </div>
        </div>
        <div className="w-[20%] flex flex-col items-end">
          <span className="text-[8px] text-[#C8FFD380] uppercase">overall score</span>
          <div className="flex flex-row items-center justify-start gap-1">
            <div className="w-1 h-1 border border-[#FC0747] bg-[#FC074726] rotate-45 -mt-[2px]"></div>
            <p className={`text-[10px] uppercase`}>{score}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard;

