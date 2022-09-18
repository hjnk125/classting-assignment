import axios from "axios";

export const fetchQuiz = async () => {
	try {
		const result = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
		return result.data;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default {};