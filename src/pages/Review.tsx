import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FaRedoAlt } from "react-icons/fa";
import Layout from "../components/Layout";
import { correctAnswersAtom, questionsAtom, timerAtom, userAnswersAtom, wrongQuestionsAtom } from "../store/atoms";
import { decodeHtml } from "../utils/stringHandler";
import Button from "../components/Button";
import { StyledOption, StyledOptionContainer, StyledQuestion } from "../styles/shared";

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 80px;
  gap: 56px;
`;

function Review() {

	const navigate = useNavigate();

	const questions = useRecoilValue(questionsAtom);
	const correctAnswers = useRecoilValue(correctAnswersAtom);
	const [userAnswers, setUserAnswers] = useRecoilState(userAnswersAtom);
	const wrongQuestions = useRecoilValue(wrongQuestionsAtom);

	const setTimer = useSetRecoilState(timerAtom);

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
		setTimer({ start: true, sec: 0 });
	};

	return (
		<Layout page="review">
			<StyledReview data-testid="review">
				<p>오답노트(총 {wrongQuestions.length}문제)</p>

				{questions.filter((question, i) => wrongQuestions.includes(i))
					.map((question, i) => <div key={wrongQuestions[i]}>
						<StyledQuestion>
							<p>{wrongQuestions[i] + 1}.</p>
							<h3>{decodeHtml(question.question)}</h3>
						</StyledQuestion>

						<StyledOptionContainer>
							{getOptionsList(wrongQuestions[i]).map((option, j) =>
								<StyledOption key={option}
															className={getOptionStyle(j, userAnswers[wrongQuestions[i]], correctAnswers[wrongQuestions[i]])}>
									{userAnswers[wrongQuestions[i]] === j ? <ImRadioChecked /> : <ImRadioUnchecked />}
									{decodeHtml(option)}
								</StyledOption>)}
						</StyledOptionContainer>
					</div>)}

					<Button buttonType="default" handleClick={redoQuiz}>
						<>
							다시 풀기
							<FaRedoAlt />
						</>
					</Button>
			</StyledReview>
		</Layout>
	);
}

export default Review;
