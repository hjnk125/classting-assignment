import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import Main from "./pages/Main";
import GlobalStyle from "./styles/gloabalStyle";
import theme from "./styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RecoilRoot>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />} />
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</ThemeProvider>
	);
}

export default App;
