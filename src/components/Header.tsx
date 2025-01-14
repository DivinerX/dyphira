import { FC } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { AngularCorner } from "./AngularCorner";

interface HeaderProps {
  activePage: string;
}

export const Header: FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-2">
          <AngularCorner title="Metrics" link="/" />
          <AngularCorner title="Assessments" link="/assessments" />
          <AngularCorner title="Rankings" link="/rankings" />
          <AngularCorner title="More" link="/more" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
};
