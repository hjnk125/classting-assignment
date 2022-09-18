export type QuestionType = {
	category: string;
	correct_answer: string;
	difficulty: "easy" | "medium" | "hard";
	incorrect_answers: string[];
	question: string;
	type: "multiple"
};

export default {};
