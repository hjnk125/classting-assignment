import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import { useRecoilState, useRecoilValue } from "recoil";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";
import { correctAnswersAtom, questionsAtom, timerAtom, userAnswersAtom } from "../store/atoms";
import { decodeHtml } from "../utils/stringHandler";
import Button from "../components/Button";
import { StyledOption, StyledOptionContainer, StyledQuestion } from "../styles/shared";

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 80px;

  button {
    margin-top: auto;
  }
`;

function Quiz() {

	const navigate = useNavigate();

	const questions = useRecoilValue(questionsAtom);
	const correctAnswers = useRecoilValue(correctAnswersAtom);

	const [userAnswers, setUserAnswers] = useRecoilState(userAnswersAtom);

	const [timer, setTimer] = useRecoilState(timerAtom)

	const [currIndex, setCurrIndex] = useState(userAnswers?.length || 0);

	const [selected, setSelected] = useState<0 | 1 | 2 | 3 | null>(null);

	const getOptionsList = () => {
		const options = questions[currIndex].incorrect_answers.slice();
		options.splice(correctAnswers[currIndex], 0, questions[currIndex].correct_answer);
		return options;
	};

	const getOptionStyle = (optionIndex: number) => {
		if (selected !== null) {
			if (optionIndex === correctAnswers[currIndex]) {
				return "correct";
			}
			if (optionIndex === selected) {
				return "wrong";
			}
		}
		return "";
	};

	const handleClickNext = () => {
		if (selected !== null) {
			setUserAnswers([...userAnswers, selected]);
		}

		if (currIndex < 9) {
			setSelected(null);
			setCurrIndex((prev) => prev + 1);
		} else {
			navigate("/result");
			setTimer({...timer, start: false})
		}
	};

	return (
		<Layout page="quiz">
			<StyledQuiz>
				<StyledQuestion>
					<p>{currIndex + 1}.</p>
					<h3>{decodeHtml(questions[currIndex].question)}</h3>
				</StyledQuestion>

				<StyledOptionContainer>
					{getOptionsList().map((option, i) =>
						<StyledOption key={option} className={getOptionStyle(i)}
													onClick={() => selected === null && (i === 0 || i === 1 || i === 2 || i === 3) && setSelected(i)}>
							{selected === i ? <ImRadioChecked /> : <ImRadioUnchecked />}
							{decodeHtml(option)}
						</StyledOption>)}
				</StyledOptionContainer>

				{selected !== null && <Button buttonType="default" handleClick={handleClickNext}>
					<>
						{currIndex < 9 ? "다음 문제" : "결과 보기"}
						<FaArrowRight />
					</>
				</Button>}
			</StyledQuiz>
		</Layout>
	);
}

export default Quiz;
