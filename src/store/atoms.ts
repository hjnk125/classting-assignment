import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { QuestionType } from "../types";

const { persistAtom: sessionAtom } = recoilPersist({
	key: "sessionContentsStore",
	storage: typeof window === "undefined" ? undefined : sessionStorage
});

export const questionsAtom = atom<QuestionType[]>({
	key: "questionsAtom",
	default: [] as QuestionType[],
	effects: [sessionAtom]
});

export const correctAnswersAtom = atom<(0 | 1 | 2 | 3)[]>({
	key: "correctAnswersAtom",
	default: [] as (0 | 1 | 2 | 3)[],
	effects: [sessionAtom]
});

export const userAnswersAtom = atom<(0 | 1 | 2 | 3)[]>({
	key: "userAnswersAtom",
	default: [] as (0 | 1 | 2 | 3)[],
	effects: [sessionAtom]
});

export const wrongQuestionsAtom = atom<number[]>({
	key: "wrongQuestionsAtom",
	default: [] as number[],
	effects: [sessionAtom]
});

export default {};