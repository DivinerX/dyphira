import { FC } from "react";
import logo from "@/assets/logo.svg";
import { AngularCorner } from "./AngularCorner";
import { VerticalDivider } from "./VerticalDivider";

interface HeaderProps {
  activePage: string;
}

export const Header: FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" />
        <VerticalDivider style="h-5" />
        <div className="flex items-center gap-2">
          <AngularCorner title="Metrics" link="/" />
          <AngularCorner title="Assessments" link="/assessments" />
          <AngularCorner title="Rankings" link="/rankings" />
          <AngularCorner title="More" link="/more" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        
      </div>
    </header>
  );
};
