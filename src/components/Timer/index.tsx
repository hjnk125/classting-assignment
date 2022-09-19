import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { timerAtom } from "../../store/atoms";
import { getTimeFormat } from "../../utils/timeHandler";

const Timer = () => {

	const [timer, setTimer] = useRecoilState(timerAtom)

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer.start) {
				setTimer({...timer, sec: timer.sec + 1});
			} else {
				clearInterval(interval);
			}
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<div>
			{getTimeFormat(timer.sec)}
		</div>
	);
};

export default React.memo(Timer);
