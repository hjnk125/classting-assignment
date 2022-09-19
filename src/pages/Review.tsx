import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import { useRecoilState, useRecoilValue } from "recoil";
import { FaArrowRight, FaEdit, FaRedoAlt } from "react-icons/fa";
import Layout from "../components/Layout";
import { correctAnswersAtom, questionsAtom, userAnswersAtom, wrongQuestionsAtom } from "../store/atoms";
import { decodeHtml } from "../utils/stringHandler";
import Button from "../components/Button";

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 80px;
  gap: 56px;

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

  div.review-btn {
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

function Review() {

	const navigate = useNavigate();

	const questions = useRecoilValue(questionsAtom);
	const correctAnswers = useRecoilValue(correctAnswersAtom);
	const [userAnswers, setUserAnswers] = useRecoilState(userAnswersAtom);
	const wrongQuestions = useRecoilValue(wrongQuestionsAtom);

	const getOptionsList = (quesIndex: number) => {
		const options = questions[quesIndex].incorrect_answers.slice();
		options.splice(correctAnswers[quesIndex], 0, questions[quesIndex].correct_answer);
		return options;
	};

	const getOptionStyle = (optionIndex: number, wrongIndex: number, correctIndex: number) => {
		if (optionIndex === correctIndex) {
			return "correct";
		}
		if (optionIndex === wrongIndex) {
			return "wrong";
		}
		return "";
	};

	const redoQuiz = () => {
		setUserAnswers([]);
		navigate("/quiz");
	};

	return (
		<Layout page="review">
			<StyledReview>
				<p>오답노트(총 {wrongQuestions.length}문제)</p>

				{questions.filter((question, i) => wrongQuestions.includes(i))
					.map((question, i) => <div key={wrongQuestions[i]}>
						<div className="question">
							<p>{wrongQuestions[i] + 1}.</p>
							<h3>{decodeHtml(question.question)}</h3>
						</div>

						<ul className="options">
							{getOptionsList(wrongQuestions[i]).map((option, j) =>
								<StyledOption key={option}
															className={getOptionStyle(j, userAnswers[wrongQuestions[i]], correctAnswers[wrongQuestions[i]])}>
									{userAnswers[wrongQuestions[i]] === j ? <ImRadioChecked /> : <ImRadioUnchecked />}
									{decodeHtml(option)}
								</StyledOption>)}
						</ul>
					</div>)}

					<Button buttonType="default" handleClick={redoQuiz}>
						<div className="review-btn">
							다시 풀기
							<FaRedoAlt />
						</div>
					</Button>
			</StyledReview>
		</Layout>
	);
}

export default Review;
