import { FC, ReactNode, useState } from "react";
import logo from "@/assets/images/logo.svg";
import { VerticalDivider } from "./VerticalDivider";
import settingIcon from "@/assets/images/setting-icon.svg";
import notiIcon from "@/assets/images/noti-icon.svg";
import avatar from "@/assets/images/avatar.png";
import headerBorder from "@/assets/images/header-border.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  activePage: string;
}

export const Header: FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className="flex flex-col px-10 py-5 gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" />
          <VerticalDivider style="h-5" />
          <div className="flex items-center gap-2">
            <HoverChangeStyledBox title="Metrics" link="/" />
            <HoverChangeStyledBox title="Assessments" link="/assessments" />
            <HoverChangeStyledBox title="Rankings" link="/rankings" />
            <HoverChangeStyledBox title="More" link="/more" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StyledBox>
            <div className="flex flex-col px-[6px]">
              <div className="flex justify-end">
                <span className="text-[6px] leading-[6px] uppercase text-[#C8FFD3]">points</span>
              </div>
              <div className="flex items-center justify-start gap-1">
                <span className="text-[10px] leading-[10px] font-bold text-[#C8FFD3]">17430</span>
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
  link: string;
}

const HoverChangeStyledBox: FC<HoverChangeStyledBoxProps> = ({ title, link }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative p-0 text-[#C8FFD3] h-[22px] overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {
        isHover ? (
          <>
            <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#D9D9D9]"></div>

            <div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#fff] z-30"></div>

            <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
            <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#D9D9D9] bg-[#0d191a] z-30"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#D9D9D9] bg-[#0d191a] z-30"></div>
            <div className="flex items-center h-full">
              <Link to={link}>
                <div className="px-5 py-1">
                  <p className="text-[#C8FFF480] uppercase text-[10px]">{title}</p>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Right top corner */}
            < div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#C8FFD3]"></div>
            {/* Left bottom corner */}
            <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#C8FFD3]"></div>
            <Link to={link}>
              <div className="px-5 py-1">
                <p className="text-[#C8FFF480] uppercase text-[10px]">{title}</p>
              </div>
            </Link>
          </>
        )
      }
    </div >
  );
};

interface StyledBoxProps {
  children: ReactNode;
}

const StyledBox: FC<StyledBoxProps> = ({ children }) => {
  return (
    <div className="relative p-0 h-[22px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#D9D9D9]"></div>
      {/* Right top corner */}
      <div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#fff] z-30"></div>
      {/* Left bottom corner */}
      <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#D9D9D9] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#D9D9D9] bg-[#0d191a] z-30"></div>
      <div className="flex items-center h-full">{children}</div>
    </div>
  );
};

interface NotificationBoxProps {
  hasNotification: boolean;
}

const NotificationBox: FC<NotificationBoxProps> = ({ hasNotification }) => {
  return (
    hasNotification ? (
      <div className="relative p-0 h-[22px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#D9D9D9]"></div>
        {/* Right top corner */}
        <div className="absolute top-0 right-0 w-1 h-1 bg-[#f00] z-30 border-[1px] border-transparent"></div>
        {/* Left bottom corner */}
        <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
        <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#D9D9D9] bg-[#0d191a] z-30"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#D9D9D9] bg-[#0d191a] z-30"></div>
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
