import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLayout, StyledHeader, StyledContent, StyledFooter } from "./layoutStyle";
import Button from "../Button";
import Timer from "../Timer";

type LayoutProps = {
	children: JSX.Element;
	page: string;
};

const Layout: React.FC<LayoutProps> = ({ children, page }) => {

	const navigate = useNavigate();

	return (
		<StyledLayout>
			<StyledHeader className={page !== "main" ? "shadow" : ""}>
				<div id="header">
					{page !== "main" && <Button buttonType="outlined" handleClick={() => navigate("/")}>
						메인으로
					</Button>}
					{page === "quiz" && <div className="timer">
						<Timer />
					</div>}
				</div>
			</StyledHeader>
			<StyledContent>{children}</StyledContent>
			<StyledFooter>
				<div id="footer">
					<b>프론트엔드 개발자 과제</b>
					<p>김호정 | hjnk125@gmail.com</p>
					<a href="https://github.com/hjnk125/classting-assignment">https://github.com/hjnk125/classting-assignment</a>
				</div>
			</StyledFooter>
		</StyledLayout>
	);
};

export default Layout;