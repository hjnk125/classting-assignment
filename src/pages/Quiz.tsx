import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import { useRecoilState, useRecoilValue } from "recoil";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";
import { correctAnswersAtom, questionsAtom, userAnswersAtom } from "../store/atoms";
import { decodeHtml } from "../utils/stringHandler";
import Button from "../components/Button";

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 80px;

  div.question {
    display: flex;
    gap: 8px;
    font-size: 30px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 24px;

    > h3 {
      white-space: pre-line;
    }
  }

  ul.options {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 18px;
    margin-bottom: 24px;
  }

  button {
    margin-top: auto;
  }

  div.next-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

const StyledOption = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  white-space: pre-line;

  &.correct {
    background: ${({ theme }) => theme.colors.correct};
  }

  &.wrong {
    background: ${({ theme }) => theme.colors.wrong};
  }
`;

function Quiz() {

	const questions = useRecoilValue(questionsAtom);
	const correctAnswers = useRecoilValue(correctAnswersAtom);

	const [userAnswers, setUserAnswers] = useRecoilState(userAnswersAtom);

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
		if (currIndex < 9) {
			if (selected !== null) {
				setUserAnswers([...userAnswers, selected]);
			}
			setSelected(null);
			setCurrIndex((prev) => prev + 1);
		}
	};

	return (
		<Layout page="quiz">
			<StyledQuiz>
				<div className="question">
					<p>{currIndex + 1}.</p>
					<h3>{decodeHtml(questions[currIndex].question)}</h3>
				</div>

				<ul className="options">
					{getOptionsList().map((option, i) =>
						<StyledOption key={option} className={getOptionStyle(i)}
													onClick={() => selected === null && (i === 0 || i === 1 || i === 2 || i === 3) && setSelected(i)}>
							{selected === i ? <ImRadioChecked /> : <ImRadioUnchecked />}
							{decodeHtml(option)}
						</StyledOption>)}
				</ul>

				{selected !== null && <Button buttonType="default" handleClick={handleClickNext}>
					<div className="next-btn">
						{currIndex < 9 ? "다음 문제" : "결과 보기"}
						<FaArrowRight />
					</div>
				</Button>}
			</StyledQuiz>
		</Layout>
	);
}

export default Quiz;
