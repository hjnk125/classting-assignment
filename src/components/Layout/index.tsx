import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLayout, StyledHeader, StyledContent, StyledFooter } from "./layoutStyle";
import Button from "../Button";

type LayoutProps = {
	children: JSX.Element;
	page: string;
};

const Layout: React.FC<LayoutProps> = ({ children, page }) => {

	const navigate = useNavigate();

	return (
		<StyledLayout>
			<StyledHeader>
				<div id="header">
					{page === "quiz" && <Button buttonType="outlined" handleClick={() => navigate("/")}>
						메인으로
					</Button>}
					<div className="timer">
						00:00:00
					</div>
				</div>
			</StyledHeader>
			<StyledContent>{children}</StyledContent>
			<StyledFooter>
				<b>프론트엔드 개발자 과제</b>
				<p>김호정 | hjnk125@gmail.com</p>
				<a href="https://github.com/hjnk125/classting-assignment">https://github.com/hjnk125/classting-assignment</a>
			</StyledFooter>
		</StyledLayout>
	);
};

export default Layout;