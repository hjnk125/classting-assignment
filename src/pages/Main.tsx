import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { fetchQuiz } from "../apis";
import { correctAnswersAtom, questionsAtom } from "../store/atoms";

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

  div.main-btn {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

function Main() {

	const setQuestions = useSetRecoilState(questionsAtom);
	const setAnswers = useSetRecoilState(correctAnswersAtom);

	const getRandomAnswerSheet = () => {
		const answer = [] as any[];
		for (let i = 0; i < 10; i += 1) {
			const random = Math.floor(Math.random() * 4);
			if (random === 0 || random === 1 || random === 2 || random === 3) {
				answer.push(random);
			}
		}
		setAnswers(answer);
	};

	const handleClickStart = () => {
		fetchQuiz()
			.then((res) => {
				setQuestions(res);
			});

		getRandomAnswerSheet();
	};

	return (
		<Layout page="main">
			<StyledMain>
				<h1>퀴즈를 시작해보세요.</h1>
				<Button buttonType="default" handleClick={handleClickStart}>
					<div className="main-btn">
						퀴즈 풀기
						<FaArrowRight />
					</div>
				</Button>
			</StyledMain>
		</Layout>
	);
}

export default Main;
