import React from "react";
import { StyledLayout, StyledHeader, StyledContent, StyledFooter } from "./layoutStyle";

type LayoutProps = {
	children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<StyledLayout>
		<StyledHeader>
			<div id="header">
				header
			</div>
		</StyledHeader>
		<StyledContent>{children}</StyledContent>
		<StyledFooter>
			footer
		</StyledFooter>
	</StyledLayout>
);

export default Layout;