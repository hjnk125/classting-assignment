import React from "react";
import { StyledButton } from "./buttonStyle";

type ButtonProps = {
	children: string;
	buttonType?: string;
	handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, buttonType, handleClick }: ButtonProps) => (
	<StyledButton className={buttonType} onClick={handleClick}>
		{children}
	</StyledButton>
);

Button.defaultProps = {
	buttonType: "default",
	handleClick: () => null,
};

export default Button;
