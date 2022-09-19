import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from "recoil";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { fetchQuiz } from "../apis";
import { correctAnswersAtom, questionsAtom, timerAtom, userAnswersAtom } from "../store/atoms";
import { StyledTitle } from "../styles/shared";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  gap: 27px;
`;

function Main() {
	const navigate = useNavigate();

	const setQuestions = useSetRecoilState(questionsAtom);
	const setAnswers = useSetRecoilState(correctAnswersAtom);
	const setUserAnswers = useSetRecoilState(userAnswersAtom);
	const setTimer = useSetRecoilState(timerAtom);

	const getRandomAnswerSheet = () => {
		const answer = [] as (0 | 1 | 2 | 3)[];
		for (let i = 0; i < 10; i += 1) {
			const random = Math.floor(Math.random() * 4);
			if (random === 0 || random === 1 || random === 2 || random === 3) {
				answer.push(random);
			}
		}
		setAnswers(answer);
		setUserAnswers([]);
	};

	const handleClickStart = () => {
		fetchQuiz()
			.then((res) => {
				setQuestions(res);
				getRandomAnswerSheet();
				navigate("/quiz");

				setTimer({start: true, sec: 0})
			});
	};

	return (
		<Layout page="main">
			<StyledMain>
				<StyledTitle>퀴즈를 시작해보세요.</StyledTitle>
				<Button buttonType="default" handleClick={handleClickStart}>
					<>
						퀴즈 풀기
						<FaArrowRight />
					</>
				</Button>
			</StyledMain>
		</Layout>
	);
}

export default Main;
