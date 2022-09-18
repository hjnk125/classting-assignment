import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		primary: "rgb(0, 200, 150)",
		white: "#fff",
		black: "#000",
		gray: "#6a6a6a",
		red: "#CF0000",
	},
	heights: {
		header: "50px",
		footer: "100px"
	}
};

export type ThemeType = { theme: typeof theme };

export default theme;
