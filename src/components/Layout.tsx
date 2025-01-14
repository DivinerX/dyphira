import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sider } from "./Sider";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header activePage="My App" />
			<div className="flex-1 flex flex-col">
				{children}
			</div>
			<Footer />
			<Sider />
		</div>
	);
};
