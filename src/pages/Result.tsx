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
import Chart from "../components/Chart";

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  gap: 27px;

  div.chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
  }

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
				<p>총 소요시간 {getTimeFormat(timer.sec)}</p>
				<div className="chart-container">
					<Chart data={[{ name: "정답", value: score }, { name: "오답", value: 10 - score }]} />
					<StyledTitle>{score} / 10</StyledTitle>
				</div>
				<StyledDescription>정답 {score}문제 / 오답 {10 - score}문제</StyledDescription>

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
