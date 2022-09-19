import React from "react";
import { StyledButton } from "./buttonStyle";

type ButtonProps = {
	children: JSX.Element | string;
	buttonType?: string;
	handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, buttonType, handleClick }: ButtonProps) => (
	<StyledButton className={buttonType} onClick={handleClick}>
		<div className="btn-content">
			{children}
		</div>
	</StyledButton>
);

Button.defaultProps = {
	buttonType: "default",
	handleClick: () => null
};

export default Button;
