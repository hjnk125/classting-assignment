import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("app test", () => {
	test("최초 진입 시 main 페이지 랜더링", async () => {
		const { getByRole, getByText } = render(<App />);

		await waitFor(() => {
			const h1Element = getByText("퀴즈를 시작해보세요.");
			expect(h1Element).toBeInTheDocument();

			const buttonElement = getByRole("button");
			expect(buttonElement).toBeInTheDocument();
		});
	});

	test("퀴즈 풀기 버튼 클릭 시 '/quiz'로 이동", async () => {
		const { getByTestId, getByRole } = render(<App />);

		const buttonElement = getByRole("button");
		fireEvent.click(buttonElement);

		await waitFor(() => expect(getByTestId("quiz")).toBeInTheDocument());
	});
});
