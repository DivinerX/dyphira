import { FC } from "react";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
