import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header activePage="My App" />
			<div className="flex-1">
				{children}
			</div>
			<Footer />
		</div>
	);
};
