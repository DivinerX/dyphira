import { FC } from "react";
import borderVector from "@/assets/images/borderVector.svg";
import bar_code from "@/assets/images/bar_code.svg";
import telegram_icon from "@/assets/images/telegram-icon.svg";
import x_icon from "@/assets/images/x-icon.svg";
import github_icon from "@/assets/images/github-icon.svg";
import { VerticalDivider } from "./VerticalDivider";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return <footer className="flex flex-col items-center justify-between mt-4">
    <div className="flex justify-between w-full px-11 -mb-4 h-8">
      <div className="flex flex-row items-center gap-2">
        <img src={bar_code} alt="bar_code" />
        <VerticalDivider style="h-4" />
        <div className="flex flex-col">
          <span className="text-[8px] uppercase">User benchmark test</span>
          <span className="text-[8px] uppercase">Diphyra intelligence @ {new Date().getFullYear()}</span>
        </div>
      </div>
      <div className="flex flex-row items-end gap-2">
        <span className="text-[8px] uppercase bg-gradient-to-b from-[#C8FFD3] via-[#C8FFD3] to-[#C8FFF480] bg-clip-text text-transparent">Dyphira Intelligence Technology</span>
        <div className="flex flex-row items-center pb-2">
          <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
          <div className="w-[40vw] bg-[#C8FFF440] h-[0.5px]"></div>
          <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
        </div>
        <span className="text-[8px] uppercase bg-gradient-to-b from-[#C8FFD3] via-[#C8FFD3] to-[#C8FFF480] bg-clip-text text-transparent">User benchmark analytics summary</span>
      </div>
      <div className="flex flex-row items-center gap-2 pl-20">
        <SocialLink icon={telegram_icon} link="https://t.me/diphra" title="Telegram" />
        <SocialLink icon={x_icon} link="https://x.com/diphyra" title="X" />
        <SocialLink icon={github_icon} link="https://github.com/diphyra" title="Github" />
      </div>
    </div>
    <img src={borderVector} alt="borderVector" className="w-full" />
  </footer>;
};

interface SocialLinkProps {
  icon: string;
  link: string;
  title: string;
}

const SocialLink: FC<SocialLinkProps> = ({ icon, link, title }) => {
  return (
    <div className="relative p-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
      {/* Right top corner */}
      <div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#fff] z-30"></div>
      {/* Left bottom corner */}
      <div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#fff] z-30"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <Link to={link}>
        <div className="p-[6px]">
          <img src={icon} alt={title} className="h-[10px]" />
        </div>
      </Link>
    </div>
  );
};
