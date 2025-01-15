import { FC, useState } from "react";
import logo from "@/assets/images/logo.svg";
import { VerticalDivider } from "./VerticalDivider";
import settingIcon from "@/assets/images/setting-icon.svg";
import notiIcon from "@/assets/images/noti-icon.svg";
import avatar from "@/assets/images/avatar.png";
import headerBorder from "@/assets/images/header-border.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledBox } from "./StyledBox";

interface HeaderProps {
  activePage: string;
}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const activePage = useLocation().pathname;
  return (
    <header className="flex flex-col px-10 py-5 gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" />
          <VerticalDivider style="h-5" />
          <div className="flex items-center gap-2">
            <HoverChangeStyledBox title="Metrics" link={() => navigate("/metrics")} activePage={activePage} />
            <HoverChangeStyledBox title="Assessments" link={() => navigate("/assessments")} activePage={activePage} />
            <HoverChangeStyledBox title="Rankings" link={() => navigate("/rankings")} activePage={activePage} />
            <HoverChangeStyledBox title="More" link={() => navigate("/more")} activePage={activePage} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StyledBox className="h-[22px] items-center">
            <div className="flex flex-col p-[4px]">
              <div className="flex justify-end">
                <span className="text-[6px] leading-none uppercase text-[#C8FFD3]">points</span>
              </div>
              <div className="flex items-center justify-start gap-1">
                <span className="text-[10px] leading-none font-bold text-[#C8FFD3]">17430</span>
                <div className="w-1 h-1 border-[1px] rotate-45 border-[#F00]"></div>
              </div>
            </div>
          </StyledBox>
          <StyledBox>
            <div className="p-[6px]">
              <img src={settingIcon} alt="setting" className="h-[10px]" />
            </div>
          </StyledBox>
          <NotificationBox hasNotification={true} />
          <VerticalDivider style="h-5" />
          <StyledBox>
            <img src={avatar} alt="avatar" className="h-[22px]" />
          </StyledBox>
        </div>
      </div>
      <img src={headerBorder} alt="header-border" className="w-full h-[6px]" />
    </header>
  );
};

interface HoverChangeStyledBoxProps {
  title: string;
  link: () => void;
  activePage: string;
}

const HoverChangeStyledBox: FC<HoverChangeStyledBoxProps> = ({ title, link, activePage }) => {
  const [isHover, setIsHover] = useState(false);

  console.log(activePage);

  return (
    <div
      className="relative p-0 text-[#C8FFD3] h-[22px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={link}
    >
      {
        isHover || activePage === `/${title.toLowerCase()}` ? (
          <>
            <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>

            <div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#fff] z-30"></div>

            <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
            <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
            <div className="flex items-center h-full">
              <span>
                <div className="px-5 py-1">
                  <p className="text-[#C8FFF480] uppercase text-[10px]">{title}</p>
                </div>
              </span>
            </div>
          </>
        ) : (
          <>
            {/* Right top corner */}
            < div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#C8FFD3]"></div>
            {/* Left bottom corner */}
            <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#C8FFD3]"></div>
            <span onClick={link}>
              <div className="px-5 py-1">
                <p className="text-[#C8FFF480] uppercase text-[10px]">{title}</p>
              </div>
            </span>
          </>
        )
      }
    </div >
  );
};

interface NotificationBoxProps {
  hasNotification: boolean;
}

const NotificationBox: FC<NotificationBoxProps> = ({ hasNotification }) => {
  return (
    hasNotification ? (
      <div className="relative p-0 h-[22px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
        {/* Right top corner */}
        <div className="absolute top-0 right-0 w-1 h-1 bg-[#f00] z-30 border-[1px] border-transparent"></div>
        {/* Left bottom corner */}
        <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
        <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
        <div className="flex items-center h-full">
          <div className="p-[6px]">
            <img src={notiIcon} alt="noti" className="h-[10px]" />
          </div>
        </div>
      </div>
    ) : (
      <StyledBox>
        <div className="p-[6px]">
          <img src={notiIcon} alt="noti" className="h-[10px]" />
        </div>
      </StyledBox>
    )
  )
}
