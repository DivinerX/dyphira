import { FC } from "react";
import { Header } from "./Header";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return <>
		<Header title="My App" />
		{children}
	</>;
};
