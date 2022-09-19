import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRedoAlt, FaEdit } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { correctAnswersAtom, timerAtom, userAnswersAtom, wrongQuestionsAtom } from "../store/atoms";
import { StyledDescription, StyledTitle } from "../styles/shared";
import { getTimeFormat } from "../utils/timeHandler";

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  gap: 27px;

  div.btn-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

function Result() {
	const navigate = useNavigate();

	const correctAnswers = useRecoilValue(correctAnswersAtom);

	const [userAnswers, setUserAnswers] = useRecoilState(userAnswersAtom);
	const setWrongQuestions = useSetRecoilState(wrongQuestionsAtom);

	const [timer, setTimer] = useRecoilState(timerAtom);

	const [score, setScore] = useState<number>(0);

	const getScore = () => {
		let result = 0;
		const wrongs = [] as number[];
		for (let i = 0; i < 10; i += 1) {
			if (correctAnswers[i] === userAnswers[i]) {
				result += 1;
			} else {
				wrongs.push(i);
			}
		}
		setWrongQuestions(wrongs);
		setScore(result);
	};

	useEffect(() => {
		getScore();
	}, []);

	const redoQuiz = () => {
		setUserAnswers([]);
		setTimer({ start: true, sec: 0 });
		navigate("/quiz");
	};

	return (
		<Layout page="result">
			<StyledResult>
				<p>결과</p>
				<StyledTitle>{score} / 10</StyledTitle>
				<StyledDescription>소요시간 {getTimeFormat(timer.sec)}</StyledDescription>

				<div className="btn-container">
					<Button buttonType="outlined" handleClick={() => navigate("/review")}>
						<>
							오답 확인하기<FaEdit />
						</>
					</Button>
					<Button buttonType="default" handleClick={redoQuiz}>
						<>
							다시 풀기<FaRedoAlt />
						</>
					</Button>
				</div>
			</StyledResult>
		</Layout>
	);
}

export default Result;
