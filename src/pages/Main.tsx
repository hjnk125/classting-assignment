import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { fetchQuiz } from "../apis";
import Button from "../components/Button";

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-grow: 1;
	gap: 27px;
	
	h1 {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.22222;
    white-space: pre-line;
	}
`;

function Main() {

	return (
		<Layout>
			<StyledMain>
				<h1>퀴즈를 시작해보세요.</h1>
				<Button buttonType="default" handleClick={fetchQuiz}>퀴즈 풀기</Button>
			</StyledMain>
		</Layout>
	);
}

export default Main;
