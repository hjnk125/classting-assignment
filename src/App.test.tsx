import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/Main";

describe("<Main /> page renders correctly", () => {
	it("renders title", () => {
		const { getByText } = render(<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>);
		const h1Element = getByText("퀴즈를 시작해보세요.");
		expect(h1Element).toBeInTheDocument();
	})

	it("renders button", () => {
		const { getByRole } = render(<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>);
		const buttonElement = getByRole("button");
		expect(buttonElement).toBeInTheDocument();
	})
})