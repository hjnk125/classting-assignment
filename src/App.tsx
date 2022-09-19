import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/gloabalStyle";
import theme from "./styles/theme";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RecoilRoot>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</ThemeProvider>
	);
}

export default App;
