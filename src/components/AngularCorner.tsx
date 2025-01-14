import { FC } from "react";
import { Link } from "react-router-dom";

interface AngularCornerProps {
	title: string;
	link: string;
}

export const AngularCorner: FC<AngularCornerProps> = ({ title, link }) => {
	return (
		<div className="relative p-0 text-[#C8FFD3]">
			{/* Right top corner */}
			<div className="absolute top-0 right-0 w-1 h-1 border-r-[0.5px] border-t-[0.5px] border-[#C8FFD3]"></div>
			{/* Left bottom corner */}
			<div className="absolute bottom-0 left-0 w-1 h-1 border-l-[0.5px] border-b-[0.5px] border-[#C8FFD3]"></div>
			<Link to={link}>
				<div className="px-5 py-1">
					<p className="text-[#C8FFF480] uppercase text-[10px]">{title}</p>
				</div>
			</Link>
		</div>
	);
};
