import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sider } from "./Sider";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-full" id="layout">
			<Header />
			<div className="flex-1 flex flex-col p-4 relative">
				{children}
				<Sider />
			</div>
			<Footer />
		</div>
	);
};
