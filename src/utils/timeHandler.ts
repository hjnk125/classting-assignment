export const addZero = (time: number) => (time >= 10 ? time : `0${time}`);

export const getTimeFormat = (second: number) =>{
	const mm = Math.floor((second % 3600) / 60);
	const hh = Math.floor(second / 3600);
	const ss = second % 60;

	return `${addZero(hh)}:${addZero(mm)}:${addZero(ss)}`
}

export default {};