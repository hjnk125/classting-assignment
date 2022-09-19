import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRedoAlt, FaEdit } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { correctAnswersAtom, userAnswersAtom, wrongQuestionsAtom } from "../store/atoms";

const StyledResult = styled.div`
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
	
	p.result-time {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
  }
	
	div.btn-container {
    display: flex;
    align-items: center;
    gap: 8px;
	}

  div.result-btn {
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
		setUserAnswers([])
		navigate("/quiz")
	}

	return (
		<Layout page="result">
			<StyledResult>
				<p>결과</p>
				<h1>{score} / 10</h1>

				<p className="result-time">소요시간 00:00:00</p>

				<div className="btn-container">
					<Button buttonType="outlined">
						<div className="result-btn">
							오답 확인하기
							<FaEdit />
						</div>
					</Button>
					<Button buttonType="default" handleClick={redoQuiz}>
						<div className="result-btn">
							다시 풀기
							<FaRedoAlt />
						</div>
					</Button>
				</div>
			</StyledResult>
		</Layout>
	);
}

export default Result;
