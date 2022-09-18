import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		primary: "rgb(0, 200, 150)",
		white: "#fff",
		black: "#212121",
		gray: "#424242",
		correct: "hsl(139, 73%, 87%)",
		wrong: "hsl(0, 95%, 92%)"
	},
	heights: {
		header: "50px",
		footer: "100px"
	}
};

export type ThemeType = { theme: typeof theme };

export default theme;
